'use client'
import React, { useState } from 'react'
import styles from './Consultation.module.sass'

const Consultation = () => {
  const [number, setNumber] = useState()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('number', number)
  }

  return (
    <div className={styles.consultation}>
      <div className="container">
        <div className={styles.container__inner}>
          <div className={styles.inner__question}>
            <h2>Нужна консультация?</h2>
            <p>Оставьте свой номер, мы вам перезвоним.</p>
          </div>
          <div className={styles.inner__phone}>
            <form onSubmit={handleSubmit} className={styles.content__form}>
              <input
                value={number}
                onChange={(e: any) => setNumber(e.target.value)}
                type="tel"
                placeholder="+380630000000"
              />
              <button type="submit" className={styles.content__button}>
                <span>Отправить</span>
              </button>
            </form>
          </div>
          <ul className={styles.inner__socials}>
            <a className={styles.socials__item}>
              <li></li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Consultation
