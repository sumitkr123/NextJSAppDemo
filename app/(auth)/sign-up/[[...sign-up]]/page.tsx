import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 h-screen justify-center items-center">
      <SignUp />
    </div>
  );
}
