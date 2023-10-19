"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <h1 className="head-text text-left text-neutral-950">Loading..!</h1>;
  } else if (!isSignedIn) {
    return (
      <div className="flex flex-col justify-center items-center my-auto">
        <h1 className="head-text text-white">Signed out..!</h1>
        <Link href={"/sign-in"} className="mt-5">
          <p className="text-white underline hover:text-cyan-400">
            {"Sign-In>>>>"}
          </p>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <UserButton afterSignOutUrl="/" />
        <h1 className="head-text text-left text-neutral-950">Hello /</h1>
      </div>
    );
  }
}
