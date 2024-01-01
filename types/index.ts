export type ThreadParams = {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
};

export type AddCommentToThreadParams = {
  threadId: string;
  commentText: string;
  userId: string;
  path: string;
};

export type AddLikesToThreadParams = {
  threadId: string;
  userId: string;
  path: string;
};

export interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

export type ThreadCardProps = {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author:
    | {
        name: string;
        image: string;
        id: string;
      }
    | string;
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments:
    | Array<{
        author: {
          image: string;
        };
      }>
    | string;
  isComment?: boolean;
  isThreadLiked?: boolean;
};
