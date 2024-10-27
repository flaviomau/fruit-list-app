import { FruitDTO } from "@/app/domain/fruit.dto";
import { Group } from "@/app/domain/group";
import { GroupList } from "./group-list";
import { PlainList } from "./plain-list";

export function List({ list, group }: { list: Array<FruitDTO>; group: Group }) {
  const mapGroup: Partial<Record<Group, "family" | "genus" | "order">> = {
    Family: "family",
    Genus: "genus",
    Order: "order"
  };

  const selectedGroup = mapGroup[group];

  return selectedGroup
    ? <GroupList group={selectedGroup} list={list} />
    : <PlainList list={list} />;
}
