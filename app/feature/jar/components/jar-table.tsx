import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useContext } from "react";
import { ContainerContext } from "../../container";

export function JarTable() {
  const { items, totalCalories } = useContext(ContainerContext);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Amount of calories</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Total of calories</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, idx) =>
          <TableRow key={`jar-table-item-${idx}`}>
            <TableCell>
              {item.name}
            </TableCell>
            <TableCell>
              {item.calories}
            </TableCell>
            <TableCell>
              {item.quantity}
            </TableCell>
            <TableCell className="text-right">
              {item.quantity * item.calories}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {totalCalories}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
