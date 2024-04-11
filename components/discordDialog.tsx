import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { IconCopy } from "@tabler/icons-react";

export default function DiscordDialog({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Discord</DialogTitle>
        <DialogDescription>
          You can add me on discord using this username!
        </DialogDescription>
        <div className="flex space-x-2">
          <Input defaultValue="@kdv_" readOnly />
          <Button
            type="submit"
            size="sm"
            variant="secondary"
            className="h-full px-4"
            onClick={() => {
              navigator.clipboard.writeText("@kdv_");
              toast("Copied to clipboard!", {
                closeButton: true,
                duration: 3000,
              });
            }}
          >
            <IconCopy className="size-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
