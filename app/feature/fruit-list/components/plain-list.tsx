import { FruitDTO } from "@/app/domain/fruit.dto";
import { DataFormat } from "./data-format";

export function PlainList({
  list,
  format
}: {
  list: Array<FruitDTO>;
  format: "table" | "list";
}) {
  return <DataFormat data={list} format={format} />;
}
