import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export function PendingAlert() {
  return (
    <Alert variant="default" className="my-4 items-center">
      <InfoCircledIcon className="h-4 w-4" />
      <AlertTitle>Loading fruit list</AlertTitle>
      <AlertDescription>Please wait some seconds.</AlertDescription>
    </Alert>
  );
}
