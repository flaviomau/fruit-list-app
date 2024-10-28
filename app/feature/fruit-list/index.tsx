"use client";

import { getFruitList } from "@/app/services/fruit-service";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ErrorAlert } from "./components/error-alert";
import { EmptyAlert } from "./components/empty-alert";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup
} from "@/components/ui/select";
import { useGetFruitList } from "./hook/useGetFruitList";
import { Group } from "@/app/domain/group";
import { List } from "./components/list";
import { PendingAlert } from "./components/pending-alert";

export function FruitList() {
  const { error, fruitList, isEmpty, isPending } = useGetFruitList();
  const [group, setGroup] = useState<Group>(Group.None);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-lg">Fruit List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-2 items-center">
          <span>Group By</span>
          <Select
            value={group}
            onValueChange={value => setGroup(value as Group)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(Group).map((g, idx) =>
                <SelectItem key={idx} value={g}>
                  {g}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        {isPending && <PendingAlert />}
        {error && <ErrorAlert />}
        {isEmpty && !isPending && <EmptyAlert />}
        {!isEmpty && <List list={fruitList} group={group} />}
      </CardContent>
    </Card>
  );
}
