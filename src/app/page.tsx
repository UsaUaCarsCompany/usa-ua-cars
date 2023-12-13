import Consultation from '@/components/Consultation/page'
import HowWeWork from '@/components/HowWeWork/page'
import Intro from '@/components/Intro/page'
const Home = () => {
  return (
    <main className="content">
      <Intro />
      <HowWeWork />
      <Consultation />
    </main>
  )
}

export default Home
