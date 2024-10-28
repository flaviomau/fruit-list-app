import { FruitDTO } from "@/app/domain/fruit.dto";
import { DataFormat } from "./data-format";

interface PlanListProps {
  list: Array<FruitDTO>;
  format: "table" | "list";
}

export function PlainList({ list, format }: PlanListProps) {
  return <DataFormat data={list} format={format} />;
}
