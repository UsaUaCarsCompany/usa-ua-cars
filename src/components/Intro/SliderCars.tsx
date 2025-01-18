'use client'
import React from 'react'
import styles from './CarsSlider.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { CarsDataProps } from '@/data/CarsData'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { leftAnimations } from '@/animations/page'
import { urlForImage } from '../../../sanity/lib/image'

interface PropsOfDataCars {
  CarsDataCMS: CarsDataProps[]
}

export const CarsSlider = ({ CarsDataCMS }: PropsOfDataCars) => {
  const { language, switchLanguage } = useLanguage()

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 7500,
        }}
        navigation={true}
        speed={800}
        slidesPerView={1}
        className="CarsSlider"
      >
        {CarsDataCMS?.length > 0 &&
          CarsDataCMS?.map(({ ...car }) => (
            <SwiperSlide key={car.id}>
              <motion.div initial="hidden" whileInView="visible" className={styles.slider_car_block}>
                <div className={styles.slider_car_inner}>
                  <div className={styles.slider_car_content}>
                    <h1 className={styles.slider_car_title}>{car.title}</h1>
                    <p className={styles.slider_car_subtitle}>
                      {language === 'ua' ? 'Ціна в США' : 'Цена в США'} {''}
                      <span>{language === 'ua' ? car.price.ua : car.price.ru}</span>
                    </p>
                  </div>

                  <motion.div variants={leftAnimations} custom={1} className={styles.slider_car_image}>
                    <Image src={urlForImage(car.image)} width={590} height={323} alt={car.image.alt.toLowerCase()} />
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
