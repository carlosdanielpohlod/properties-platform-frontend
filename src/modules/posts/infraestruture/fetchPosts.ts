import { Post } from '../domain/Post'

type FetchPostsParameters = {
  page?: number,
  perPage?: number
}
export const fetchPosts = async ({
  page, perPage
}: FetchPostsParameters): Promise<Array<Post>> => {
  let response = await fetch(`/api/v1/property_posts?page=${page}&perPage=${perPage}`)
  return await response.json()
}
