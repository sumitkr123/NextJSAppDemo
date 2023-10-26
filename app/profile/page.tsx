import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { FunctionComponent } from "react";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = async () => {
  const user = await currentUser();

  const userInfo = await fetchUser(user?.id ?? "");

  console.log(user, userInfo, "--------------------");

  return <div>Hello</div>;
};

export default Profile;
