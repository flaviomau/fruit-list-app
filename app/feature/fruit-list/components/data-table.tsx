import { FruitDTO } from "@/app/domain/fruit.dto";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export function DataTable({ data }: { data: FruitDTO[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Family</TableHead>
          <TableHead>Order</TableHead>
          <TableHead>Genus</TableHead>
          <TableHead className="text-right">Amount of calories</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((fruit, idx) =>
          <TableRow key={`data-table-item-${idx}`}>
            <TableCell>
              {fruit.name}
            </TableCell>
            <TableCell>
              {fruit.family}
            </TableCell>
            <TableCell>
              {fruit.order}
            </TableCell>
            <TableCell>
              {fruit.genus}
            </TableCell>
            <TableCell className="text-right">
              {fruit.nutritions.calories}
            </TableCell>
            <TableCell>
              <Button type="button" variant="ghost">
                <PlusCircledIcon />
              </Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
