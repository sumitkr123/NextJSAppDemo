import { User } from "@clerk/nextjs/server";
import ThreadCards from "../cards/ThreadCards";

type PostFeedProps = {
  posts: Omit<Omit<any, never>, never>[];
  user: User | null;
};

const PostFeed = ({ posts, user }: PostFeedProps) => {
  return (
    <>
      {posts.length === 0 ? (
        <p className="no-result">No threads found</p>
      ) : (
        <>
          {posts.map((post) => {
            return (
              <ThreadCards
                key={post._id}
                id={JSON.stringify(post._id)}
                currentUserId={user?.id ?? ""}
                parentId={JSON.stringify(post?.parentId)}
                content={post?.text}
                author={JSON.stringify(post?.author)}
                community={post?.community}
                createdAt={post?.createdAt}
                comments={JSON.stringify(post?.children)}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PostFeed;
