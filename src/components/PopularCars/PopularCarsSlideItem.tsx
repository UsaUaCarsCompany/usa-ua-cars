import React, { useState } from 'react'
import Image from 'next/image'
import styles from './popularCarsStyles.module.sass'
import clsx from 'clsx'
import { PopularCarsDataProps } from '@/data/PopularCarsData'

type PopularCarsSlideItemProps = {
  car: PopularCarsDataProps
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  openWantPopup: boolean
  setOpenWantPopup: (isOpenContact: boolean) => void
}

export const PopularCarsSlideItem = ({ car, openWantPopup, setOpenWantPopup, onClick }: PopularCarsSlideItemProps) => {
  return (
    <>
      <li className={styles.list__cars__cards}>
        <div className={styles.cars__header__block}>
          <Image src={`/cars/${car.image}.png`} width={500} height={270} alt="car" />
          <div className={styles.extra__info}>
            <div className={styles.info__content}>
              <div className={styles.content__inner}>
                <div className={styles.inner__content}>
                  <div>
                    <span>Вартість авто на аукціоні</span>
                    <span>{`$${car.costAtAuction}`}</span>
                  </div>
                  <div>
                    <span>Аукціонний збір</span>
                    <span>{`$${car.auctionFee}`}</span>
                  </div>
                  <div>
                    <span>Комісія банку за переказ грошей в США</span>
                    <span>{`$${car.bankFee}`}</span>
                  </div>
                  <div>
                    <span>Довіреність на експедитора</span>
                    <span>{`$${car.powerOfAttorney}`}</span>
                  </div>
                  <div>
                    <span>Попередня вартість доставки</span>
                    <span>{`$${car.preliminaryShippingCost}`}</span>
                  </div>
                </div>
                <div className={styles.inner__content}>
                  <div>
                    <span>Розвантаження в порту</span>
                    <span>{`$${car.unloadingInPort}`}</span>
                  </div>
                  <div>
                    <span>Митний брокер</span>
                    <span>{`$${car.customsBroker}`}</span>
                  </div>
                  <div>
                    <span>Розмитнення</span>
                    <span>{`$${car.customsClearance}`}</span>
                  </div>
                  <div>
                    <span>Послуги</span>
                    <span>{`$${car.services}`}</span>
                  </div>
                  <div>
                    <span>Вартість ремонту</span>
                    <span>{`$${car.costOfRepair}`}</span>
                  </div>
                </div>
              </div>
              <div className={clsx(styles.inner__content, styles.inner__content__bottom)}>
                <div>
                  <span>У підсумку</span>
                  <span>{`$${car.amount}`}</span>
                </div>
                <div>
                  <span>Отримання сертифікату ЄВРО-5</span>
                  <span>{`$${car.euro5Certificate}`}</span>
                </div>
                <div>
                  <span>Реєстрація авто і пенсійний фонд</span>
                  <span>{`$${car.carRegistrationAndPensionFund}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cars__content}>
          <div className={styles.content__header}>
            <h4>{car.name}</h4>
            <span>{`$${car.amount}`}</span>
          </div>
          <div className={styles.content__btn__want}>
            <button onClick={onClick} className={styles.btn__want}>
              <span>Xочу такую</span>
            </button>
          </div>
        </div>
      </li>
    </>
  )
}

export default PopularCarsSlideItem
