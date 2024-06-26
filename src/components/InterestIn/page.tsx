'use client'
import React, { useState } from 'react'
import styles from './interestInStyles.module.sass'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { Goat, GoatProps, Key, KeyProps } from '@/selectData/KeyAndGoat'
import { ToastContainer, toast } from 'react-toastify'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { bottomAnimations } from '@/animations/page'

type SendFormProps = {
  typeOfGoat: string
  turnkeyBudget: string
  email: string
  phone: string
}

export const InterestIn = () => {
  const [sendLoading, setSendLoading] = useState(false)
  const { language, switchLanguage } = useLanguage()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SendFormProps>({ mode: 'onBlur' })

  const onSubmit = async (data: SendFormProps) => {
    setSendLoading(true)

    try {
      const response = await fetch('/api/sendInterest', {
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
        // Опціонально: додати код для відображення повідомлення про помилку відправки форми
      }
    } catch (error) {
      console.error('Error sending email:', error)
      // Опціонально: додати код для відображення повідомлення про помилку відправки форми
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
      <div className={styles.interest__block}>
        <div className={styles.block__overlay}></div>
        <div className="container">
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={bottomAnimations}
            custom={2}
            className={styles.container__inner}
          >
            <div className={styles.inner__card}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.card__form__interest}>
                <h2>{language === 'ua' ? 'Який автомобіль вас цікавить?' : 'Какой автомобиль вас интересует?'}</h2>
                <div className={styles.input__options}>
                  <label htmlFor="type_of_goat">
                    {language === 'ua' ? 'Виберіть тип кузова:' : 'Выберите тип кузова:'}
                  </label>
                  <select
                    {...register('typeOfGoat', {
                      required: language === 'ua' ? 'Виберіть тип кузова' : 'Выберите тип кузова',
                    })}
                    className={styles.select__options}
                    id="type_of_goat"
                  >
                    <option value="" disabled selected>
                      {language === 'ua' ? 'Тип Кузова' : 'Тип Кузова'}
                    </option>
                    {Goat.map(({ ...goat }: GoatProps) => (
                      <option key={goat.id} value={language === 'ua' ? goat.name.ua : goat.name.ru}>
                        {language === 'ua' ? goat.name.ua : goat.name.ru}
                      </option>
                    ))}
                  </select>
                  {errors.typeOfGoat && <span className={styles.error_message}>{errors.typeOfGoat.message}</span>}
                </div>
                <div className={styles.input__options}>
                  <label htmlFor="turnkey_budget">
                    {language === 'ua' ? 'Виберіть бюджет під ключ:' : 'Выберите бюджет под ключ:'}
                  </label>
                  <select
                    {...register('turnkeyBudget', {
                      required: language === 'ua' ? 'Виберіть бюджет' : 'Выберите бюджет',
                    })}
                    className={styles.select__options}
                    id="turnkey_budget"
                  >
                    <option value="" disabled selected>
                      {language === 'ua' ? 'Бюджет під ключ' : 'Бюджет под ключ'}
                    </option>
                    {Key.map(({ ...key }: KeyProps) => (
                      <option key={key.id} value={language === 'ua' ? key.range.ua : key.range.ru}>
                        {language === 'ua' ? key.range.ua : key.range.ru}
                      </option>
                    ))}
                  </select>
                  {errors.turnkeyBudget && <span className={styles.error_message}>{errors.turnkeyBudget.message}</span>}
                </div>
                <div className={styles.input_block}>
                  <label htmlFor="phone">
                    {language === 'ua' ? 'Введіть номер мобільного телефону:' : 'Введите номер мобильного телефона:'}
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
                    placeholder="Телефон +380111111111"
                    className={clsx(styles.input__field, errors.phone ? styles.input__field__fail : '')}
                  />
                  {errors.phone && <span className={styles.error_message}>{errors.phone.message}</span>}
                </div>
                <div className={styles.input_block}>
                  <label htmlFor="email">
                    {language === 'ua' ? 'Введіть адресу електронної пошти:' : 'Введите адрес электронной почты:'}
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
                    placeholder={language === 'ua' ? 'Емайл' : 'Емайл'}
                    className={clsx(styles.input__field, errors.email ? styles.input__field__fail : '')}
                  />
                  {errors.email && <span className={styles.error_message}>{errors.email.message}</span>}
                </div>
                {sendLoading ? (
                  <div className="loader__inner">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <button type="submit" disabled={!isValid} className={styles.btn_contact}>
                    <span>{language === 'ua' ? 'Отримати підбір' : 'Получить подбор'}</span>
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default InterestIn
