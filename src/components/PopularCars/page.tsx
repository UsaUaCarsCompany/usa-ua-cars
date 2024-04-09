'use client'
import React, { useState } from 'react'
import styles from './popularCarsStyles.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { PopularCarsSlideItem } from './PopularCarsSlideItem'
import IwantPopup from './IwantPopup/IwantPopup'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { bottomAnimations, opacityAnimations } from '@/animations/page'
import { CarsDataProps } from '@/data/CarsData'

interface PropsOfDataCars {
  CarsDataCMS: CarsDataProps[]
}

const chunk = (arr: CarsDataProps[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))

const PopularCarsSlider = ({ CarsDataCMS }: PropsOfDataCars) => {
  const [openWantPopup, setOpenWantPopup] = useState(false)
  const [selectedCar, setSelectedCar] = useState<CarsDataProps | null>(null)
  const { language, switchLanguage } = useLanguage()

  const carsChunks = chunk(CarsDataCMS, 4)

  const handleSelectCar = (car: CarsDataProps, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setSelectedCar(car)
    setOpenWantPopup(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <IwantPopup
        openWantPopup={openWantPopup}
        setOpenWantPopup={setOpenWantPopup}
        selectedCar={selectedCar}
        language={language}
      />
      <motion.div
        className={styles.popCars__block}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        id="Popular"
      >
        <div className="container">
          <div className={styles.inner__title}>
            <motion.h3 variants={bottomAnimations} custom={1}>
              {language === 'ua'
                ? 'Найпопулярніші машини на сьогоднішній день'
                : 'Самые популярные машины на сегодняшний день'}
            </motion.h3>
          </div>
          <motion.div variants={opacityAnimations} custom={2}>
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
                      {carsGroup.map((car: CarsDataProps) => (
                        <PopularCarsSlideItem
                          key={car.id}
                          car={car}
                          openWantPopup={openWantPopup}
                          setOpenWantPopup={setOpenWantPopup}
                          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSelectCar(car, e)}
                          language={language}
                        />
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default PopularCarsSlider
