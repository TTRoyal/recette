import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useUser } from "@clerk/nextjs";

export default function Profile() {
    const { user } = useUser();
    return (
    <Popover>
        <PopoverTrigger>qsd
            <Button className="p-0 rounded-3xl w-5 h-5 hover:bg-primary bg-white hover:cursor-pointer" >
                <Avatar>
                    <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User Avatar"} className="" />
                </Avatar>
            </Button>
        </PopoverTrigger>
    </Popover>
  );
}