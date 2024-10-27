import { FruitDTO } from "@/app/domain/fruit.dto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function GroupList({
  list,
  group
}: {
  list: Array<FruitDTO>;
  group: "family" | "order" | "genus";
}) {
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
        <AccordionItem value={`group-${idx}`}>
          <AccordionTrigger>
            {group}
          </AccordionTrigger>
          {fruitsByGroup[group].map((fruit, fIndex) =>
            <AccordionContent>
              {fruit.name}
            </AccordionContent>
          )}
        </AccordionItem>
      )}
    </Accordion>
  );
}
