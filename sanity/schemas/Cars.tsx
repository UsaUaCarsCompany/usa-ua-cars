import { Rule } from 'sanity'

export const cars = {
  name: 'cars',
  title: 'CarsDataBase',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      description:
        'Сюди написати будь яке число головне шоб не повторювались числа,це потрібно для індетифікації елемента і щоб взагалі системі було не важко розріняти елементи,можна використовувати рандомайзер,ось силочка: "https://www.random.org/" :3',
      validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
    },
    {
      name: 'createdAt',
      title: 'Creation Date',
      type: 'datetime',
      description: 'Дата публікації цього елемента,зазвичай має стояти сьогоднішня',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'title',
      title: 'Name of the car',
      type: 'string',
      description: 'Назва машини',
      validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'object',
      fields: [
        {
          name: 'ua',
          title: 'Price in Ukrainian',
          type: 'string',
          description: 'Приклад написання: "від 8 700 $"',
          validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
        },
        {
          name: 'ru',
          title: 'Price in russian',
          type: 'string',
          description: 'Приклад написання: "от 8 700 $"',
          validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Cюди завантажувати фотогрфію автомобіля',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alt це можна сказати опис картинки яку ви вставили,приклад запису: "Tesla X 2016"',
          options: {
            isHighlighted: true,
          },
          validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
        },
      ],
    },
  ],
}
