import '../styles/globalReset.sass'
import '../styles/globals.sass'
import '../components/Intro/CarsSliderStyles.sass'
import '../components/VideoPlayer/VideoPlayerStyles.sass'

import '../components/PopularCars/CarsPopularSliderStyles.sass'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { LanguageProvider } from '@/ContextLanguage/LanguageContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  title: 'USA-UA CARS: Авто з США легко, безпечно та вигідно!',
  description:
    'Купити авто з США з USA-UA CARS - легко, безпечно та вигідно! Пошук та підбір авто по вашому бюджету. Доставка авто з США. Оформлення документів.',
  keywords: [
    'купити авто з США',
    'американські авто',
    'б/у авто з США',
    'аукціони авто США',
    'доставка авто з США',
    'розмитнення авто з США',
    'підбір авто з США',
  ],
  canonicalUrl: 'https://www.usa-ua-cars.com/',
  icons: {
    icon: {
      url: '/logo/favicon-32x32.png',
      type: 'image/png',
    },
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="uk">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="logo/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="logo/favicon.svg" />
        <link rel="shortcut icon" href="logo/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="logo/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="USA-UA CARS" />
        <link rel="manifest" href="logo/site.webmanifest" />
        <link rel="canonical" href={metadata.canonicalUrl} />
        <meta name="msapplication-TileColor" content="#202124" />
        <meta name="theme-color" content="#202124" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <div className="wrapper">
          <LanguageProvider>
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </LanguageProvider>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
