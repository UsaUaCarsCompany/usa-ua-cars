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

export const CarsSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 7500,
        }}
        navigation={true}
        speed={1000}
        slidesPerView={1}
        className="CarsSlider"
      >
        {CarsData.map(({ ...car }: CarsDataProps) => (
          <SwiperSlide key={car.id}>
            <div className={styles.slider_car_block}>
              <div className={styles.slider_car_inner}>
                <div className={styles.slider_car_content}>
                  <h1 className={styles.slider_car_title}>{car.title}</h1>
                  <p className={styles.slider_car_subtitle}>
                    Цена в Америке <span>{car.price}</span>
                  </p>
                </div>

                <div className={styles.slider_car_image}>
                  <Image src={`/cars/${car.image}.png`} width={590} height={323} alt={car.title} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
