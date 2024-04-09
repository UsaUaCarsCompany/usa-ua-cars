// HOME PAGE

import CarCustomsCalculator from '@/components/Calculate/page'
import HowWeWork from '@/components/HowWeWork/page'
import InterestIn from '@/components/InterestIn/page'
import Intro from '@/components/Intro/page'
import PopularCars from '@/components/PopularCars/page'
import Questions from '@/components/PopularQuestions/page'
import { VideoPlayer } from '@/components/VideoPlayer/page'
import { client } from '../../sanity/lib/client'
import { CarsDataProps } from '@/data/CarsData'
import { VideosReviewsDataProps } from '@/data/VideosReviewsData'

export async function getCars() {
  const query = `
  *[_type == "cars"] | order(createdAt desc) {
    id,
    title,
    "image": {
      "alt": image.alt,
      "_ref": image.asset._ref
    },
    price
  }
  `
  const data = await client.fetch(query)

  return data
}

export async function getVideos() {
  const query = `
  *[_type == "videoReview"] | order(createdAt desc) {
    id,
    title,
    subtitle,
    "preview": {
      "alt": preview.alt,
      "_ref": preview.asset._ref
    },
    urlVideo
  }
  `
  const data = await client.fetch(query)

  return data
}

export const revalidate = 60

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
      {VideosDataCMS.length == 0 ? '' : <VideoPlayer VideosDataCMS={VideosDataCMS} />}
      <Questions />
    </main>
  )
}

export default Home
