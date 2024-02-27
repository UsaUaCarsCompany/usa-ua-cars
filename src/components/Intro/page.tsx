'use client'
import clsx from 'clsx'
import styles from './intro.module.sass'
import { CarsSlider } from './SliderCars'
import { useState } from 'react'
import { OptionsList, OptionsListData } from '../../selectData/Brands'
import { YearFrom, YearFromProps } from '@/selectData/YearFrom'
import { YearTo, YearToProps } from '@/selectData/YearTo'
import { useLanguage } from '@/ContextLanguage/LanguageContext'
import { motion } from 'framer-motion'
import { leftAnimations, rightAnimations } from '@/animations/page'

const Intro = () => {
  const [selectedWebsite, setSelectedWebsite] = useState('copart')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYearFrom, setSelectedYearFrom] = useState('2000')
  const [selectedYearTo, setSelectedYearTo] = useState('2018')
  const { language, switchLanguage } = useLanguage()

  const chooseBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedBrand(selectedValue)
    setSelectedModel('')
    setSelectedYearFrom('')
    setSelectedYearTo('')
  }

  const chooseYearFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedYearFrom(selectedValue)
  }

  const chooseWebsite = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedWebsite(selectedValue)
  }

  const chooseYearTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedYearTo(selectedValue)
  }

  const chooseModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedModel(selectedValue)
  }

  const redirectToCopart = () => {
    // Створити URL-адресу на основі вибраних даних
    const baseUrl = 'https://www.copart.com/lotSearchResults'
    const queryParams = [
      'free=true',
      `query=${encodeURIComponent(`${selectedBrand} ${selectedModel} ${selectedYearFrom}`)}`,
    ]

    const url = `${baseUrl}?${queryParams.join('&')}`

    // Відкрийти нове вікно з веб-сайтом Copart
    window.open(url, '_blank')
  }

  const redirectToIaai = () => {
    // Створіти URL-адресу на основі вибраних даних
    const baseUrl = 'https://www.iaai.com/Search'
    const queryParams = [
      `Keyword=${encodeURIComponent(`${selectedBrand} ${selectedModel} ${selectedYearFrom}-${selectedYearTo}`)}`,
    ]

    const url = `${baseUrl}?${queryParams.join('&')}`

    // Відкрити нове вікно з веб-сайтом IAAI
    window.open(url, '_blank')
  }

  const handleSearch = () => {
    if (selectedWebsite === 'copart') {
      redirectToCopart()
    } else if (selectedWebsite === 'iaai') {
      redirectToIaai()
    }
  }

  // Фільтрування моделі по маці машини
  const filteredBrand = OptionsList.find((brand) => brand.name === selectedBrand)
  const filteredModels = filteredBrand ? filteredBrand.models || [] : []

  return (
    <>
      <div className={styles.wrapp}>
        <motion.section
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className={styles.intro}
          id="main"
        >
          <div className="container">
            <div className={styles.intro__inner}>
              <motion.div variants={rightAnimations} custom={0.1} className={styles.inner__searching__block}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch()
                  }}
                  className={styles.searching__content}
                >
                  <div className={styles.input__options}>
                    <select
                      onChange={chooseWebsite}
                      className={styles.select__options}
                      name="car-auction"
                      id="car-auction"
                    >
                      <option value="copart">
                        {language === 'ua' ? 'Аукціон - www.copart.com' : 'Аукцион - www.copart.com'}
                      </option>
                      <option value="iaai">
                        {language === 'ua' ? 'Аукціон - www.iaai.com' : 'Аукцион - www.iaai.com'}
                      </option>
                    </select>
                  </div>
                  <div className={styles.input__options}>
                    <select onChange={chooseBrand} className={styles.select__options} name="brand" id="id_brand">
                      <option value="" selected={true} disabled>
                        Марка
                      </option>
                      {OptionsList.map(({ ...brand }: OptionsListData) => (
                        <option key={brand.id} value={brand.name}>
                          {brand.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.input__options}>
                    <select
                      onChange={chooseModel}
                      className={styles.select__options}
                      name="meta_model"
                      id="id_meta_model"
                    >
                      <option value="" selected={!selectedModel} disabled>
                        Модель
                      </option>
                      {filteredModels.map((modelName, index) => (
                        <option key={index} value={modelName}>
                          {modelName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.years}>
                    <div className={styles.input__options}>
                      <select
                        onChange={chooseYearFrom}
                        className={styles.select__options}
                        name="meta_year_from"
                        id="id_year_from"
                      >
                        <option value="2000" selected={!selectedYearFrom}>
                          {language === 'ua' ? 'Рік випуску від' : 'Год выпуска от'}
                        </option>
                        {YearFrom.map(({ ...year }: YearFromProps) => (
                          <option key={year.id} value={year.value}>
                            {year.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.input__options}>
                      <select
                        onChange={chooseYearTo}
                        className={styles.select__options}
                        name="meta_year_to"
                        id="id_year_to"
                      >
                        <option value="2018" selected={!selectedYearFrom}>
                          {language === 'ua' ? 'Рік випуску до' : 'Год выпуска до'}
                        </option>
                        {YearTo.map(({ ...year }: YearToProps) => (
                          <option key={year.id} value={year.value}>
                            {year.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className={styles.btn_search}>
                    <span>{language === 'ua' ? 'ПОШУК АВТО' : 'ПОИСК АВТО'}</span>
                  </button>
                </form>
              </motion.div>
              <motion.div variants={leftAnimations} custom={0.2} className={styles.slider__cars}>
                <CarsSlider />
              </motion.div>
            </div>
          </div>
        </motion.section>
        <div className={styles.arrow_down}></div>
      </div>
    </>
  )
}
export default Intro
