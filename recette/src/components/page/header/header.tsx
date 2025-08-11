import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Rocket } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import StartHeader from "./start";

export default function Header() {
  return (
    <header className="flex justify-end items-center p-4 h-16 w-full">
        <Input className="mr-4 w-51.5" type="text" placeholder="Rechercher"/>
        <SignedOut>
          <StartHeader/>
        </SignedOut>
        <SignedIn>
        <UserButton />
        </SignedIn>
    </header>
  );
}