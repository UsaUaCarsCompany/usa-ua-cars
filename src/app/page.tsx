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
import { GetServerSideProps } from 'next'

interface PropsHomeGetsData {
  CarsDataCMS: CarsDataProps[]
  VideosDataCMS: VideosReviewsDataProps[]
}

const Home = ({ CarsDataCMS, VideosDataCMS }: PropsHomeGetsData) => {
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

export const getServerSideProps: GetServerSideProps<PropsHomeGetsData> = async () => {
  const getCars = async () => {
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

  const getVideos = async () => {
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

  const CarsDataCMS: CarsDataProps[] = await getCars()
  const VideosDataCMS: VideosReviewsDataProps[] = await getVideos()

  return { props: { CarsDataCMS, VideosDataCMS } }
}

export default Home
