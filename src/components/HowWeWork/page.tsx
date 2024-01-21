'use client'
import React from 'react'
import styles from './HowWeWork.module.sass'
import Image from 'next/image'
import { WorksData, WorksDataProps } from '@/data/Works'
import { useLanguage } from '@/ContextLanguage/LanguageContext'

const HowWeWork = () => {
  const { language, switchLanguage } = useLanguage()

  return (
    <div className={styles.work} id="howWeWork">
      <div className="container">
        <div className={styles.work__title}>
          <h2>{language === 'ua' ? 'Як ми працюємо' : 'Как мы работаем'}</h2>
          <span />
        </div>
        <div className={styles.work__inner}>
          {WorksData.map(({ ...work }: WorksDataProps) => (
            <div key={work.id} className={styles.inner__card}>
              <div className={styles.card__content}>
                <div className={styles.content__icon}>
                  <Image src={`/work/${work.image}.png`} width={65} height={65} alt={work.title.ua} />
                  <div className={styles.content__title}>{language === 'ua' ? work.title.ua : work.title.ru}</div>
                </div>
                <div className={styles.content__subtitle}>
                  {language === 'ua' ? work.subtitle.ua : work.subtitle.ru}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
