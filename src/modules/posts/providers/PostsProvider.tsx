import {Post} from '../domain/Post'
import {
  useState,
  createContext,
  ReactNode
} from 'react'

type PostsProviderProps = {
  children: ReactNode
}

export type PostsContextValues = {
  posts: Post[];
  setPosts: ReturnType<typeof useState<Array<Post> | undefined>>;
  page: number;
  setPage: ReturnType<typeof useState<number>>,
  pagesCount: number;
  setPagesCount: ReturnType<typeof useState<number>>,
}

export const PostsContext = createContext<PostsContextValues | any>(undefined)

export const PostsProvider = ({ children }: PostsProviderProps ) => {
  const [posts, setPosts] = useState<Post[] | undefined>(undefined)
  const [page, setPage] = useState<number>(1)
  const [pagesCount, setPagesCount] = useState<number>(1)

  const value = {
    posts,
    setPosts,
    page,
    setPage,
    pagesCount,
    setPagesCount
  }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
