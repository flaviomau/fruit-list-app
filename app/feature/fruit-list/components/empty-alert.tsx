import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export function EmptyAlert() {
  return (
    <Alert variant="default" className="my-4 items-center">
      <InfoCircledIcon className="h-4 w-4" />
      <AlertTitle>No fruits found</AlertTitle>
      <AlertDescription>Try a different filter.</AlertDescription>
    </Alert>
  );
}
