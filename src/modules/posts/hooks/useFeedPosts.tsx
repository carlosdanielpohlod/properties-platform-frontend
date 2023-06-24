import { fetchPosts } from "../infraestruture/fetchPosts";
import { useContext, useEffect } from "react";
import { PostsContext } from "../providers/PostsProvider";


export const useFeedPosts = () => {
  const value = useContext(PostsContext);

  const { setPage, setPosts, setPagesCount, posts, pagesCount, page } = value;

  useEffect(() => {
    fetchPosts({ page: page, perPage: 1 }).then((response) => {
      setPosts(response.data);
      setPagesCount(response.metadata.pages);
    });
  }, [page])

  return {
    page,
    posts,
    setPage,
    pagesCount
  }
}
