import React, { useState } from 'react'
import Image from 'next/image'
import styles from './popularCarsStyles.module.sass'
import clsx from 'clsx'
import { CarsDataProps } from '@/data/CarsData'

type PopularCarsSlideItemProps = {
  car: CarsDataProps
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  openWantPopup: boolean
  setOpenWantPopup: (isOpenContact: boolean) => void
  language: string
}

export const PopularCarsSlideItem = ({
  car,
  openWantPopup,
  setOpenWantPopup,
  onClick,
  language,
}: PopularCarsSlideItemProps) => {
  return (
    <>
      <li className={styles.list__cars__cards}>
        <div className={styles.cars__header__block}>
          <Image src={`/cars/${car.image}.png`} width={500} height={270} alt={car.title.toLowerCase()} />
        </div>
        <div className={styles.cars__content}>
          <div className={styles.content__header}>
            <h4>{car.title}</h4>
            <span>{language === 'ua' ? car.price.ua : car.price.ru}</span>
          </div>
          <div className={styles.content__btn__want}>
            <button onClick={onClick} className={styles.btn__want}>
              <span>{language === 'ua' ? 'Хочу таку' : 'Xочу такую'}</span>
            </button>
          </div>
        </div>
      </li>
    </>
  )
}

export default PopularCarsSlideItem
