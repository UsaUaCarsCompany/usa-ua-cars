'use client'
import clsx from 'clsx'
import styles from './header.module.sass'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import ContactPopup from '../ContactPopup/ContactPopup'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { bottomAnimations, rightAnimations } from '@/animations/page'

const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [activeBurger, setActiveBurger] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const { language, switchLanguage } = useLanguage()

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const openBurgerMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setActiveBurger(true)
    document.body.style.overflow = 'hidden'
  }

  const openContactPopup = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setOpenContact(true)
    document.body.style.overflow = 'hidden'
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <ContactPopup openContact={openContact} setOpenContact={setOpenContact} language={language} />
      <BurgerMenu
        activeBurger={activeBurger}
        setActiveBurger={setActiveBurger}
        language={language}
        switchLanguage={switchLanguage}
      />
      <motion.header
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className={clsx(styles.header, scroll < 50 ? '' : styles.headerBg)}
      >
        <div className="container">
          <div className={styles.header__content}>
            <motion.div variants={rightAnimations} custom={0.1}>
              <Link className={styles.header__logo} to="main" spy={true} smooth={true} offset={-180} duration={600}>
                <Image src="/logo/logo5.png" width={100} height={50} alt="cars from USA" />
              </Link>
            </motion.div>
            <nav className={styles.header__nav}>
              <ul className={styles.nav__items}>
                {HeaderLinks.map(({ id, nameUa, nameRu, href, index }: HeaderLinksProps) => (
                  <motion.li variants={bottomAnimations} custom={index} key={id} className={clsx(styles.item__nav)}>
                    <Link activeClass={styles.active} to={href} spy={true} smooth={true} offset={-180} duration={600}>
                      {language === 'ua' ? nameUa : nameRu}
                    </Link>
                  </motion.li>
                ))}
                <motion.button
                  variants={bottomAnimations}
                  custom={1}
                  className={styles.btn_contact}
                  onClick={openContactPopup}
                >
                  <span>{language === 'ua' ? "Зв'яжіться з нами" : 'Свяжитесь с нами'}</span>
                </motion.button>

                <motion.div variants={bottomAnimations} custom={1.1} className={styles.header_toggle}>
                  <div onClick={switchLanguage} className={clsx(styles.toggle)}>
                    <span className={clsx(language === 'ua' ? styles.text__active : '')}>UA</span>
                    <span className={clsx(language === 'ru' ? styles.text__active : '')}>RU</span>
                    <div
                      className={clsx(styles.toggle_button, language === 'ua' ? styles.toggle_button_active : '')}
                    ></div>
                  </div>
                </motion.div>
                <button
                  className={clsx(styles.nav_menu_burger, activeBurger ? styles.nav_menu_burger_active : '')}
                  type="button"
                  onClick={openBurgerMenu}
                >
                  <span></span>
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </motion.header>
    </>
  )
}
export default Header
