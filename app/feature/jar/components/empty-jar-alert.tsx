import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { CirclePlusIcon, PlusIcon } from "lucide-react";

export function EmptyJarAlert() {
  return (
    <Alert variant="default" className="my-4 items-center">
      <InfoCircledIcon className="h-4 w-4" />
      <AlertTitle>Jar is empty</AlertTitle>
      <AlertDescription>
        <div className="flex flex-row items-center">
          Click on <CirclePlusIcon className="mx-2 h-4 w-4" /> to add a fruit or{" "}
          <PlusIcon className="mx-2 h-4 w-4" /> to add group of fruits.
        </div>
      </AlertDescription>
    </Alert>
  );
}
