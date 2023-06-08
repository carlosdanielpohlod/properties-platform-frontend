import { Image } from './Image'

export type Post = {
  title: string,
  price: number,
  description: string,
  images: Array<Image>
}
