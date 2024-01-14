'use client'
import React, { useState } from 'react'
import styles from './interestInStyles.module.sass'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { Goat, GoatProps, Key, KeyProps } from '@/selectData/KeyAndGoat'
import { ToastContainer, toast } from 'react-toastify'

type SendFormProps = {
  typeOfGoat: string
  turnkeyBudget: string
  email: string
  phone: string
}

export const InterestIn = () => {
  const [sendLoading, setSendLoading] = useState(false)

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
        toast.success('Сообщение отправилось успешно!', {
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
          <div className={styles.container__inner}>
            <div className={styles.inner__card}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.card__form__interest}>
                <h2>Какой автомобиль вас интересует?</h2>
                <div className={styles.input__options}>
                  <select
                    {...register('typeOfGoat', { required: 'Выберите тип кузова' })}
                    className={styles.select__options}
                    id="type_of_goat"
                  >
                    <option value="" selected={true}>
                      Тип Кузова
                    </option>
                    {Goat.map(({ ...goat }: GoatProps) => (
                      <option key={goat.id} value={goat.name}>
                        {goat.name}
                      </option>
                    ))}
                  </select>
                  {errors.typeOfGoat && <span className={styles.error_message}>{errors.typeOfGoat.message}</span>}
                </div>
                <div className={styles.input__options}>
                  <select
                    {...register('turnkeyBudget', { required: 'Выберите бюджет' })}
                    className={styles.select__options}
                    id="turnkey_budget"
                  >
                    <option value="" selected={true}>
                      Бюджет под ключ
                    </option>

                    {Key.map(({ ...key }: KeyProps) => (
                      <option key={key.id} value={key.range}>
                        {key.range}
                      </option>
                    ))}
                  </select>
                  {errors.turnkeyBudget && <span className={styles.error_message}>{errors.turnkeyBudget.message}</span>}
                </div>
                <div className={styles.input_block}>
                  <input
                    {...register('phone', {
                      required: 'Введите номер мобильного телефона',
                      pattern: {
                        value: /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/g,
                        message: 'Введите корректный номер мобильного телефона',
                      },
                    })}
                    type="tel"
                    placeholder="Телефон"
                    className={clsx(styles.input__field, errors.phone ? styles.input__field__fail : '')}
                  />
                  {errors.phone && <span className={styles.error_message}>{errors.phone.message}</span>}
                </div>
                <div className={styles.input_block}>
                  <input
                    {...register('email', {
                      required: 'Введен неверный адрес эл. почты',
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Введите корректную эл. почту',
                      },
                    })}
                    type="email"
                    placeholder="Емайл"
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
                    <span>Получить подбор</span>
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InterestIn
