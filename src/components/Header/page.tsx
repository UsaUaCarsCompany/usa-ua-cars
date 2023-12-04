'use client'
import clsx from 'clsx'
import styles from './header.module.sass'
import React, { useState } from 'react'
import Image from 'next/image'

const Header = () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={clsx(styles.header, scroll < 50 ? '' : styles.headerBg)}>
        <div className="container">
          <div className={styles.header__content}>
            <div className={styles.header__logo}>
              <Image src="/logo/logo.png" width={100} height={50} alt="cars from USA" />
            </div>
            <nav className={styles.header__nav}>
              <div className={styles.number_phones}>
                <div>
                  <span>LIFE:</span> +38 093 099 60 62
                </div>
                <div>
                  <span>КИЕВСТАР:</span> +38 096 099 60 62
                </div>
              </div>
              <ul className={styles.nav__items}>
                <a className={clsx(styles.item__nav, styles.active)}>
                  <li>Главная</li>
                </a>
                <a className={styles.item__nav}>
                  <li>Как мы работаем</li>
                </a>
                <a className={styles.item__nav}>
                  <li>Растаможка</li>
                </a>
                <a className={styles.item__nav}>
                  <li>Контакты</li>
                </a>
                {/* <a className={styles.button}>Поиск Авто</a> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
