import { Pagination } from "@mui/material"
import { useFeedPosts } from "@/modules/posts/hooks/useFeedPosts"

export const FeedPagination = () => {
  const {page, pagesCount, setPage} = useFeedPosts();

  const handleChange = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <Pagination count={pagesCount} page={page} onChange={handleChange} />
  )
}
