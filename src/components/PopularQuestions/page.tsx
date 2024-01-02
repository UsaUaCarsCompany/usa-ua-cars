'use client'
import React, { useState } from 'react'
import styles from './popularQuestionsStyles.module.sass'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AccordionsData, AccordionsDataProps } from '@/data/AccordionsData'

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

  const toggleHandler = (accordionId: number) => {
    setOpenAccordions((prevOpenAccordions) => ({
      ...prevOpenAccordions,
      [accordionId]: !prevOpenAccordions[accordionId],
    }))
  }

  return (
    <div className={styles.questions__block} id="faq">
      <div className="container">
        <div className={styles.container__inner}>
          <div className={styles.inner__title}>
            <h3>Часто задаваемые вопросы</h3>
            <span />
          </div>
          <div className={styles.inner__questions}>
            <ul className={styles.questions__accordions}>
              {AccordionsData.map(({ id, ...accord }: AccordionsDataProps) => (
                <li
                  key={id}
                  className={clsx(styles.accordion__block, openAccordions[id] ? styles.accordion__block__active : '')}
                >
                  <div className={styles.accordion_heading} onClick={() => toggleHandler(id)}>
                    <h3>{accord.title}</h3>

                    <button className={styles.accordion_icon} onClick={() => toggleHandler(id)}>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={clsx(styles.accordion_arrow)}
                        onClick={() => toggleHandler(id)}
                        aria-expanded={openAccordions[id]}
                      />
                    </button>
                  </div>
                  <div aria-expanded={openAccordions[id]} className={styles.accordion_content}>
                    <div className={styles.content_container}>
                      <div className={styles.content_text}>{accord.text}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
