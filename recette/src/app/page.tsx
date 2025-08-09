import { SignedIn, SignedOut, SignInButton, UserButton, GoogleOneTap } from "@clerk/nextjs";

export default function Home() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <GoogleOneTap />
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton  />
            </SignedIn>
          </header>
  );
}
