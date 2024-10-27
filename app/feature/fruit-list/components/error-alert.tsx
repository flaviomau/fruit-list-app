import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function ErrorAlert() {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error to load the fruit list</AlertTitle>
      <AlertDescription>Try again later.</AlertDescription>
    </Alert>
  );
}
