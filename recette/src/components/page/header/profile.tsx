import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { ChefHat, LogOut, Settings } from "lucide-react";

export default function Profile() {
    const { user } = useUser();
    return (
    <Popover>
        <PopoverTrigger className="hover:cursor-pointer">
            
                <Avatar>
                    <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User Avatar"} className="" />
                </Avatar>
            
        </PopoverTrigger>
        <PopoverContent className="mr-4 bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] sm:max-w-[205px] p-2">
            <Avatar className="w-16 h-16 mx-auto mb-2">
                <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User Avatar"} className="" />
            </Avatar>
            <h2 className="font-semibold text-center">{user?.fullName}</h2>
            <Button variant="ghost" className="w-full justify-start hover:cursor-pointer my-1"> <ChefHat/> Mes Recettes <Badge variant="secondary">20</Badge> </Button>
            <Button variant="ghost" className="w-full justify-start hover:cursor-pointer my-1"> <Settings/> Paramètres</Button>
            <SignOutButton>
                <Button variant="ghost" className="w-full justify-start hover:cursor-pointer my-1"> <LogOut/> Se Déconnecter</Button>
            </SignOutButton>
        </PopoverContent>
    </Popover>
  );
}