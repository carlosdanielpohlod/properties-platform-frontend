import TopBar from "@/modules/layout/topBar/TopBar"
import PostsFeed from "./PostsFeed"
import Footer from "@/modules/layout/footer/Footer"
import styles from './HomePage.module.scss'

const HomePage: React.FC  = () => {
  return (
    <div className={styles.homePageContainer}>
      <TopBar></TopBar>
      <PostsFeed></PostsFeed>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default HomePage
