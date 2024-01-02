import clsx from 'clsx'
import Image from 'next/image'
import { Link } from 'react-scroll'
import React from 'react'

import styles from './BurgerMenuStyle.module.sass'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'

type BurgerMenuProps = {
  activeBurger: boolean
  setActiveBurger: (isSetActiveBurger: boolean) => void
}

export const BurgerMenu = ({ activeBurger, setActiveBurger }: BurgerMenuProps) => {
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
      <div className={clsx(styles.burger_window, activeBurger ? styles.burger_window_show : '')}>
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
              {HeaderLinks.map(({ id, name, href, index }: HeaderLinksProps) => (
                <li key={id} className={clsx(styles.item__nav)}>
                  <Link
                    onClick={handleCloseBurgerMenu}
                    activeClass={styles.active}
                    to={href}
                    spy={true}
                    smooth={true}
                    offset={-180}
                    duration={600}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* Контентна частина ================== */}
    </>
  )
}
