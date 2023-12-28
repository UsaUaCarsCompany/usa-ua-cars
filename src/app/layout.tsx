import '../styles/globalReset.sass'
import '../styles/globals.sass'
import '../components/Intro/CarsSliderStyles.sass'

import Head from 'next/head'
import Header from '@/components/Header/page'

export const metadata = {
  title: 'Car from USA',
  description: 'Discover & Share AI Prompts',
  icons: {
    icon: {
      url: '/assets/icons/logo.ico',
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
      </Head>
      <body>
        <div className="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
