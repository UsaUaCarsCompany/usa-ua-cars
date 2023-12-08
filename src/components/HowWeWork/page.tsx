import React from 'react'
import styles from './HowWeWork.module.sass'
import Image from 'next/image'
import { WorksData, WorksDataProps } from '@/data/Works'

const HowWeWork = () => {
  return (
    <div className={styles.work} id="howWeWork">
      <div className="container">
        <div className={styles.work__title}>
          <h2>Как мы работаем</h2>
          <span />
        </div>
        <div className={styles.work__inner}>
          {WorksData.map(({ ...work }: WorksDataProps) => (
            <div key={work.id} className={styles.inner__card}>
              <div className={styles.card__content}>
                <div className={styles.content__icon}>
                  <Image src={`/work/${work.image}.png`} width={65} height={65} alt={work.title} />
                </div>
                <div className={styles.content__title}>{work.title}</div>
                <div className={styles.content__subtitle}>{work.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
