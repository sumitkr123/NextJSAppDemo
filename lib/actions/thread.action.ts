"use server";

import { revalidatePath } from "next/cache";

import {
  AddCommentToThreadParams,
  AddLikesToThreadParams,
  ThreadParams,
} from "@/types";
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function createThread({
  text,
  author,
  communityId,
  path,
}: ThreadParams): Promise<void> {
  try {
    connectToDB();

    const createdThread = await Thread.create({
      text,
      author,
      community: null,
    });

    await User.findByIdAndUpdate(
      author,
      {
        $push: { threads: createdThread._id },
      },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error while creating thread: ${error.message}`);
  }
}

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
  try {
    connectToDB();

    const skipAmounnt = (pageNumber - 1) * pageSize;

    // Fetches the posts that have no parents(...top level posts)
    const postQuery = Thread.find({
      parentId: { $in: [null, undefined] },
    })
      .sort({
        createdAt: "desc",
      })
      .skip(skipAmounnt)
      .limit(pageSize)
      .populate({
        path: "author",
        model: User,
      })
      .populate({
        path: "children",
        populate: {
          path: "author",
          model: User,
          select: "_id name parentId image",
        },
      })
      .populate("likes");

    const totalPostsCount = await Thread.countDocuments({
      parentId: { $in: [null, undefined] },
    });

    const posts = await postQuery.exec();

    const isNext = totalPostsCount > skipAmounnt + posts.length;

    return { posts, isNext };
  } catch (error: any) {
    throw new Error(`Error while fetching posts: ${error.message}`);
  }
}

export async function fetchThreadByID(id: string) {
  try {
    connectToDB();

    const thread = await Thread.findById(id)
      .populate({
        path: "likes",
        model: User,
        select: "_id id name image",
      })
      .populate({
        path: "author",
        model: User,
        select: "_id id name image",
      })
      .populate({
        path: "children",
        populate: [
          {
            path: "author",
            model: User,
            select: "_id id name parentId image",
          },
          {
            path: "children",
            model: Thread,
            populate: {
              path: "author",
              model: User,
              select: "_id id name parentId image",
            },
          },
        ],
      })
      .exec();

    return thread;
  } catch (error: any) {
    throw new Error(`Error while fetching thread: ${error.message}`);
  }
}

export async function addCommentToThread({
  threadId,
  commentText,
  userId,
  path,
}: AddCommentToThreadParams) {
  try {
    connectToDB();

    // Find original thread by its id...
    const originalThread = await Thread.findById(threadId);

    if (!originalThread) throw new Error("Thread not found");

    const commentThread = new Thread({
      text: commentText,
      author: userId,
      parentId: threadId,
    });

    // Save New thread...
    const savedCommentThread = await commentThread.save();

    // Update the original thread to include the new comment..
    originalThread.children.push(savedCommentThread._id);

    // Save the original thread....
    await originalThread.save();

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error while adding comment to thread: ${error.message}`);
  }
}

export async function addLikesToThread({
  threadId,
  userId,
  path,
}: AddLikesToThreadParams) {
  try {
    connectToDB();

    const user = await User.findOne({
      id: userId,
    });

    await Thread.findByIdAndUpdate(
      threadId,
      {
        $push: { likes: user._id },
      },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error while adding like to thread: ${error.message}`);
  }
}

export async function removeLikesFromThread({
  threadId,
  userId,
  path,
}: AddLikesToThreadParams) {
  try {
    connectToDB();

    const user = await User.findOne({
      id: userId,
    });

    await Thread.findByIdAndUpdate(threadId, {
      $pullAll: { likes: [user._id] },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error while adding like to thread: ${error.message}`);
  }
}
