import CarCustomsCalculator from '@/components/Calculate/page'
import HowWeWork from '@/components/HowWeWork/page'
import InterestIn from '@/components/InterestIn/page'
import Intro from '@/components/Intro/page'
import PopularCars from '@/components/PopularCars/page'
import Questions from '@/components/PopularQuestions/page'
import { VideoPlayer } from '@/components/VideoPlayer/page'
const Home = () => {
  return (
    <main className="content">
      <Intro />
      <CarCustomsCalculator />
      <HowWeWork />
      <InterestIn />
      <PopularCars />
      <VideoPlayer />
      <Questions />
    </main>
  )
}

export default Home
