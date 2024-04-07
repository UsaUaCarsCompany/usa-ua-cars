'use client'
import React from 'react'
import styles from './VideoPlayerModule.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import dynamic from 'next/dynamic'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { VideosReviewsDataProps, VideosReviewsData } from '@/data/VideosReviewsData'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { leftAnimations, rightAnimations } from '@/animations/page'

const DynamicReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export const VideoPlayer = () => {
  const { language, switchLanguage } = useLanguage()

  return (
    <>
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        variants={leftAnimations}
        custom={1.6}
        className={styles.slider__cars}
      >
        <div className="container">
          <div className={styles.inner__title}>
            <motion.h3 variants={rightAnimations} custom={2}>
              {language === 'ua' ? 'Відгуки наших клієнтів' : 'Отзывы наших клиентов'} ({VideosReviewsData.length})
            </motion.h3>
            <motion.span variants={rightAnimations} custom={2.2} />
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            speed={800}
            slidesPerView={1}
            breakpoints={{
              1000: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={20}
            className="VideoPlayer"
          >
            {VideosReviewsData.map(({ ...review }: VideosReviewsDataProps) => (
              <SwiperSlide key={review.id}>
                <div className={styles.player__block_card}>
                  <div className={styles.video__player}>
                    <DynamicReactPlayer
                      controls={true}
                      light={true}
                      width="100%"
                      height="300px"
                      url={review.urlVideo}
                    />
                  </div>
                  <div className={styles.player__content}>
                    <h5 className={styles.content__title}>{review.title}</h5>
                    <p className={styles.content__subtitle}>
                      {language === 'ua' ? review.subtitle.subtitle_ua : review.subtitle.subtitle_ru}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </>
  )
}