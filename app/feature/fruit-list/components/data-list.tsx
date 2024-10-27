import { FruitDTO } from "@/app/domain/fruit.dto";
import { Separator } from "@/components/ui/separator";

export function DataList({ data }: { data: FruitDTO[] }) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <span className="italic">Fruit name (calories)</span>
      <Separator />
      {data.map((fruit, idx) =>
        <span
          key={`data-list-${idx}`}
          className="text-sm"
        >{`${fruit.name} (${fruit.nutritions.calories})`}</span>
      )}
    </div>
  );
}
