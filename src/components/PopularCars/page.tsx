import React from 'react'
import styles from './popularCarsStyles.module.sass'
import Image from 'next/image'

export const PopularCars = () => {
  return (
    <>
      <div className={styles.popCars__block}>
        <div className="container">
          <div className={styles.container__inner}>
            <div className={styles.inner__title}>
              <h3>Самые популярные машины на сегодняшний день</h3>
            </div>

            <div className={styles.inner__popCars}>
              <ul className={styles.popCars__list}>
                <li className={styles.list__cars__cards}>
                  <div className={styles.cars__header__block}>
                    <Image src="/cars/car1.png" width={500} height={270} alt="car" />
                    <div className={styles.extra__info}>
                      <div className={styles.info__content}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra leo molestie tortor
                          rutrum, non sodales quam dapibus. Maecenas ipsum urna, mollis sed dapibus id, lobortis at
                          arcu. Suspendisse potenti. Aliquam suscipit magna urna. Cras tincidunt imperdiet maximus.
                          Aliquam sit amet lacus vestibulum, viverra dui non, scelerisque lorem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cars__content}>
                    <div className={styles.content__header}>
                      <h4>VOLKSWAGEN PASSAT</h4>
                      <span>$13167</span>
                    </div>
                    <div className={styles.content__btn__want}>
                      <button className={styles.btn__want}>
                        <span>Xочу такую</span>
                      </button>
                    </div>
                  </div>
                </li>
                <li className={styles.list__cars__cards}>
                  <div className={styles.cars__header__block}>
                    <Image src="/cars/car1.png" width={500} height={270} alt="car" />
                    <div className={styles.extra__info}>
                      <div className={styles.info__content}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra leo molestie tortor
                          rutrum, non sodales quam dapibus. Maecenas ipsum urna, mollis sed dapibus id, lobortis at
                          arcu. Suspendisse potenti. Aliquam suscipit magna urna. Cras tincidunt imperdiet maximus.
                          Aliquam sit amet lacus vestibulum, viverra dui non, scelerisque lorem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cars__content}>
                    <div className={styles.content__header}>
                      <h4>VOLKSWAGEN PASSAT</h4>
                      <span>$13167</span>
                    </div>
                    <div className={styles.content__btn__want}>
                      <button className={styles.btn__want}>
                        <span>Xочу такую</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularCars
