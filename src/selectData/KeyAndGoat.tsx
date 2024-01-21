export type GoatProps = {
  id: number
  name: {
    ua: string
    ru: string
  }
}

export const Goat: GoatProps[] = [
  { id: 3421, name: { ua: 'Седан', ru: 'Седан' } },
  { id: 12351, name: { ua: 'Купе', ru: 'Купе' } },
  { id: 2624, name: { ua: 'Мінівен', ru: 'Минивэн' } },
  { id: 9576, name: { ua: 'Позашляховик', ru: 'Внедорожник' } },
  { id: 434, name: { ua: 'Пікап', ru: 'Пикап' } },
  { id: 745, name: { ua: 'Універсал', ru: 'Универсал' } },
  { id: 878, name: { ua: 'Хетчбек', ru: 'Хэтчбек' } },
]

export type KeyProps = {
  id: number
  range: {
    ua: string
    ru: string
  }
}

export const Key: KeyProps[] = [
  { id: 1123, range: { ua: 'Від 7 000$ до 10 000$', ru: 'От 7 000$ до 10 000$' } },
  { id: 2255, range: { ua: 'Від 10 000$ до 15 000$', ru: 'От 10 000$ до 15 000$' } },
  { id: 7788, range: { ua: 'Від 15 000$ до 20 000$', ru: 'От 15 000$ до 20 000$' } },
  { id: 9923, range: { ua: 'Від 20 000$ до 25 000$', ru: 'От 20 000$ до 25 000$' } },
  { id: 1238, range: { ua: 'Від 25 000$ до 30 000$', ru: 'От 25 000$ до 30 000$' } },
  { id: 1237, range: { ua: 'Від 30 000$ до 40 000$', ru: 'От 30 000$ до 40 000$' } },
  { id: 1234, range: { ua: 'Від 40 000$ до 50 000$', ru: 'От 40 000$ до 50 000$' } },
  { id: 1239, range: { ua: 'Вище 50 000$', ru: 'Выше 50 000$' } },
]
