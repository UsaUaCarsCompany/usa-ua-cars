'use client'
import React from 'react'
import styles from './CarsSlider.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { CarsDataProps, CarsData } from '@/data/CarsData'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { leftAnimations } from '@/animations/page'

export const CarsSlider = () => {
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
        {CarsData.map(({ ...car }: CarsDataProps) => (
          <SwiperSlide key={car.id}>
            <motion.div initial="hidden" whileInView="visible" className={styles.slider_car_block}>
              <div className={styles.slider_car_inner}>
                <div className={styles.slider_car_content}>
                  <h1 className={styles.slider_car_title}>{car.title}</h1>
                  <p className={styles.slider_car_subtitle}>
                    {language === 'ua' ? 'Ціна в Україні' : 'Цена в Украине'} {''}
                    <span>{language === 'ua' ? car.price.ua : car.price.ru}</span>
                  </p>
                </div>

                <motion.div variants={leftAnimations} custom={1} className={styles.slider_car_image}>
                  <Image src={`/cars/${car.image}.png`} width={590} height={323} alt={car.title.toLowerCase()} />
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
