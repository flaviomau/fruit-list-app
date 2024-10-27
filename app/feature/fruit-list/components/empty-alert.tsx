import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export function EmptyAlert() {
  return (
    <Alert variant="default">
      <InfoCircledIcon className="h-4 w-4" />
      <AlertTitle>No fruits found</AlertTitle>
    </Alert>
  );
}
