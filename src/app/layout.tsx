import '../styles/globalReset.sass'
import '../styles/globals.sass'
import '../components/Intro/CarsSliderStyles.sass'
import '../components/PopularCars/CarsPopularSliderStyles.sass'
import 'react-toastify/dist/ReactToastify.css'

import Head from 'next/head'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { LanguageProvider } from '@/ContextLanguage/LanguageContext'

export const metadata = {
  title: 'USA-UA CARS',
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
  canonicalUrl: 'https://usa-ua-cars.com/',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
        <link rel="manifest" href="/logo/site.webmanifest" />
        <link rel="mask-icon" href="/logo/safari-pinned-tab.svg" color="#202124" />
        <meta name="msapplication-TileColor" content="#202124" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <div className="wrapper">
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
