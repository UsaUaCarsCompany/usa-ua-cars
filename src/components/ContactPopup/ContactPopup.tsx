import clsx from 'clsx'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './PopapStyle.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { SocialsData, SocialsDataProps } from '@/data/SocialsData'
import { ToastContainer, toast } from 'react-toastify'

type ContactFormValues = {
  name: string
  email: string
  phone: string
  message: string
}

type ContactPopupProps = {
  openContact: boolean
  setOpenContact: (isOpenContact: boolean) => void
  language: string
}

const ContactPopup = ({ openContact, setOpenContact, language }: ContactPopupProps) => {
  const [sendLoading, setSendLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormValues>({
    mode: 'onBlur',
  })

  const handleCloseContactPopup = () => {
    setOpenContact(false)
    reset() // Очищення форми
    document.body.style.overflow = 'auto'
  }

  const onSubmit = async (data: ContactFormValues) => {
    setSendLoading(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        console.log('Email sent successfully!')
        reset() // Очищення форми
        setSendLoading(false)
        handleCloseContactPopup()
        toast.success(language === 'ua' ? 'Повідомлення відправлено успішно!' : 'Сообщение отправилось успешно!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      } else {
        console.error('Error sending email:', response.statusText)
      }
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
            {language === 'ua' ? 'Закрити' : 'Закрыть'}
          </button>
        </div>
        <div className={styles.modal_content}>
          <div className={styles.content_title}>
            <h2>{language === 'ua' ? 'Залиште свою контактну форму!' : 'Оставьте свою контактную форму!'}</h2>
            <p>
              {language === 'ua'
                ? 'Ми передзвонимо або напишемо вам у зручний для вас час, відповімо на всі цікавлячі питання, допоможемо знайти хороше авто і зробимо розрахунок вартості.'
                : 'Мы перезвоним или напишем вам в удобное для вас время, ответим на все интересующие вопросы, поможем найти хорошее авто и сделаем расчет стоимости.'}
            </p>
          </div>
          <div className={styles.inputs_inner}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.inputs_form}>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faUser} />
                  {language === 'ua' ? 'Як до вас звертатися?' : 'Как к вам обращаться?'}
                </label>
                <input
                  {...register('name', { required: language === 'ua' ? "Поле обов'язкове" : 'Поле обязательно' })}
                  type="text"
                  placeholder={language === 'ua' ? 'Сонік' : 'Sonic'}
                  className={clsx(styles.input__field, errors.name ? styles.input__field__fail : '')}
                />
                {errors.name && <span className={styles.error_message}>{errors.name.message}</span>}
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  {language === 'ua' ? 'Емайл' : 'Эл. почта'}
                </label>
                <input
                  {...register('email', {
                    required:
                      language === 'ua' ? 'Введено невірний адрес ел. пошти' : 'Введен неверный адрес эл. почты',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: language === 'ua' ? 'Введіть коректну ел. пошту' : 'Введите корректную эл. почту',
                    },
                  })}
                  type="email"
                  placeholder="example@gmail.com"
                  className={clsx(styles.input__field, errors.email ? styles.input__field__fail : '')}
                />
                {errors.email && <span className={styles.error_message}>{errors.email.message}</span>}
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faPhone} />
                  Телефон
                </label>
                <input
                  {...register('phone', {
                    required:
                      language === 'ua' ? 'Введіть номер мобільного телефону' : 'Введите номер мобильного телефона',
                    pattern: {
                      value: /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/g,
                      message:
                        language === 'ua'
                          ? 'Введіть коректний номер мобільного телефону'
                          : 'Введите корректный номер мобильного телефона',
                    },
                  })}
                  type="tel"
                  placeholder="+380630000000"
                  className={clsx(styles.input__field, errors.phone ? styles.input__field__fail : '')}
                />
                {errors.phone && <span className={styles.error_message}>{errors.phone.message}</span>}
              </div>
              <div className={styles.input_block}>
                <label className={styles.input_label}>
                  <FontAwesomeIcon icon={faMessage} />
                  {language === 'ua' ? 'Повідомлення' : 'Cообщения'}
                </label>
                <textarea
                  {...register('message', { required: language === 'ua' ? "Поле обов'язкове" : 'Поле обязательно' })}
                  placeholder={language === 'ua' ? 'Ваше повідомлення' : 'Ваше сообщение'}
                  className={clsx(styles.input__field_area, errors.message ? styles.input__field_area__fail : '')}
                />
                {errors.message && <span className={styles.error_message}>{errors.message.message}</span>}
              </div>
              {sendLoading ? (
                <div className="loader__inner">
                  <div className="loader"></div>
                </div>
              ) : (
                <button type="submit" disabled={!isValid} className={styles.btn_contact}>
                  <span>{language === 'ua' ? 'Відправити' : 'Отправить'}</span>
                </button>
              )}
            </form>
            <div className={styles.devider_block}>
              <span>{language === 'ua' ? 'або' : 'или'}</span>
              <hr className={styles.devider}></hr>
            </div>
            <div className={styles.contact_socials}>
              <h4>
                {language === 'ua'
                  ? "Зв'яжіться з нами через будь-яку соцмережу"
                  : 'Свяжитесь с нами через любую соц сеть'}
              </h4>
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
              <h4>{language === 'ua' ? 'Контакти:' : 'Контакты:'}</h4>
              <ul className={styles.contacts__phones}>
                <li className={styles.phoneLink}>
                  <a href="tel:+380680989080">+380680989080</a>
                </li>
                <li className={styles.phoneLink}>
                  <a href="tel:+380934851357">+380934851357</a>
                </li>
                <li className={styles.phoneLink}>
                  <a href="tel:+380972977936">+380972977936</a>
                </li>
              </ul>

              <h4>{language === 'ua' ? 'Емайл:' : 'Емайл:'}</h4>
              <div className={styles.mailLink}>
                <a href="mailto:usauacars.company@gmail.com">usauacars.company@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Контентна частина ============= */}
    </>
  )
}

export default ContactPopup
