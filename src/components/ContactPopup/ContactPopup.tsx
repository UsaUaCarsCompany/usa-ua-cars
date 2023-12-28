import clsx from 'clsx'
import React, { useState } from 'react'
import styles from './PopapStyle.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { SocialsData, SocialsDataProps } from '@/data/SocialsData'
import { Resend } from 'resend'

type ContactPopupProps = {
  openContact: boolean
  setOpenContact: (isOpenContact: boolean) => void
}

type formDataProps = {
  name: string
  email: string
  phone: string
  message: string
}

const ContactPopup = ({ openContact, setOpenContact }: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCloseContactPopup = () => {
    setOpenContact(false)
    document.body.style.overflow = 'auto'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Email sent successfully!')
        // Опціонально: додати код для відображення повідомлення про успішну відправку форми
      } else {
        console.error('Error sending email:', response.statusText)
        // Опціонально: додати код для відображення повідомлення про помилку відправки форми
      }
    } catch (error) {
      console.error('Error sending email:', error)
      // Опціонально: додати код для відображення повідомлення про помилку відправки форми
    }
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
            <form onSubmit={handleSubmit} className={styles.inputs_form}>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faUser} />
                  Как к вам обращаться?
                </label>
                <input
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Sonic"
                  name="name"
                  required
                  className={styles.input__field}
                />
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Емайл
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="Email"
                  placeholder="example@gmail.com"
                  required
                  className={styles.input__field}
                />
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faPhone} />
                  Телефон
                </label>
                <input
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  name="phone"
                  placeholder="+380630000000"
                  required
                  className={styles.input__field}
                />
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faMessage} />
                  Cообщения
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ваше сообщение"
                  required
                  className={styles.input__field_area}
                />
              </div>
              <button type="submit" className={styles.btn_contact}>
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
