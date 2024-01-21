export type HeaderLinksProps = {
  id: number
  nameUa: string
  nameRu: string
  href: string
  index: number
}

export const HeaderLinks: HeaderLinksProps[] = [
  {
    id: 2324,
    nameUa: 'Головна',
    nameRu: 'Главная',
    href: 'main',
    index: 0.8,
  },

  {
    id: 2523,
    nameUa: 'Як ми працюємо',
    nameRu: 'Как мы работаем',
    href: 'howWeWork',
    index: 1,
  },
  {
    id: 76481,
    nameUa: 'Популярне',
    nameRu: 'Популярное',
    href: 'Popular',
    index: 1.2,
  },

  {
    id: 7658,
    nameUa: 'Розмитнення',
    nameRu: 'Растаможка',
    href: 'Clearance',
    index: 1.2,
  },
  {
    id: 989,
    nameUa: 'FAQ',
    nameRu: 'FAQ',
    href: 'faq',
    index: 1.2,
  },
]
