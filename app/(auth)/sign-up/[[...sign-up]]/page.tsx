import { SignUp, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();

  if (user !== null) redirect("/");

  return (
    <div className="flex flex-col flex-1 h-screen justify-center items-center">
      <SignUp />
    </div>
  );
}
