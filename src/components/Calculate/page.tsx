'use client'
import { AgeCars } from '@/selectData/AgeCars'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
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
  const [exchangeRates, setExchangeRates] = useState<any>(null)
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD')
  const [auctionValue, setAuctionValue] = useState<number>(0)
  const [selectedAuction, setSelectedAuction] = useState<string>('Аукціон')
  const [ageCar, setAgeCar] = useState<number>(2023)
  const [engineVolume, setEngineVolume] = useState<number>(0)
  const [engineType, setEngineType] = useState<string>('')
  const [vehicleType, setVehicleType] = useState<string>('')
  const [importDuty, setImportDuty] = useState<number>(0)
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

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value)
  }

  const fetchExchangeRates = async () => {
    try {
      const response = await axios.get(`https://open.er-api.com/v6/latest/USD`)
      const rates = response.data.rates
      setExchangeRates(rates)
    } catch (error) {
      console.error('Error fetching exchange rates:', error)
    }
  }

  useEffect(() => {
    fetchExchangeRates()
  }, [selectedCurrency])

  const calculateCustoms = () => {
    const CoefficientsCurrencyUSD = selectedCurrency === 'USD' ? exchangeRates.USD / exchangeRates.EUR : 1

    const CoefficientsCurrencyEUR = selectedCurrency === 'EUR' ? exchangeRates.EUR : 1

    const auctionPriceCar = auctionValue

    const auctionFeeRanges: Record<string, AuctionFeeRange[]> = {
      copart: [
        // { min: 0.01, max: 49.99, fee: 25.0 },
        // { min: 50.0, max: 99.99, fee: 45.0 },
        // { min: 100.0, max: 199.99, fee: 80.0 },
        // { min: 200.0, max: 399.99, fee: 135.0 },
        // { min: 400.0, max: 499.99, fee: 180.0 },
        // { min: 500.0, max: 599.99, fee: 205.0 },
        // { min: 600.0, max: 699.99, fee: 235.0 },
        // { min: 700.0, max: 799.99, fee: 260.0 },
        // { min: 800.0, max: 899.99, fee: 280.0 },
        // { min: 900.0, max: 999.99, fee: 305.0 },
        // { min: 1000.0, max: 1199.99, fee: 355.0 },
        // { min: 1200.0, max: 1299.99, fee: 380.0 },
        // { min: 1300.0, max: 1399.99, fee: 400.0 },
        // { min: 1400.0, max: 1499.99, fee: 410.0 },
        // { min: 1500.0, max: 1599.99, fee: 420.0 },
        // { min: 1600.0, max: 1699.99, fee: 440.0 },
        // { min: 1700.0, max: 1799.99, fee: 450.0 },
        // { min: 1800.0, max: 1999.99, fee: 465.0 },
        // { min: 2000.0, max: 2399.99, fee: 500.0 },
        // { min: 2400.0, max: 2499.99, fee: 525.0 },
        // { min: 2500.0, max: 2999.99, fee: 550.0 },
        // { min: 3000.0, max: 3499.99, fee: 650.0 },
        // { min: 3500.0, max: 3999.99, fee: 700.0 },
        // { min: 4000.0, max: 4499.99, fee: 725.0 },
        // { min: 4500.0, max: 4999.99, fee: 750.0 },
        // { min: 5000.0, max: 5999.99, fee: 775.0 },
        // { min: 6000.0, max: 7499.99, fee: 825.0 },
        // { min: 7500.0, max: 9999.99, fee: 850.0 },
        // { min: 10000.0, max: 14999.99, fee: 900.0 },
        // { min: 15000.0, max: Infinity, fee: 0.075 },
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
        { min: 7500.0, max: 9999.99, fee: 865.0 },
        { min: 10000.0, max: 14999.99, fee: 900.0 },
        { min: 15000.0, max: Infinity, fee: 0.075 },
      ],
      iaai: [
        // { min: 0.01, max: 49.99, fee: 25.0 },
        // { min: 50.0, max: 99.99, fee: 45.0 },
        // { min: 100.0, max: 199.99, fee: 80.0 },
        // { min: 200.0, max: 399.99, fee: 120.0 },
        // { min: 400.0, max: 499.99, fee: 170.0 },
        // { min: 500.0, max: 599.99, fee: 195.0 },
        // { min: 600.0, max: 699.99, fee: 225.0 },
        // { min: 700.0, max: 799.99, fee: 245.0 },
        // { min: 800.0, max: 899.99, fee: 260.0 },
        // { min: 900.0, max: 999.99, fee: 290.0 },
        // { min: 1000.0, max: 1099.99, fee: 340.0 },
        // { min: 1100.0, max: 1199.99, fee: 355.0 },
        // { min: 1200.0, max: 1299.99, fee: 370.0 },
        // { min: 1300.0, max: 1399.99, fee: 385.0 },
        // { min: 1400.0, max: 1499.99, fee: 400.0 },
        // { min: 1500.0, max: 1599.99, fee: 415.0 },
        // { min: 1600.0, max: 1699.99, fee: 430.0 },
        // { min: 1700.0, max: 1799.99, fee: 445.0 },
        // { min: 1800.0, max: 1999.99, fee: 460.0 },
        // { min: 2000.0, max: 2199.99, fee: 480.0 },
        // { min: 2200.0, max: 2399.99, fee: 495.0 },
        // { min: 2400.0, max: 2599.99, fee: 510.0 },
        // { min: 2600.0, max: 2799.99, fee: 525.0 },
        // { min: 2800.0, max: 2999.99, fee: 550.0 },
        // { min: 3000.0, max: 3499.99, fee: 650.0 },
        // { min: 3500.0, max: 3999.99, fee: 700.0 },
        // { min: 4000.0, max: 4499.99, fee: 725.0 },
        // { min: 4500.0, max: 4999.99, fee: 750.0 },
        // { min: 5000.0, max: 5999.99, fee: vehicleType === 'SUV' ? 0.1 : 775.0 },
        // { min: 6000.0, max: 6999.99, fee: vehicleType === 'SUV' ? 0.1 : 800.0 },
        // { min: 7000.0, max: 7999.99, fee: vehicleType === 'SUV' ? 0.1 : 825.0 },
        // { min: 8000.0, max: 9999.99, fee: vehicleType === 'SUV' ? 0.1 : 850.0 },
        // { min: 10000.0, max: 14999.99, fee: vehicleType === 'SUV' ? 0.1 : 900.0 },
        // { min: 15000.0, max: Infinity, fee: vehicleType === 'SUV' ? 0.1 : 0.075 },
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
        { min: 5000.0, max: 5999.99, fee: 775.0 },
        { min: 6000.0, max: 6999.99, fee: 800.0 },
        { min: 7000.0, max: 7999.99, fee: 825.0 },
        { min: 8000.0, max: 9999.99, fee: 850.0 },
        { min: 10000.0, max: 14999.99, fee: 900.0 },
        { min: 15000.0, max: Infinity, fee: 0.075 },
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
    const usaUaCarsCommissionResult = 450 * CoefficientsCurrencyEUR

    // Доставка по США
    const usaShippingCostResult = 650 * CoefficientsCurrencyEUR

    // Доставка Морем
    let oceanShippingCostResult =
      vehicleType === 'SUV' ? 200 + 900 * CoefficientsCurrencyEUR : 900 * CoefficientsCurrencyEUR

    if (vehicleType === 'car' || vehicleType === 'SUV') {
      if ((engineType === 'electric' || engineType === 'hybrid') && !['petrol', 'diesel'].includes(engineType)) {
        oceanShippingCostResult += 200
      }
    }

    // Експедирування
    const expeditingCostResult = 250 * CoefficientsCurrencyEUR

    // Доставка авто з Клайпеди до Львова
    const carCarrierCostResult = 1100 * CoefficientsCurrencyEUR

    // Брокерські послуги
    const brokerage = 150 * CoefficientsCurrencyEUR

    // Доставка в Україну
    const shippingToUkraineCostResult =
      oceanShippingCostResult + expeditingCostResult + carCarrierCostResult + brokerage

    // Отримання поточної дати
    const currentDate = new Date()

    // Отримання поточного року
    const currentYear = currentDate.getFullYear()

    // Визначення віку авто
    const age = currentYear - ageCar

    // Коефіцієнти віку для розрахунку акцизного податку
    const ageCoefficients = [
      0.2, 0.2, 0.2, 0.4, 0.596, 0.796, 0.994, 1.192, 1.391, 1.59, 1.79, 1.988, 2.187, 2.386, 2.585,
    ]

    // Визначення коефіцієнта віку
    const ageCoefficient =
      engineType === 'electric' ? 0.994 : age < ageCoefficients.length ? ageCoefficients[age] : 2.783

    // Коефіцієнти типу двигуна
    const engineTypeCoefficients: Record<string, number> = { petrol: 1.001, diesel: 1.5, hybrid: 1, electric: 1 }

    // Визначення коефіцієнта типу двигуна
    const engineTypeCoefficient = engineTypeCoefficients[engineType]

    // Коефіцієнт ексклюзивності
    const exclusivityCoefficient = 1

    // Сума від якої рахується Ввізне мито
    const ImportDutyPriceCar =
      auctionValue + auctionFeeResult * CoefficientsCurrencyEUR + usaShippingCostResult + oceanShippingCostResult

    // Ввізне мито (10% від ImportDutyPriceCar)
    const importDutyResult = engineType === 'electric' ? 0 : ImportDutyPriceCar * 0.1 * CoefficientsCurrencyUSD

    const totalCoefficient = ageCoefficient * engineVolume * engineTypeCoefficient * exclusivityCoefficient

    const exciseTaxResultPetrol =
      engineType === 'petrol' && engineVolume > 3000
        ? (totalCoefficient / 2) * CoefficientsCurrencyUSD
        : (totalCoefficient / 4) * CoefficientsCurrencyUSD

    const exciseTaxResultHybrid =
      engineType === 'hybrid' && engineVolume > 3000
        ? (totalCoefficient / 2) * CoefficientsCurrencyUSD
        : (totalCoefficient / 4) * CoefficientsCurrencyUSD

    const exciseTaxResultDisel =
      engineType === 'diesel' && engineVolume > 3500
        ? (totalCoefficient / 2) * CoefficientsCurrencyUSD
        : (totalCoefficient / 4) * CoefficientsCurrencyUSD

    const exciseTaxResultElectric =
      engineType === 'electric'
        ? totalCoefficient * CoefficientsCurrencyUSD
        : (totalCoefficient / 4) * CoefficientsCurrencyUSD

    // акцизний податок
    const exciseTaxResult =
      engineType === 'petrol'
        ? exciseTaxResultPetrol
        : engineType === 'hybrid'
        ? exciseTaxResultHybrid
        : engineType === 'diesel'
        ? exciseTaxResultDisel
        : engineType === 'electric'
        ? exciseTaxResultElectric
        : (totalCoefficient / 4) * CoefficientsCurrencyUSD

    // Ставка ПДВ
    const vatRate = 0.2

    // Розрахунок суми ПДВ
    const vatResult = engineType === 'electric' ? 0 : ImportDutyPriceCar * vatRate * CoefficientsCurrencyUSD

    // Розрахунок загальної вартості митного оформлення
    const customsCostResult = exciseTaxResult + vatResult + importDutyResult

    const totalCost =
      auctionPriceCar +
      auctionFeeResult * CoefficientsCurrencyEUR +
      usaUaCarsCommissionResult +
      usaShippingCostResult +
      shippingToUkraineCostResult +
      customsCostResult

    setImportDuty(Math.round(importDutyResult))
    setAuctionValue(auctionPriceCar)
    setExciseTax(Math.round(exciseTaxResult))
    setVat(Math.round(vatResult))
    setBrokerage(Math.round(brokerage))
    setAuctionFee(Math.round(auctionFeeResult * CoefficientsCurrencyEUR))
    setUsaUaCarsCommission(Math.round(usaUaCarsCommissionResult))
    setUsShippingCost(Math.round(usaShippingCostResult))
    setShippingToUkraineCost(Math.round(shippingToUkraineCostResult))
    setOceanShippingCost(Math.round(oceanShippingCostResult))
    setExpeditingCost(Math.round(expeditingCostResult))
    setCarCarrierCost(Math.round(carCarrierCostResult))
    setCustomsCost(Math.round(customsCostResult))
    setSummary(Math.round(totalCost))
  }

  const isFormValid = () => {
    return (
      selectedAuction &&
      engineVolume > 0 &&
      auctionValue > 0 &&
      vehicleType &&
      engineType &&
      (engineType !== 'electric' || (engineType === 'electric' && engineVolume > 0))
    )
  }

  return (
    <div className={styles.calc__block} id="Clearance">
      <div className="container">
        <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className={styles.calc__header}>
          <motion.h2 variants={bottomAnimations} custom={1}>
            {language === 'ua'
              ? 'Калькулятор доставки та розмитнення авто із США в Україну'
              : 'Калькулятор доставки и растаможки авто из США в Украину'}
          </motion.h2>
          <div className={styles.calc__subtitle__pic}>
            <motion.span variants={bottomAnimations} custom={1.2}>
              {language === 'ua'
                ? 'За допомогою нашого онлайн-калькулятора ви можете розрахувати вартість авто із Америки'
                : 'С помощью нашего онлайн-калькулятора вы можете рассчитать стоимость авто из Америки'}
            </motion.span>
            <motion.div variants={leftAnimations} custom={2} className={styles.subtitle__pic}>
              <Image src="/calc/calcCar.png" width={288} height={147} alt="Mustang" />
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

            <div className={styles.input__options}>
              <label htmlFor="currency">{language === 'ua' ? 'Валюта:' : 'Валюта:'}</label>
              <select id="currency" className={styles.select__options} onChange={handleCurrencyChange}>
                <option value="USD">$</option>
                <option value="EUR">€</option>
              </select>
            </div>
            <div className={styles.input_block}>
              <label>
                {language === 'ua'
                  ? `Вартість авто на аукціоні ${selectedCurrency === 'USD' ? '$' : '€'}:`
                  : `Стоимость авто на аукционе ${selectedCurrency === 'USD' ? '$' : '€'}:`}
              </label>
              <input
                className={styles.input__field}
                type="number"
                placeholder={selectedCurrency === 'USD' ? '$5000' : '€5000'}
                onChange={(e) => setAuctionValue(parseInt(e.target.value, 10))}
              />
            </div>

            <div className={styles.input__options}>
              <label htmlFor="auction">{language === 'ua' ? 'Аукціон:' : 'Аукцион:'}</label>
              <select id="auction" className={styles.select__options} onChange={handleAuctionChange}>
                <option value="" disabled selected>
                  {language === 'ua' ? 'Аукціон:' : 'Аукцион:'}
                </option>
                <option value="copart">Copart</option>
                <option value="iaai">IAAI</option>
              </select>
            </div>

            <div className={styles.input__options}>
              <label htmlFor="vehicleType">{language === 'ua' ? 'Тип транспорту:' : 'Тип транспорта:'}</label>
              <select
                id="vehicleType"
                className={styles.select__options}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled selected>
                  {language === 'ua' ? 'Виберіть' : 'Выберите'}
                </option>
                <option value="car">{language === 'ua' ? 'Легкове' : 'Легковой'}</option>
                <option value="SUV">SUV</option>
              </select>
            </div>

            <div className={styles.input__options}>
              <label htmlFor="engineType">{language === 'ua' ? 'Тип двигуна:' : 'Тип двигателя:'}</label>
              <select
                id="engineType"
                className={styles.select__options}
                onChange={(e) => setEngineType(e.target.value)}
              >
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
              <label htmlFor="volume">
                {engineType === 'electric'
                  ? language === 'ua'
                    ? "Об'єм батареї (кВт*год):"
                    : 'Объем батареи (кВт*час):'
                  : language === 'ua'
                  ? "Об'єм двигуна, см³:"
                  : 'Объем двигателя, см³:}{'}
              </label>

              <input
                className={styles.input__field}
                type="number"
                placeholder={
                  engineType === 'electric'
                    ? language === 'ua'
                      ? "Об'єм батареї (кВт*год):"
                      : 'Объем батареи (кВт*час):'
                    : language === 'ua'
                    ? "Об'єм двигуна, см³"
                    : 'Объем двигателя, см³}{'
                }
                onChange={(e) => setEngineVolume(parseInt(e.target.value, 10))}
              />
            </div>

            <div className={styles.input__options}>
              <label htmlFor="carYear">{language === 'ua' ? 'Рік випуску авто:' : 'Год выпуска авто:'}</label>
              <select
                id="carYear"
                className={styles.select__options}
                onChange={(e) => setAgeCar(parseInt(e.target.value, 10))}
              >
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
            <button onClick={calculateCustoms} className={styles.btn_calc} disabled={!isFormValid()}>
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
                <span>
                  {selectedCurrency === 'USD' ? '$' : '€'}
                  {isNaN(auctionValue) ? 0 : auctionValue}
                </span>
              </div>
              <div className={styles.result__inner__block}>
                <h3>{language === 'ua' ? 'Аукціонний збір:' : 'Аукционный сбор:'}</h3>{' '}
                <span>
                  {selectedCurrency === 'USD' ? '$' : '€'}
                  {auctionFee}
                </span>
              </div>
              <div className={styles.result__inner__block}>
                <h3>{language === 'ua' ? 'Комісія USA-UA CARS:' : 'Комиссия USA-UA CARS:'}</h3>
                <span>
                  {selectedCurrency === 'USD' ? '$' : '€'}
                  {usaUaCarsCommission}
                </span>
              </div>
              <div className={styles.result__inner__block}>
                <h3>{language === 'ua' ? 'Доставка по США:' : 'Доставка по США:'}</h3>
                <span>
                  {selectedCurrency === 'USD' ? '$' : '€'}
                  {usShippingCost}
                </span>
              </div>
              <div className={styles.result__inner__block__subPrice}>
                <div className={styles.result__inner__block}>
                  <h3>{language === 'ua' ? 'Доставка в Україну:' : 'Доставка в Украину:'}</h3>
                  <span>
                    {selectedCurrency === 'USD' ? '$' : '€'}
                    {shippingToUkraineCost}
                  </span>
                </div>
                <ul className={styles.result__list}>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Доставка Морем:' : 'Доставка Морем:'}</h5>{' '}
                    <span>
                      {selectedCurrency === 'USD' ? '$' : '€'}
                      {oceanShippingCost}
                    </span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Експедирування:' : 'Экспедирование:'}</h5>{' '}
                    <span>
                      {selectedCurrency === 'USD' ? '$' : '€'}
                      {expeditingCost}
                    </span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>
                      {language === 'ua'
                        ? 'Доставка авто з Клайпеди до Львова:'
                        : 'Доставка авто из Клайпеды до Львова:'}
                    </h5>
                    <span>
                      {selectedCurrency === 'USD' ? '$' : '€'}
                      {carCarrierCost}
                    </span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Брокерські послуги:' : 'Брокерские услуги:'}</h5>{' '}
                    <span>
                      {selectedCurrency === 'USD' ? '$' : '€'}
                      {brokerage}
                    </span>
                  </li>
                </ul>
              </div>

              <div className={styles.result__inner__block__subPrice}>
                <div className={styles.result__inner__block}>
                  <h3>{language === 'ua' ? 'Розмитнення:' : 'Растаможка:'}</h3>{' '}
                  <span>
                    {selectedCurrency === 'USD' ? '$' : '€'}
                    {customsCost}
                  </span>
                </div>
                <ul className={styles.result__list}>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Ввізне мито:' : 'Ввозная пошлина:'}</h5>
                    <span>
                      {selectedCurrency === 'USD' ? '$' : '€'}
                      {importDuty}
                    </span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'Акциз:' : 'Акциз:'}</h5>{' '}
                    <span>
                      {selectedCurrency === 'USD' ? '$' : '€'}
                      {exciseTax}
                    </span>
                  </li>
                  <li className={styles.result__inner__block}>
                    <h5>{language === 'ua' ? 'ПДВ:' : 'НДС:'}</h5>{' '}
                    <span>
                      {selectedCurrency === 'USD' ? '$' : '€'}
                      {vat}
                    </span>
                  </li>
                </ul>

                <hr className={styles.divider} />
                <div className={styles.result__inner__block__last}>
                  <h3>{language === 'ua' ? 'Вартість авто + доставка:' : 'Стоимость авто + доставка:'}</h3>
                  <span>
                    {selectedCurrency === 'USD' ? '$' : '€'}
                    {summary}
                  </span>
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
