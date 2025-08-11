import SignIns from "@/components/sign-in/sign-in";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Rocket } from "lucide-react";

export default function StartHeader() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button><Rocket/> Commencer</Button>
            </DialogTrigger>
            <DialogOverlay className="bg-white/50 backdrop-blur">
            <DialogContent className="sm:max-w-[425px] w-full flex-grow bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] px-4 sm:w-96 sm:px-8 p-6 rounded-lg shadow-lg bg-neutral-900 border-0" >
                <DialogTitle className="hidden"/>
                <SignIns/>
            </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}

