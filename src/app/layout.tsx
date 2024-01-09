import '../styles/globalReset.sass'
import '../styles/globals.sass'
import '../components/Intro/CarsSliderStyles.sass'
import '../components/PopularCars/CarsPopularSliderStyles.sass'
import 'react-toastify/dist/ReactToastify.css'

import Head from 'next/head'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

export const metadata = {
  title: 'USA-UA CARS',
  description: 'Купівля на аукціонах автомобілів з США та перевезення в Україну',
  icons: {
    icon: {
      url: '/logo/favicon-32x32.png',
      type: 'image/ico',
    },
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ua">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#202124" />
        <meta name="msapplication-TileColor" content="#202124" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
