"use client";

import { FruitDTO } from "@/app/domain/fruit.dto";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { ContainerContext } from "../../container";

interface AddGroupButtonProps {
  fruitsByGroup: FruitDTO[];
}

export function AddGroupButton({ fruitsByGroup }: AddGroupButtonProps) {
  const { addFruits } = useContext(ContainerContext);

  const handleAddGroup = () => {
    addFruits(fruitsByGroup);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => handleAddGroup()}
    >
      <PlusIcon className="h-4 w-4" />
    </Button>
  );
}
