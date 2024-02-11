'use client'
import { AgeCars } from '@/selectData/AgeCars'
import React, { useState } from 'react'

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
    <div>
      <h1>Калькулятор доставки та розмитнення авто з США в Україну</h1>
      <div>
        <label>
          Вартість авто на аукціоні $:
          <input type="number" placeholder="$5000" onChange={(e) => setAuctionValue(parseInt(e.target.value, 10))} />
        </label>
      </div>

      <div>
        <label>
          Аукціон:
          <select onChange={handleAuctionChange}>
            <option value="" disabled selected>
              Аукціон
            </option>
            <option value="copart">Copart</option>
            <option value="iaai">IAAI</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Тип транспорту:
          <select onChange={(e) => setVehicleType(e.target.value)}>
            <option value="" disabled selected>
              Виберіть
            </option>
            <option value="car">Авто</option>
            <option value="SUV">SUV</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Тип двигуна:
          <select onChange={(e) => setEngineType(e.target.value)}>
            <option value="" disabled selected>
              Виберіть
            </option>
            <option value="petrol">Бензин/Газ</option>
            <option value="diesel">Дизель</option>
            <option value="hybrid">Гібрид</option>
            <option value="electric">Електро</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Об'єм двигуна:
          <input
            type="number"
            placeholder="Об'єм двигуна, см³"
            onChange={(e) => setEngineVolume(parseInt(e.target.value, 10))}
          />
        </label>
      </div>

      <div>
        <label>
          Рік випуску авто:
          <select onChange={(e) => setAgeCar(parseInt(e.target.value, 10))}>
            <option value="" disabled selected>
              Виберіть
            </option>
            {AgeCars.map((car) => (
              <option key={car.id} value={car.value}>
                {car.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={calculateCustoms}>Calculate Customs</button>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <h3>Вартість вашого авто на аукціоні США: ${auctionValue}</h3>
        <h3>Аукціонний збір: ${auctionFee}</h3>
        <h3>Комісія USA-UA CARS: ${usaUaCarsCommission}</h3>
        <h3>Доставка по США: ${usShippingCost}</h3>
        <h3>Доставка в Україну: ${shippingToUkraineCost}</h3>
        <ul style={{ marginLeft: '20px' }}>
          <li>Доставка Морем: ${oceanShippingCost}</li>
          <li>Експедирування: ${expeditingCost}</li>
          <li>Доставка авто з Клайпеди до Львова: ${carCarrierCost}</li>
        </ul>

        <h3>Акциз: ${exciseTax}</h3>
        <h3>ПДВ: ${vat}</h3>
        <h3>Брокерські послуги: ${brokerage}</h3>
        <h3>Загальна вартість мита: ${customsCost}</h3>

        <h3>Вартість авто + доставка: ${summary}</h3>
      </div>
    </div>
  )
}

export default CarCustomsCalculator
