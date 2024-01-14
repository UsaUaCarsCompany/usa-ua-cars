export type GoatProps = {
  id: number
  name: string
}

export const Goat: GoatProps[] = [
  { id: 3421, name: 'Седан' },
  { id: 12351, name: 'Купе' },
  { id: 2624, name: 'Мінівен' },
  { id: 9576, name: 'Позашляховик' },
  { id: 434, name: 'Пікап' },
  { id: 745, name: 'Універсал' },
  { id: 878, name: 'Хетчбек' },
]

export type KeyProps = {
  id: number
  range: string
}

export const Key: KeyProps[] = [
  { id: 1123, range: 'Від 7 000$ до 10 000$' },
  { id: 2255, range: 'Від 10 000$ до 15 000$' },
  { id: 7788, range: 'Від 15 000$ до 20 000$' },
  { id: 9923, range: 'Від 20 000$ до 25 000$' },
  { id: 1238, range: 'Від 25 000$ до 30 000$' },
  { id: 1237, range: 'Від 30 000$ до 40 000$' },
  { id: 1234, range: 'Від 40 000$ до 50 000$' },
  { id: 1239, range: 'Вище 50 000$' },
]
