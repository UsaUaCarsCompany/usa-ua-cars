'use client'
import React from 'react'
import styles from './footerStyles.module.sass'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import { Link } from 'react-scroll'
import clsx from 'clsx'

export const Footer = () => {
  return (
    <footer className={styles.footer__block}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.inner__logo__links}></div>
          <div className={styles.inner__socials__rules}>
            <nav className={styles.header__nav}>
              <ul className={styles.nav__items}>
                {HeaderLinks.map(({ id, name, href }: HeaderLinksProps) => (
                  <li key={id} className={clsx(styles.item__nav)}>
                    <Link activeClass={styles.active} to={href} spy={true} smooth={true} offset={-180} duration={600}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
