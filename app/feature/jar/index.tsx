import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Jar() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-lg">Jar</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4" />
    </Card>
  );
}
