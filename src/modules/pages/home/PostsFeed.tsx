import React from "react";
import styles from './PostsFeed.module.scss'
import { FeedPagination } from "./FeedPagination";
import Post from "@/modules/pages/home/Post/Post";
import {Post as PostType} from "@/modules/posts/domain/Post"

import { useFeedPosts } from "@/modules/posts/hooks/useFeedPosts";

const PostsFeed: React.FC  = () => {
  const {posts} = useFeedPosts();

  return (
    <>
    <div className={styles.postsFeedContainer}>
      {
        posts?.map((post: PostType ) => {
          return <Post key={post.id} data={post}></Post>
        })
      }

    </div>
    <FeedPagination ></FeedPagination>
    </>
  )
}

export default PostsFeed
