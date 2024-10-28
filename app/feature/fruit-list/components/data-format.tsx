import { FruitDTO } from "@/app/domain/fruit.dto";
import { DataList } from "./data-list";
import { DataTable } from "./data-table";

interface DataFormatProps {
  data: FruitDTO[];
  format: "list" | "table";
}

export function DataFormat({ data, format }: DataFormatProps) {
  return format === "list"
    ? <DataList data={data} />
    : <DataTable data={data} />;
}
