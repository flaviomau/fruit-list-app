import { FruitDTO } from "@/app/domain/fruit.dto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { DataFormat } from "./data-format";

interface GroupListProps {
  list: Array<FruitDTO>;
  group: "family" | "order" | "genus";
  format: "table" | "list";
}

export function GroupList({ list, group, format }: GroupListProps) {
  const fruitsByGroup: Record<string, Array<FruitDTO>> = {};
  for (const fruit of list) {
    if (!fruitsByGroup[fruit[group]]) {
      fruitsByGroup[fruit[group]] = [];
    }

    fruitsByGroup[fruit[group]].push(fruit);
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {Object.keys(fruitsByGroup).map((group, idx) =>
        <div className="flex flex-row items-center gap-4" key={`group-${idx}`}>
          <AccordionItem value={`group-${idx}`} className="w-full">
            <AccordionTrigger>
              {group}
            </AccordionTrigger>
            <AccordionContent>
              <DataFormat data={fruitsByGroup[group]} format={format} />
            </AccordionContent>
          </AccordionItem>
          <Button type="button" variant="outline" size="icon">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Accordion>
  );
}
