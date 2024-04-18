'use client'
import React, { useState } from 'react'
import styles from './popularQuestionsStyles.module.sass'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AccordionsData, AccordionsDataProps } from '@/data/AccordionsData'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { leftAnimations, rightAnimations } from '@/animations/page'

interface AccordionState {
  [id: number]: boolean
}

export const Questions = () => {
  const [openAccordions, setOpenAccordions] = useState<AccordionState>(() => {
    const accordionState: AccordionState = {}
    AccordionsData.forEach(({ id }) => {
      accordionState[id] = false
    })
    return accordionState
  })
  const { language, switchLanguage } = useLanguage()

  const toggleHandler = (accordionId: number) => {
    setOpenAccordions((prevOpenAccordions) => ({
      ...prevOpenAccordions,
      [accordionId]: !prevOpenAccordions[accordionId],
    }))
  }

  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className={styles.questions__block}
      id="faq"
    >
      <div className="container">
        <div className={styles.container__inner}>
          <div className={styles.inner__title}>
            <motion.h3 variants={rightAnimations} custom={1}>
              {language === 'ua' ? 'Часті запитання' : 'Часто задаваемые вопросы'}
            </motion.h3>
            <motion.span variants={rightAnimations} custom={1.6} />
          </div>
          <div className={styles.inner__questions}>
            <ul className={styles.questions__accordions}>
              {AccordionsData.map(({ id, ...accord }: AccordionsDataProps) => (
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={accord.anim === 'right' ? rightAnimations : leftAnimations}
                  custom={accord.index}
                  key={id}
                  className={clsx(styles.accordion__block, openAccordions[id] && styles.accordion__block__active)}
                >
                  <div className={styles.accordion_heading} onClick={() => toggleHandler(id)}>
                    <h3>{language === 'ua' ? accord.title.ua : accord.title.ru}</h3>
                    <button className={styles.accordion_icon} aria-label="Accordion arrow">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={clsx(styles.accordion_arrow, openAccordions[id] && styles.aaccordion_arrow__active)}
                      />
                    </button>
                  </div>
                  <div
                    className={clsx(styles.accordion_content, openAccordions[id] && styles.accordion_content__active)}
                  >
                    <div className={styles.content_container}>
                      <div className={styles.content_text}>{language === 'ua' ? accord.text.ua : accord.text.ru}</div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Questions
