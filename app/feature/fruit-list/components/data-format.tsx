import { FruitDTO } from "@/app/domain/fruit.dto";
import { DataList } from "./data-list";
import { DataTable } from "./data-table";

export function DataFormat({
  data,
  format
}: {
  data: FruitDTO[];
  format: "list" | "table";
}) {
  return format === "list"
    ? <DataList data={data} />
    : <DataTable data={data} />;
}
