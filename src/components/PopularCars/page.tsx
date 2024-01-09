'use client'
import React, { useState } from 'react'
import styles from './popularCarsStyles.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { PopularCarsSlideItem } from './PopularCarsSlideItem'
import { PopularCarsData, PopularCarsDataProps } from '@/data/PopularCarsData'
import IwantPopup from './IwantPopup/IwantPopup'

const chunk = (arr: PopularCarsDataProps[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))

const PopularCarsSlider = () => {
  const [openWantPopup, setOpenWantPopup] = useState(false)
  const [selectedCar, setSelectedCar] = useState<PopularCarsDataProps | null>(null)

  const carsChunks = chunk(PopularCarsData, 4)

  const handleSelectCar = (car: PopularCarsDataProps, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setSelectedCar(car)
    setOpenWantPopup(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <IwantPopup openWantPopup={openWantPopup} setOpenWantPopup={setOpenWantPopup} selectedCar={selectedCar} />
      <div className={styles.popCars__block} id="Popular">
        <div className="container">
          <div className={styles.inner__title}>
            <h3>Самые популярные машины на сегодняшний день</h3>
          </div>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            loop={true}
            className="CarsSliderPopular"
          >
            {carsChunks.map((carsGroup, index) => (
              <SwiperSlide key={index}>
                <div className={styles.container__inner}>
                  <ul className={styles.popCars__list}>
                    {carsGroup.map((car: PopularCarsDataProps) => (
                      <PopularCarsSlideItem
                        key={car.id}
                        car={car}
                        openWantPopup={openWantPopup}
                        setOpenWantPopup={setOpenWantPopup}
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSelectCar(car, e)}
                      />
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default PopularCarsSlider
