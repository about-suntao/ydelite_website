import styles from './page.module.scss'
import Banner from './home/banner/banner'
import Idea from './home/idea/idea'
import Introduce from './home/introduce/introduce'
import AboutUs from './home/aboutUs/aboutUs'
import Introduction from './home/introduction/introduction'
import Video from './home/video/video'
import InternationalClass from './home/InternationalClass/InternationalClass'
import Pedagogical from './home/pedagogical/Pedagogical'
import Instructor from './home/instructor/instructor'
import StudyStatus from './home/studyStatus/studyStatus'
import LatestNews from './home/latestNews/latestNews'
export default function Home() {
  return (
    <main className={styles.main}>
      <Banner></Banner>
      <Idea></Idea>
      <Introduce></Introduce>
      <AboutUs></AboutUs>
      <Introduction></Introduction>
      <Video></Video>
      <InternationalClass></InternationalClass>
      <Pedagogical></Pedagogical>
      <Instructor></Instructor>
      <StudyStatus></StudyStatus>
      <LatestNews></LatestNews>
    </main>
  )
}
