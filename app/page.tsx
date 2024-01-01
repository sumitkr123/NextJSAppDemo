import { FunctionComponent } from "react";

import PostFeed from "@/components/posts/PostFeed";
import { fetchPosts } from "@/lib/actions/thread.action";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = async () => {
  const result = await fetchPosts(1, 30);

  const user = await currentUser();

  return (
    <section className="mt-9 flex flex-col gap-10">
      {!user ? (
        <Link
          href={"/sign-in"}
          className="text-heading1-bold text-light-4 hover:scale-125 hover:underline"
        >{`Sign in-->>>>`}</Link>
      ) : (
        <PostFeed posts={result.posts} user={user} />
      )}
    </section>
  );
};

export default Home;
