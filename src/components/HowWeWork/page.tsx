'use client'
import React from 'react'
import styles from './HowWeWork.module.sass'
import Image from 'next/image'
import { WorksData, WorksDataProps } from '@/data/Works'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { bottomAnimations, bottomCardAnimations, topAnimations } from '@/animations/page'

const HowWeWork = () => {
  const { language, switchLanguage } = useLanguage()

  return (
    <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className={styles.work} id="howWeWork">
      <div className="container">
        <motion.div variants={topAnimations} custom={1} className={styles.work__title}>
          <h2>{language === 'ua' ? 'Етапи покупки' : 'Этапы покупки'}</h2>
          <motion.span variants={bottomAnimations} custom={1.4} />
        </motion.div>
        <div className={styles.work__inner}>
          {WorksData.map(({ ...work }: WorksDataProps) => (
            <motion.div
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={bottomCardAnimations}
              custom={work.index}
              key={work.id}
              className={styles.inner__card}
            >
              <div className={styles.card__content}>
                <div className={styles.content__icon}>
                  <Image src={`/work/${work.image}.png`} width={45} height={45} alt={work.title.ua} />
                  <h3 className={styles.content__title}>{language === 'ua' ? work.title.ua : work.title.ru}</h3>
                </div>
                <p className={styles.content__subtitle}>{language === 'ua' ? work.subtitle.ua : work.subtitle.ru}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default HowWeWork
