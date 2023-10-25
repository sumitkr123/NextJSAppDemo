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
                id={post._id}
                currentUserId={user?.id ?? ""}
                parentId={post?.parentId}
                content={post?.text}
                author={post?.author}
                community={post?.community}
                createdAt={post?.createdAt}
                comments={post?.children}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PostFeed;
