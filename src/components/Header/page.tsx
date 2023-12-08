'use client'
import clsx from 'clsx'
import styles from './header.module.sass'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'

const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [activeBurger, setActiveBurger] = useState(false)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const openBurgerMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setActiveBurger(true)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <BurgerMenu activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
      <header className={clsx(styles.header, scroll < 50 ? '' : styles.headerBg)}>
        <div className="container">
          <div className={styles.header__content}>
            <Link className={styles.header__logo} to="main" spy={true} smooth={true} offset={-180} duration={600}>
              <Image src="/logo/logo.png" width={100} height={50} alt="cars from USA" />
            </Link>
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
                {HeaderLinks.map(({ id, name, href }: HeaderLinksProps) => (
                  <li key={id} className={clsx(styles.item__nav)}>
                    <Link activeClass={styles.active} to={href} spy={true} smooth={true} offset={-180} duration={600}>
                      {name}
                    </Link>
                  </li>
                ))}
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
      </header>
    </>
  )
}
export default Header
