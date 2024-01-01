import { FunctionComponent } from "react";

import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
import { CreateThreadProps } from "@/types";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CreateThread: FunctionComponent<CreateThreadProps> = async (props) => {
  const user = await currentUser();
  if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={userInfo?._id.toString()} />
    </>
  );
};

export default CreateThread;
