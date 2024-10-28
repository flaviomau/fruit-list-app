import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JarTable } from "./components/jar-table";
import { EmptyJarAlert } from "./components/empty-jar-alert";
import { JarChart } from "./components/jar-chart";

interface JarProps {
  isEmpty: boolean;
}

export function Jar({ isEmpty }: JarProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-lg">Jar</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {isEmpty && <EmptyJarAlert />}
        {!isEmpty && <><JarTable /><JarChart /></>}
      </CardContent>
    </Card>
  );
}
