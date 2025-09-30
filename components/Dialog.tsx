import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Maximize } from "lucide-react";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ExpandDialogProps extends React.ComponentPropsWithoutRef<"button"> {
  src: string;
}

export function ExpandDialog(props: ExpandDialogProps) {
  const { src } = props;

  return (
    <Dialog>
      <DialogTrigger {...props}>
        <Maximize size={20} />
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:w-4/5 max-w-3xl aspect-[1493/917] overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>image preview</DialogTitle>
        </VisuallyHidden>
        <Image
          fill
          alt="project image"
          src={src}
          className="object-cover rounded"
        />
      </DialogContent>
    </Dialog>
  );
}
