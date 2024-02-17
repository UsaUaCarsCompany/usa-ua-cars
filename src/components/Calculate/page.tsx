'use client'
import { AgeCars } from '@/selectData/AgeCars'
import React, { useState } from 'react'
import styles from './CalculateStyles.module.sass'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { bottomAnimations, leftAnimations } from '@/animations/page'
import { useLanguage } from '@/ContextLanguage/LanguageContext'

export const CarCustomsCalculator: React.FC = () => {
  const [auctionValue, setAuctionValue] = useState<number>(0)
  const [selectedAuction, setSelectedAuction] = useState<string>('Аукціон')
  const [ageCar, setAgeCar] = useState<number>(2023)
  const [engineVolume, setEngineVolume] = useState<number>(0)
  const [engineType, setEngineType] = useState<string>('')
  const [vehicleType, setVehicleType] = useState<string>('')
  const [customsCost, setCustomsCost] = useState<number>(0)
  const [exciseTax, setExciseTax] = useState<number>(0)
  const [vat, setVat] = useState<number>(0)
  const [brokerage, setBrokerage] = useState<number>(0)

  const [auctionFee, setAuctionFee] = useState<number>(0)
  const [usaUaCarsCommission, setUsaUaCarsCommission] = useState<number>(0)
  const [usShippingCost, setUsShippingCost] = useState<number>(0)
  const [shippingToUkraineCost, setShippingToUkraineCost] = useState<number>(0)
  const [oceanShippingCost, setOceanShippingCost] = useState<number>(0)
  const [expeditingCost, setExpeditingCost] = useState<number>(0)
  const [carCarrierCost, setCarCarrierCost] = useState<number>(0)
  const [summary, setSummary] = useState<number>(0)

  const { language, switchLanguage } = useLanguage()

  // const [selectedAuction, setSelectedAuction] = useState<string>('copart')
  const handleAuctionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuction(e.target.value)
  }

  const calculateCustoms = () => {
    const auctionPriceCar = auctionValue

    const auctionFeeRanges: Record<string, number> = {
      copart: auctionValue * 0.0379,
      iaai: auctionValue * 0.062,
    }
    const auctionFeeRange = auctionFeeRanges[selectedAuction]

    const auctionFeeResult = auctionFeeRange

    // Комісія USA-UA CARS
    const usaUaCarsCommissionResult = 400

    // Доставка по США
    const usaShippingCostResult = 650

    // Доставка Морем
    let oceanShippingCostResult = vehicleType === 'SUV' ? 200 + 900 : 900

    if (vehicleType === 'car' || vehicleType === 'SUV') {
      if ((engineType === 'electric' || engineType === 'hybrid') && !['petrol', 'diesel'].includes(engineType)) {
        oceanShippingCostResult += 200
      }
    }

    // Експедирування
    const expeditingCostResult = 230

    // Доставка авто з Клайпеди до Львова
    const carCarrierCostResult = 920

    // Доставка в Україну
    const shippingToUkraineCostResult = oceanShippingCostResult + expeditingCostResult + carCarrierCostResult

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const age = currentYear - ageCar
    const ageCoefficients = [2.2, 1.9, 1.65, 1.55, 1.45, 1.35, 1, 0.9, 0.85, 0.8, 0.75, 0.7, 0.7]
    const ageCoefficient = age < ageCoefficients.length ? ageCoefficients[age] : 0.7

    const engineTypeCoefficients: Record<string, number> = { petrol: 1, diesel: 1.2, hybrid: 0.5, electric: 0 }
    const engineTypeCoefficient = engineTypeCoefficients[engineType]

    const exclusivityCoefficient = 1

    const totalCoefficient = ageCoefficient * engineVolume * engineTypeCoefficient * exclusivityCoefficient

    const exciseTaxResult = totalCoefficient / 2
    const vatRate = 0.2
    const vatResult = totalCoefficient * 3.5 * vatRate

    const brokerage = 150

    const customsCostResult = exciseTaxResult + vatResult + brokerage

    const totalCost =
      auctionPriceCar +
      auctionFeeResult +
      usaUaCarsCommissionResult +
      usaShippingCostResult +
      shippingToUkraineCostResult +
      customsCostResult

    setAuctionValue(auctionPriceCar)
    setExciseTax(Math.round(exciseTaxResult))
    setVat(Math.round(vatResult))
    setBrokerage(brokerage)
    setAuctionFee(Math.round(auctionFeeResult))
    setUsaUaCarsCommission(usaUaCarsCommissionResult)
    setUsShippingCost(usaShippingCostResult)
    setShippingToUkraineCost(shippingToUkraineCostResult)
    setOceanShippingCost(oceanShippingCostResult)
    setExpeditingCost(expeditingCostResult)
    setCarCarrierCost(carCarrierCostResult)
    setCustomsCost(Math.round(customsCostResult))
    setSummary(Math.round(totalCost))
  }

  return (
    <div className={styles.calc__block} id="Clearance">
      <div className="container">
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className={styles.calc__header}>
          <motion.h1 variants={bottomAnimations} custom={1}>
            {language === 'ua'
              ? 'Калькулятор доставки та розмитнення авто із США в Україну'
              : 'Калькулятор доставки и растаможки авто из США в Украину'}
          </motion.h1>
          <div className={styles.calc__subtitle__pic}>
            <motion.span variants={bottomAnimations} custom={1.2}>
              {language === 'ua'
                ? 'За допомогою нашого онлайн-калькулятора ви можете розрахувати вартість авто із Америки'
                : 'С помощью нашего онлайн-калькулятора вы можете рассчитать стоимость авто из Америки'}
            </motion.span>
            <motion.div variants={leftAnimations} custom={2} className={styles.subtitle__pic}>
              <Image src="/calc/calcCar.png" width={288} height={147} alt="Ferrari" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={bottomAnimations}
          custom={2}
          className={styles.container__inner}
        >
          <div className={styles.inner__form}>
            <h2>{language === 'ua' ? 'Вхідні дані' : 'Входные данные'}</h2>
            <div className={styles.input_block}>
              <label>{language === 'ua' ? 'Вартість авто на аукціоні $:' : 'Стоимость авто на аукционе $:'}</label>
              <input
                className={styles.input__field}
                type="number"
                placeholder="$5000"
                onChange={(e) => setAuctionValue(parseInt(e.target.value, 10))}
              />
            </div>

            <div className={styles.input__options}>
              <label>{language === 'ua' ? 'Аукціон:' : 'Аукцион:'}</label>

              <select className={styles.select__options} onChange={handleAuctionChange}>
                <option value="" disabled selected>
                  {language === 'ua' ? 'Аукціон:' : 'Аукцион:'}
                </option>
                <option value="copart">Copart</option>
                <option value="iaai">IAAI</option>
              </select>
            </div>

            <div className={styles.input__options}>
              <label>{language === 'ua' ? 'Тип транспорту:' : 'Тип транспорта:'}</label>

              <select className={styles.select__options} onChange={(e) => setVehicleType(e.target.value)}>
                <option value="" disabled selected>
                  {language === 'ua' ? 'Виберіть' : 'Выберите'}
                </option>
                <option value="car">Авто</option>
                <option value="SUV">SUV</option>
              </select>
            </div>

            <div className={styles.input__options}>
              <label>{language === 'ua' ? 'Тип двигуна:' : 'Тип двигателя:'}</label>

              <select className={styles.select__options} onChange={(e) => setEngineType(e.target.value)}>
                <option value="" disabled selected>
                  Виберіть
                </option>
                <option value="petrol">{language === 'ua' ? 'Бензин/Газ' : 'Бензин/Газ'}</option>
                <option value="diesel">{language === 'ua' ? 'Дизель' : 'Выберите'}</option>
                <option value="hybrid">{language === 'ua' ? 'Гібрид' : 'Гибрид'}</option>
                <option value="electric">{language === 'ua' ? 'Електро' : 'Электро'}</option>
              </select>
            </div>

            <div className={styles.input_block}>
              <label>{language === 'ua' ? "Об'єм двигуна:" : 'Объем двигателя:'}</label>

              <input
                className={styles.input__field}
                type="number"
                placeholder={language === 'ua' ? "Об'єм двигуна, см³" : 'Объем двигателя, см³'}
                onChange={(e) => setEngineVolume(parseInt(e.target.value, 10))}
              />
            </div>

            <div className={styles.input__options}>
              <label>{language === 'ua' ? 'Рік випуску авто:' : 'Год выпуска авто:'}</label>

              <select className={styles.select__options} onChange={(e) => setAgeCar(parseInt(e.target.value, 10))}>
                <option value="" disabled selected>
                  {language === 'ua' ? 'Виберіть' : 'Выберите'}
                </option>
                {AgeCars.map((car) => (
                  <option key={car.id} value={car.value}>
                    {car.label}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={calculateCustoms} className={styles.btn_calc}>
              <span>{language === 'ua' ? 'Розрахувати' : 'Рассчитать'}</span>
            </button>
          </div>
          <div className={styles.inner__result}>
            <div className={styles.result__content}>
              <div className={styles.result__inner__block}>
                <h3>
                  {language === 'ua'
                    ? 'Вартість вашого авто на аукціоні США:'
                    : 'Стоимость вашего авто на аукционе США:'}
                </h3>
                <span>${auctionValue}</span>
              </div>
              <div className={styles.result__inner__block}>
                <h3>{language === 'ua' ? 'Аукціонний збір:' : 'Аукционный сбор:'}</h3> <span>${auctionFee}</span>
              </div>
              <div className={styles.result__inner__block}>
                <h3>{language === 'ua' ? 'Комісія USA-UA CARS:' : 'Комиссия USA-UA CARS:'}</h3>
                <span>${usaUaCarsCommission}</span>
              </div>
              <div className={styles.result__inner__block}>
                <h3>{language === 'ua' ? 'Доставка по США:' : 'Доставка по США:'}</h3>
                <span>${usShippingCost}</span>
              </div>
              <div className={styles.result__inner__block__subPrice}>
                <div className={styles.result__inner__block}>
                  <h3>{language === 'ua' ? 'Доставка в Україну:' : 'Доставка в Украину:'}</h3>
                  <span>${shippingToUkraineCost}</span>
                </div>
                <ul className={styles.result__list}>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Доставка Морем:' : 'Доставка Морем:'}</h5>{' '}
                    <span>${oceanShippingCost}</span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Експедирування:' : 'Экспедирование:'}</h5> <span>${expeditingCost}</span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>
                      {language === 'ua'
                        ? 'Доставка авто з Клайпеди до Львова:'
                        : 'Доставка авто из Клайпеды до Львова:'}
                    </h5>
                    <span>${carCarrierCost}</span>
                  </li>
                </ul>
              </div>

              <div className={styles.result__inner__block__subPrice}>
                <div className={styles.result__inner__block}>
                  <h3>{language === 'ua' ? 'Розмитнення:' : 'Растаможка:'}</h3> <span>${customsCost}</span>
                </div>
                <ul className={styles.result__list}>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Акциз:' : 'Акциз:'}</h5> <span>${exciseTax}</span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'ПДВ:' : 'НДС:'}</h5> <span>${vat}</span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Брокерські послуги:' : 'Брокерские услуги:'}</h5>{' '}
                    <span>${brokerage}</span>
                  </li>
                </ul>

                <hr className={styles.divider} />
                <div className={styles.result__inner__block__last}>
                  <h3>{language === 'ua' ? 'Вартість авто + доставка:' : 'Стоимость авто + доставка:'}</h3>
                  <span>${summary}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CarCustomsCalculator
