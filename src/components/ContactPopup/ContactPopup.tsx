import clsx from 'clsx'
import React, { useState } from 'react'
import styles from './PopapStyle.module.sass'

type ContactPopupProps = {
  openContact: boolean
  setOpenContact: (isOpenContact: boolean) => void
}

const ContactPopup = ({ openContact, setOpenContact }: ContactPopupProps) => {
  const handleCloseContactPopup = () => {
    setOpenContact(false)
  }

  return (
    <>
      {/* Задній план ============= */}
      <div
        className={clsx(styles.modal_holder, openContact ? styles.show_holder : '')}
        onClick={handleCloseContactPopup}
      ></div>
      {/* Задній план ============= */}

      {/* Контентна частина ============= */}
      <div className={clsx(styles.modal_window, openContact ? styles.show_window : '')}>
        <div className={styles.modal_header}>
          <button className={styles.modal_close} onClick={handleCloseContactPopup}>
            X
          </button>
        </div>
        <div className={styles.modal_content}>
          <form>
            <div className={styles.input_block}>
              <label>Полное имя</label>
              <input type="text" placeholder="Артем Дрогобич" required />
            </div>
            <div className={styles.inputs_inner}>
              <div className={styles.input_block}>
                <label>Емайл</label>
                <input type="Email" placeholder="Артем Дрогобич" required />
              </div>
              <div className={styles.input_block}>
                <label>Телефон</label>
                <input type="tel" placeholder="+380630000000" required />
              </div>
            </div>
            <div className={styles.input_block}>
              <label>Cообщение</label>
              <textarea placeholder="Оставьте ваше сообщение" required />
            </div>
          </form>
        </div>
      </div>
      {/* Контентна частина ============= */}
    </>
  )
}

export default ContactPopup
