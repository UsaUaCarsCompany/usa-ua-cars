// HOME PAGE

import CarCustomsCalculator from '@/components/Calculate/page'
import HowWeWork from '@/components/HowWeWork/page'
import InterestIn from '@/components/InterestIn/page'
import Intro from '@/components/Intro/page'
import PopularCars from '@/components/PopularCars/page'
import Questions from '@/components/PopularQuestions/page'
import { VideoPlayer } from '@/components/VideoPlayer/page'
import { CarsDataProps } from '@/data/CarsData'
import { VideosReviewsDataProps } from '@/data/VideosReviewsData'
import { getCars, getVideos } from '@/utils/DataFetching'

const Home = async () => {
  const CarsDataCMS: CarsDataProps[] = await getCars()
  const VideosDataCMS: VideosReviewsDataProps[] = await getVideos()

  return (
    <main className="content">
      <Intro CarsDataCMS={CarsDataCMS} />
      <CarCustomsCalculator />
      <HowWeWork />
      <InterestIn />
      <PopularCars CarsDataCMS={CarsDataCMS} />
      {VideosDataCMS.length === 0 ? '' : <VideoPlayer VideosDataCMS={VideosDataCMS} />}
      <Questions />
    </main>
  )
}
export default Home
