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
          <Image src={`/cars/${car.image}.png`} width={500} height={270} alt={car.name} />
          <div className={styles.extra__info}>
            <div className={styles.info__content}>
              <div className={styles.content__inner}>
                <div className={styles.inner__content}>
                  <div>
                    <span>{language === 'ua' ? 'Вартість авто на аукціоні' : 'Стоимость авто на аукционе'}</span>
                    <span>{`$${car.costAtAuction}`}</span>
                  </div>
                  <div>
                    <span>{language === 'ua' ? 'Аукціонний збір' : 'Аукционный сбор'}</span>
                    <span>{`$${car.auctionFee}`}</span>
                  </div>
                  <div>
                    <span>
                      {language === 'ua'
                        ? 'Комісія банку за переказ грошей в США'
                        : 'Комиссия банка за перевод денег в США'}
                    </span>
                    <span>{`$${car.bankFee}`}</span>
                  </div>
                  <div>
                    <span>{language === 'ua' ? 'Довіреність на експедитора' : 'Доверенность на экспедитора'}</span>
                    <span>{`$${car.powerOfAttorney}`}</span>
                  </div>
                  <div>
                    <span>
                      {language === 'ua' ? 'Попередня вартість доставки' : 'Предварительная стоимость доставки'}
                    </span>
                    <span>{`$${car.preliminaryShippingCost}`}</span>
                  </div>
                </div>
                <div className={styles.inner__content}>
                  <div>
                    <span>{language === 'ua' ? 'Розвантаження в порту' : 'Разгрузка в порту'}</span>
                    <span>{`$${car.unloadingInPort}`}</span>
                  </div>
                  <div>
                    <span>{language === 'ua' ? 'Митний брокер' : 'Таможенный брокер'}</span>
                    <span>{`$${car.customsBroker}`}</span>
                  </div>
                  <div>
                    <span>{language === 'ua' ? 'Розмитнення' : 'Таможенное оформление'}</span>
                    <span>{`$${car.customsClearance}`}</span>
                  </div>
                  <div>
                    <span>{language === 'ua' ? 'Послуги' : 'Услуги'}</span>
                    <span>{`$${car.services}`}</span>
                  </div>
                  <div>
                    <span>{language === 'ua' ? 'Вартість ремонту' : 'Стоимость ремонта'}</span>
                    <span>{`$${car.costOfRepair}`}</span>
                  </div>
                </div>
              </div>
              <div className={clsx(styles.inner__content, styles.inner__content__bottom)}>
                <div>
                  <span>{language === 'ua' ? 'У підсумку' : 'Итого'}</span>
                  <span>{`$${car.amount}`}</span>
                </div>
                <div>
                  <span>{language === 'ua' ? 'Отримання сертифікату ЄВРО-5' : 'Получение сертификата ЕВРО-5'}</span>
                  <span>{`$${car.euro5Certificate}`}</span>
                </div>
                <div>
                  <span>
                    {language === 'ua' ? 'Реєстрація авто і пенсійний фонд' : 'Регистрация авто и пенсионный фонд'}
                  </span>
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
              <span>{language === 'ua' ? 'Хочу таку' : 'Xочу такую'}</span>
            </button>
          </div>
        </div>
      </li>
    </>
  )
}

export default PopularCarsSlideItem
