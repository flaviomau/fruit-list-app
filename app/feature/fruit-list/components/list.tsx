"use client";

import { FruitDTO } from "@/app/domain/fruit.dto";
import { Group } from "@/app/domain/group";
import { GroupList } from "./group-list";
import { PlainList } from "./plain-list";
import { TableIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function List({ list, group }: { list: Array<FruitDTO>; group: Group }) {
  const [format, setFormat] = useState<"table" | "list">("list");
  const mapGroup: Partial<Record<Group, "family" | "genus" | "order">> = {
    Family: "family",
    Genus: "genus",
    Order: "order"
  };

  const selectedGroup = mapGroup[group];

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-row gap-4">
        <Button
          variant={format === "list" ? "secondary" : "outline"}
          size="icon"
          onClick={() => setFormat("list")}
        >
          <ListBulletIcon className="h-4 w-4" />
        </Button>
        <Button
          variant={format === "table" ? "secondary" : "outline"}
          size="icon"
          onClick={() => setFormat("table")}
        >
          <TableIcon className="h-4 w-4" />
        </Button>
      </div>
      {selectedGroup
        ? <GroupList group={selectedGroup} list={list} format={format} />
        : <PlainList list={list} format={format} />}
    </div>
  );
}
