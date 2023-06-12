import TopBar from "@/modules/layout/topBar/TopBar"
import PostsFeed from "./PostsFeed"
import Footer from "@/modules/layout/footer/Footer"
import styles from './HomePage.module.scss'
import { PostsProvider } from "@/modules/posts/providers/PostsProvider"

const HomePage: React.FC  = () => {
  return (
    <div className={styles.homePageContainer}>
      <TopBar></TopBar>
      <PostsProvider>
        <PostsFeed></PostsFeed>
      </PostsProvider>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
