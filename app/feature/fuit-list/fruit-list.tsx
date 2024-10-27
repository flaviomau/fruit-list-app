import { getFruitList } from "@/app/services/fruit-service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorAlert } from "./error-alert";
import { EmptyAlert } from "./empty-alert";

export async function FruitList() {
  const fruiListResponse = await getFruitList()
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Fruit List</CardTitle>
      </CardHeader>
      <CardContent>
        {!fruiListResponse.success && <ErrorAlert/>}
        {fruiListResponse.data?.length === 0 && <EmptyAlert/>}
      </CardContent>
    </Card>
  );
}
