import { FruitDTO } from "@/app/domain/fruit.dto";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { ContainerContext } from "../../container";

interface DataListProps {
  data: FruitDTO[];
}

export function DataList({ data }: DataListProps) {
  const { addFruit } = useContext(ContainerContext);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <span className="italic">Fruit name (calories)</span>
      <Separator />
      {data.map((fruit, idx) =>
        <div className="flex flex-row items-center" key={`data-list-${idx}`}>
          <span className="text-sm">{`${fruit.name} (${fruit.nutritions
            .calories})`}</span>
          <Button type="button" variant="ghost" onClick={() => addFruit(fruit)}>
            <PlusCircledIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
