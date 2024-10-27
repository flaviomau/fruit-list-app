import { FruitDTO } from "@/app/domain/fruit.dto";
import { Group } from "@/app/domain/group";
import { getFruitList } from "@/app/services/fruit-service";
import { useEffect, useState } from "react";

export function useGetFruitList() {
  const [fruitList, setFruitList] = useState<Array<FruitDTO>>([])
  const [error, setError] = useState('')


  useEffect(()=>{
    const updateFruitList = async () => {
      const fruiListResponse = await getFruitList()
      if(fruiListResponse?.data) {
        setFruitList(fruiListResponse.data)
      }

      if(fruiListResponse?.error) {
        setError(fruiListResponse?.error)
      }
    }
    updateFruitList()
  }, [])

  return {
    fruitList,
    isEmpty: fruitList.length === 0,
    error
  };
}