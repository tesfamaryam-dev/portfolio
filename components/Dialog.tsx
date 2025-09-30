import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Maximize } from "lucide-react";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ExpandDialogProps {
    src: string;
    tabIndex?: number;
    className?: string;
}

export function ExpandDialog({ src, tabIndex, className }: ExpandDialogProps) {
    return (
        <Dialog>
            <DialogTrigger tabIndex={tabIndex} className={className}>
                <Maximize size={20} />
            </DialogTrigger>
            <DialogContent className="relative w-11/12 sm:w-4/5 max-w-3xl aspect-[1493/917] overflow-hidden">
                <VisuallyHidden>
                    <DialogTitle>Image Preview</DialogTitle>
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
