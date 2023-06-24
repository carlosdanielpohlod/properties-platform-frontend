import { Image } from './Image'

export type Post = {
  title: string,
  price: number,
  slug: string,
  created_at: string,
  id: number,
  description: string,
  images: Array<Image>,
  status: string,
  updated_at: string,
  user_id: number
}
