"use client";

import { FruitDTO } from "@/app/domain/fruit.dto";
import { createContext, useState } from "react";
import { FruitList } from "../fruit-list";
import { Jar } from "../jar";

interface ContainerContextSchema {
  addFruit: (fruit: FruitDTO) => void;
  items: JarItem[];
  totalCalories: number;
}

export const ContainerContext = createContext<ContainerContextSchema>({
  items: [],
  addFruit: () => {},
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

  return (
    <ContainerContext.Provider value={{ addFruit, items, totalCalories }}>
      <div className="w-1/2 m-4">
        <FruitList />
      </div>
      <div className="w-1/2 m-4">
        <Jar isEmpty={items.length === 0}/>
      </div>
    </ContainerContext.Provider>
  );
}
