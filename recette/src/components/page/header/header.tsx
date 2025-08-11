"use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ChefHat } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import StartHeader from "./start";
import Profile from "./profile";

export default function Header() {
  return (
    <header className="flex justify-end items-center p-4 h-16 w-full">
        <Input className="mr-4 w-51.5" type="text" placeholder="Rechercher"/>
        <SignedOut>
          <StartHeader/>
        </SignedOut>
        <SignedIn>
          <Button className="mr-4" >
            <ChefHat  className="h-4 w-4 " />
            Ajouter une recette
          </Button>
          <Profile />
        </SignedIn>
    </header>
  );
}