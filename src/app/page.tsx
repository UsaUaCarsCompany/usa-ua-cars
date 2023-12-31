import HowWeWork from '@/components/HowWeWork/page'
import Intro from '@/components/Intro/page'
import PopularCars from '@/components/PopularCars/page'
const Home = () => {
  return (
    <main className="content">
      <Intro />
      <HowWeWork />
      <PopularCars />
    </main>
  )
}

export default Home
