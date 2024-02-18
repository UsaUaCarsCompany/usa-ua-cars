'use client'
import { AgeCars } from '@/selectData/AgeCars'
import React, { useState } from 'react'
import styles from './CalculateStyles.module.sass'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { bottomAnimations, leftAnimations } from '@/animations/page'
import { useLanguage } from '@/ContextLanguage/LanguageContext'

interface AuctionFeeRange {
  min: number
  max: number
  fee: number
}

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

    const auctionFeeRanges: Record<string, AuctionFeeRange[]> = {
      copart: [
        { min: 0.01, max: 49.99, fee: 25.0 },
        { min: 50.0, max: 99.99, fee: 45.0 },
        { min: 100.0, max: 199.99, fee: 80.0 },
        { min: 200.0, max: 399.99, fee: 135.0 },
        { min: 400.0, max: 499.99, fee: 180.0 },
        { min: 500.0, max: 599.99, fee: 205.0 },
        { min: 600.0, max: 699.99, fee: 235.0 },
        { min: 700.0, max: 799.99, fee: 260.0 },
        { min: 800.0, max: 899.99, fee: 280.0 },
        { min: 900.0, max: 999.99, fee: 305.0 },
        { min: 1000.0, max: 1199.99, fee: 355.0 },
        { min: 1200.0, max: 1299.99, fee: 380.0 },
        { min: 1300.0, max: 1399.99, fee: 400.0 },
        { min: 1400.0, max: 1499.99, fee: 410.0 },
        { min: 1500.0, max: 1599.99, fee: 420.0 },
        { min: 1600.0, max: 1699.99, fee: 440.0 },
        { min: 1700.0, max: 1799.99, fee: 450.0 },
        { min: 1800.0, max: 1999.99, fee: 465.0 },
        { min: 2000.0, max: 2399.99, fee: 500.0 },
        { min: 2400.0, max: 2499.99, fee: 525.0 },
        { min: 2500.0, max: 2999.99, fee: 550.0 },
        { min: 3000.0, max: 3499.99, fee: 650.0 },
        { min: 3500.0, max: 3999.99, fee: 700.0 },
        { min: 4000.0, max: 4499.99, fee: 725.0 },
        { min: 4500.0, max: 4999.99, fee: 750.0 },
        { min: 5000.0, max: 5999.99, fee: 775.0 },
        { min: 6000.0, max: 7499.99, fee: 825.0 },
        { min: 7500.0, max: 9999.99, fee: 850.0 },
        { min: 10000.0, max: 14999.99, fee: 900.0 },
        { min: 15000.0, max: Infinity, fee: 0.075 },
      ],
      iaai: [
        { min: 0.01, max: 49.99, fee: 25.0 },
        { min: 50.0, max: 99.99, fee: 45.0 },
        { min: 100.0, max: 199.99, fee: 80.0 },
        { min: 200.0, max: 399.99, fee: 120.0 },
        { min: 400.0, max: 499.99, fee: 170.0 },
        { min: 500.0, max: 599.99, fee: 195.0 },
        { min: 600.0, max: 699.99, fee: 225.0 },
        { min: 700.0, max: 799.99, fee: 245.0 },
        { min: 800.0, max: 899.99, fee: 260.0 },
        { min: 900.0, max: 999.99, fee: 290.0 },
        { min: 1000.0, max: 1099.99, fee: 340.0 },
        { min: 1100.0, max: 1199.99, fee: 355.0 },
        { min: 1200.0, max: 1299.99, fee: 370.0 },
        { min: 1300.0, max: 1399.99, fee: 385.0 },
        { min: 1400.0, max: 1499.99, fee: 400.0 },
        { min: 1500.0, max: 1599.99, fee: 415.0 },
        { min: 1600.0, max: 1699.99, fee: 430.0 },
        { min: 1700.0, max: 1799.99, fee: 445.0 },
        { min: 1800.0, max: 1999.99, fee: 460.0 },
        { min: 2000.0, max: 2199.99, fee: 480.0 },
        { min: 2200.0, max: 2399.99, fee: 495.0 },
        { min: 2400.0, max: 2599.99, fee: 510.0 },
        { min: 2600.0, max: 2799.99, fee: 525.0 },
        { min: 2800.0, max: 2999.99, fee: 550.0 },
        { min: 3000.0, max: 3499.99, fee: 650.0 },
        { min: 3500.0, max: 3999.99, fee: 700.0 },
        { min: 4000.0, max: 4499.99, fee: 725.0 },
        { min: 4500.0, max: 4999.99, fee: 750.0 },
        { min: 5000.0, max: 5999.99, fee: vehicleType === 'SUV' ? 0.1 : 775.0 },
        { min: 6000.0, max: 6999.99, fee: vehicleType === 'SUV' ? 0.1 : 800.0 },
        { min: 7000.0, max: 7999.99, fee: vehicleType === 'SUV' ? 0.1 : 825.0 },
        { min: 8000.0, max: 9999.99, fee: vehicleType === 'SUV' ? 0.1 : 850.0 },
        { min: 10000.0, max: 14999.99, fee: vehicleType === 'SUV' ? 0.1 : 900.0 },
        { min: 15000.0, max: Infinity, fee: vehicleType === 'SUV' ? 0.1 : 0.075 },
      ],
    }

    const auctionFeeRange = auctionFeeRanges[selectedAuction]
    let auctionFeeResult = 0

    if (auctionFeeRange) {
      for (const rangeData of auctionFeeRange) {
        const { min, max, fee } = rangeData

        if (auctionPriceCar >= min && auctionPriceCar <= max) {
          auctionFeeResult = fee < 1 ? auctionPriceCar * fee : fee
          break
        }
      }
    }

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
                <option value="car">{language === 'ua' ? 'Легкове' : 'Легковой'}</option>
                <option value="SUV">SUV</option>
              </select>
            </div>

            <div className={styles.input__options}>
              <label>{language === 'ua' ? 'Тип двигуна:' : 'Тип двигателя:'}</label>

              <select className={styles.select__options} onChange={(e) => setEngineType(e.target.value)}>
                <option value="" disabled selected>
                  {language === 'ua' ? 'Виберіть' : 'Выберите'}
                </option>
                <option value="petrol">{language === 'ua' ? 'Бензин' : 'Бензин'}</option>
                <option value="diesel">{language === 'ua' ? 'Дизель' : 'Дизель'}</option>
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
