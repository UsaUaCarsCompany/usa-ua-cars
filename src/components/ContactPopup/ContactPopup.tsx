import clsx from 'clsx'
import React, { useState } from 'react'
import styles from './PopapStyle.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { SocialsData, SocialsDataProps } from '@/data/SocialsData'

type ContactPopupProps = {
  openContact: boolean
  setOpenContact: (isOpenContact: boolean) => void
}

const ContactPopup = ({ openContact, setOpenContact }: ContactPopupProps) => {
  const handleCloseContactPopup = () => {
    setOpenContact(false)
    document.body.style.overflow = 'auto'
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
            Закрыть
          </button>
        </div>
        <div className={styles.modal_content}>
          <div className={styles.content_title}>
            <h2>Oставьте свою контактную форму!</h2>
            <p>
              Мы перезвоним или напишем вам в удобное для вас время, ответим на все интересующие вопросы, поможем найти
              хорошее авто и сделаем расчет стоимости.
            </p>
          </div>
          <div className={styles.inputs_inner}>
            <form className={styles.inputs_form}>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faUser} />
                  Как к вам обращаться?
                </label>
                <input type="text" placeholder="Sonic" required className={styles.input__field} />
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Емайл
                </label>
                <input type="Email" placeholder="example@gmail.com" required className={styles.input__field} />
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faPhone} />
                  Телефон
                </label>
                <input type="tel" placeholder="+380630000000" required className={styles.input__field} />
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faMessage} />
                  Cообщения
                </label>
                <textarea placeholder="Ваше сообщение" required className={styles.input__field_area} />
              </div>
              <button className={styles.btn_contact}>
                <span>Отправить</span>
              </button>
            </form>
            <div className={styles.devider_block}>
              <span>или</span>
              <hr className={styles.devider}></hr>
            </div>
            <div className={styles.contact_socials}>
              <h4>Свяжитесь с нами через любую соц сеть</h4>
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
        </div>
      </div>
      {/* Контентна частина ============= */}
    </>
  )
}

export default ContactPopup
