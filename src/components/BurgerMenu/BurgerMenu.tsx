import clsx from 'clsx'
import Image from 'next/image'
import { Link } from 'react-scroll'
import React from 'react'

import styles from './BurgerMenuStyle.module.sass'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import { motion } from 'framer-motion'
import { leftAnimations } from '@/animations/page'

type BurgerMenuProps = {
  activeBurger: boolean
  setActiveBurger: (isSetActiveBurger: boolean) => void
  language: string
  switchLanguage: () => void
}

export const BurgerMenu = ({ activeBurger, setActiveBurger, language, switchLanguage }: BurgerMenuProps) => {
  const handleCloseBurgerMenu = () => {
    setActiveBurger(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      {/* Задній план ===============*/}
      <div
        className={clsx(styles.burger_holder, activeBurger ? styles.show_burger : '')}
        onClick={handleCloseBurgerMenu}
      ></div>
      {/* Задній план ===============*/}
      {/* Контентна частина ================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={clsx(styles.burger_window, activeBurger ? styles.burger_window_show : '')}
      >
        <div className={styles.burger_menu_header}>
          {/* header */}
          <Link
            onClick={handleCloseBurgerMenu}
            className={styles.header__logo}
            to="main"
            spy={true}
            smooth={true}
            offset={-180}
            duration={600}
          >
            <Image src="/logo/logo5.png" width={100} height={50} alt="cars from USA" />
          </Link>
          <button className={styles.burger_close} onClick={handleCloseBurgerMenu}>
            ✖
          </button>
        </div>

        <div className={styles.burger_menu_body}>
          <nav className={styles.nav_menu}>
            <ul className={styles.nav__items}>
              {HeaderLinks.map(({ id, nameUa, nameRu, href, index }: HeaderLinksProps) => (
                <motion.li variants={leftAnimations} custom={index} key={id} className={clsx(styles.item__nav)}>
                  <Link
                    onClick={handleCloseBurgerMenu}
                    activeClass={styles.active}
                    to={href}
                    spy={true}
                    smooth={true}
                    offset={-180}
                    duration={600}
                  >
                    {language === 'ua' ? nameUa : nameRu}
                  </Link>
                </motion.li>
              ))}
              <div className={styles.header_toggle}>
                <div onClick={switchLanguage} className={clsx(styles.toggle)}>
                  <span className={clsx(language === 'ua' ? styles.text__active : '')}>UA</span>
                  <span className={clsx(language === 'ru' ? styles.text__active : '')}>RU</span>
                  <div
                    className={clsx(styles.toggle_button, language === 'ua' ? styles.toggle_button_active : '')}
                  ></div>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </motion.div>
      {/* Контентна частина ================== */}
    </>
  )
}
