import Image from "next/image";
import Link from "next/link";

export type ThreadCardProps = {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: Array<{
    author: {
      image: string;
    };
  }>;
  isComment?: boolean;
};

const ThreadCards = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: ThreadCardProps) => {
  console.log(content, "content");

  return (
    <article
      className={`card flex w-full flex-col rounded-xl ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4 ">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                priority={true}
                src={author.image}
                alt="Profile Photo"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>

            <div className="thread-card_bar" />
          </div>

          <div className="flex w-full flex-col">
            <Link href={`/profile/${author.id}`} className="h-11 w-11">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.name}
              </h4>
            </Link>

            <p className="mt-2 text-small-regular text-light-2 whitespace-pre-line">
              {content}
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <div className="flex gap-3.5">
                <Image
                  priority={true}
                  src={"/assets/heart-gray.svg"}
                  alt="heart"
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
                <Link href={`/thread/${id}`} className="flex flex-row">
                  <Image
                    priority={true}
                    src={"/assets/reply.svg"}
                    alt="reply"
                    width={24}
                    height={24}
                    className="object-contain cursor-pointer"
                  />
                  {!isComment && comments.length > 0 && (
                    <div className="bg-red-600 rounded-full justify-center items-center flex flex-1 h-[16px] w-[16px] absolute ml-[13px] mt-[-4px]">
                      <span className="text-subtle-medium text-light-1">
                        {comments.length >= 10
                          ? comments.length.toString() + "+"
                          : comments.length}
                      </span>
                    </div>
                  )}
                </Link>
                <Image
                  priority={true}
                  src={"/assets/repost.svg"}
                  alt="repost"
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
                <Image
                  priority={true}
                  src={"/assets/share.svg"}
                  alt="share"
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link
                  href={`/thread/${id}`}
                  className="w-fit mt-1 inline-flex text-subtle-medium text-gray-1"
                >
                  {comments.length} replies
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCards;
