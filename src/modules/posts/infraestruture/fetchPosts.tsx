import { Post } from '../domain/Post'

type FetchPostsParameters = {
  page?: number,
  perPage?: number
}

type Metadata = {
  count: number,
  page: number,
  pages: number,
  offset: number
}

type PostsApiResponse = {
  data: Array<Post>,
  metadata: Metadata
}

export const fetchPosts = async ({
  page, perPage
}: FetchPostsParameters): Promise<PostsApiResponse> => {
  let response = await fetch(`http://localhost:3000/api/v1/property_posts?page=${page}&perPage=${perPage}`)
  return await response.json()
}
