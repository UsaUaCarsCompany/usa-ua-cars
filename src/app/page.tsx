import HowWeWork from '@/components/HowWeWork/page'
import InterestIn from '@/components/InterestIn/page'
import Intro from '@/components/Intro/page'
import PopularCars from '@/components/PopularCars/page'
import Questions from '@/components/PopularQuestions/page'
const Home = () => {
  return (
    <main className="content">
      <Intro />
      <HowWeWork />
      <PopularCars />
      <InterestIn />
      <Questions />
    </main>
  )
}

export default Home
