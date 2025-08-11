import Header from "@/components/page/header/header";
import { GoogleOneTap } from "@clerk/nextjs";

export default function Home() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <Header />
      <GoogleOneTap />
            
    </header>
  );
}
