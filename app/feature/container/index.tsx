"use client";

import { FruitDTO } from "@/app/domain/fruit.dto";
import { createContext, useState } from "react";
import { FruitList } from "../fruit-list";
import { Jar } from "../jar";
import { JarItem } from "@/app/domain/jar";

interface ContainerContextSchema {
  addFruit: (fruit: FruitDTO) => void;
  addFruits: (fruits: FruitDTO[]) => void;
  items: JarItem[];
  totalCalories: number;
}

export const ContainerContext = createContext<ContainerContextSchema>({
  items: [],
  addFruit: () => {},
  addFruits: () => {},
  totalCalories: 0
});

export function Container() {
  const [items, setItems] = useState<JarItem[]>([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const addFruit = (fruit: FruitDTO) => {
    const existentItem = items.find(item => item.name === fruit.name);
    const newItems = [
      ...items.filter(currentItem => currentItem.name !== existentItem?.name),
      existentItem
        ? { ...existentItem, quantity: existentItem.quantity + 1 }
        : { quantity: 1, name: fruit.name, calories: fruit.nutritions.calories }
    ]; 
    setItems(newItems);
    setTotalCalories(prev => prev + fruit.nutritions.calories)
  };

  const addFruits = (fruits: FruitDTO[]) => {
    const newItems = [...items]

    for(const fruit of fruits) {
      const existentFruitIdx = items.findIndex(item => item.name === fruit.name);

      if(existentFruitIdx > -1) {
        newItems[existentFruitIdx].quantity += 1
      } else {
        newItems.push({ quantity: 1, name: fruit.name, calories: fruit.nutritions.calories })
      }

      setTotalCalories(prev => prev + fruit.nutritions.calories)
    }
    
    setItems(newItems);
  };

  return (
    <ContainerContext.Provider value={{ addFruit, addFruits, items, totalCalories }}>
      <div className="w-1/2 m-4">
        <FruitList />
      </div>
      <div className="w-1/2 m-4">
        <Jar isEmpty={items.length === 0}/>
      </div>
    </ContainerContext.Provider>
  );
}
