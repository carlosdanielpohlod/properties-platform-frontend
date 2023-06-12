import {Post} from '../domain/Post'
import {
  useState,
  createContext,
  ReactNode,
  useMemo,
  SetStateAction,
  Dispatch
} from 'react'

type PostsProviderProps = {
  children: ReactNode
}

export type PostsContextValues = {
  posts: Post[];
  setPosts: ReturnType<typeof useState<Array<Post> | undefined>>
}

export const PostsContext = createContext<PostsContextValues | any>(undefined)

export const PostsProvider = ({ children }: PostsProviderProps ) => {
  const [posts, setPosts] = useState<Post[] | undefined>()

  // const value = {
  //   posts,
  //   setPosts
  // }

  // return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  return <PostsContext.Provider>{children}</PostsContext.Provider>
}
