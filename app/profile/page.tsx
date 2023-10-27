import { UserProfile } from "@clerk/nextjs";
import { FunctionComponent } from "react";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = async () => {
  return (
    <UserProfile
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "m-0",
          pageScrollBox: "m-0",
        },
      }}
    />
  );
};

export default Profile;
