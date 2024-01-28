'use client'
import React from 'react'
import styles from './footerStyles.module.sass'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import { Link } from 'react-scroll'
import Image from 'next/image'
import clsx from 'clsx'
import { SocialsData, SocialsDataProps } from '@/data/SocialsData'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { bottomAnimations } from '@/animations/page'

export const Footer = () => {
  const { language, switchLanguage } = useLanguage()

  return (
    <motion.footer
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={bottomAnimations}
      custom={2}
      className={styles.footer__block}
    >
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.inner__logo__links}>
            <Link className={styles.header__logo} to="main" spy={true} smooth={true} offset={-180} duration={600}>
              <Image src="/logo/logo5.png" width={100} height={50} alt="cars from USA" />
            </Link>
            <nav className={styles.header__nav}>
              <ul className={styles.nav__items}>
                {HeaderLinks.map(({ id, nameUa, nameRu, href }: HeaderLinksProps) => (
                  <li key={id} className={clsx(styles.item__nav)}>
                    <Link to={href} spy={true} smooth={true} offset={-180} duration={600}>
                      {language === 'ua' ? nameUa : nameRu}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={styles.inner__socials__rules}>
            <ul className={styles.socails_list}>
              {SocialsData.map(({ ...soc }: SocialsDataProps) => (
                <li key={soc.id} className={styles.list_link}>
                  <h5>{soc.title}</h5>
                  <a target="_blank" href={soc.link} className={styles.link_item}>
                    <Image src={`/soc/${soc.image}.svg`} width={22} height={22} alt={soc.title} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px', opacity: '50%', fontSize: '14px' }}>
          Copyright © 2023. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
