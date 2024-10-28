import { FruitDTO } from "@/app/domain/fruit.dto";
import { getFruitList } from "@/app/services/fruit-service";
import { useEffect, useState, useTransition } from "react";

export function useGetFruitList() {
  const [isPending, setIsPending] = useState(true);
  const [fruitList, setFruitList] = useState<Array<FruitDTO>>([])
  const [error, setError] = useState('')


  useEffect(()=>{
    const updateFruitList = async () => {
      setIsPending(true)
      const fruiListResponse = await getFruitList()
      if(fruiListResponse?.data) {
        setFruitList(fruiListResponse.data)
      }

      if(fruiListResponse?.error) {
        setError(fruiListResponse?.error)
      }
      setIsPending(false)
    }
    updateFruitList()
  }, [])

  return {
    fruitList,
    isEmpty: fruitList.length === 0,
    error,
    isPending
  };
}