import React from "react";
import styles from './PostsFeed.module.scss'
import Post from './Post/Post'
import { fetchPosts } from "@/modules/posts/infraestruture/fetchPosts";
import { setPosts, posts } from "@/modules/posts/providers/PostsProvider"

const PostsFeed: React.FC  = () => {
  async function findFeedPosts() {
    await fetchPosts({page: 1, perPage: 10})
  }

  setPosts
  return (
    <div className={styles.postsFeedContainer}>

    </div>
  )
}

export default PostsFeed
