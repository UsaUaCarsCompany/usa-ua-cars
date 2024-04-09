import { Rule } from 'sanity'

export const videoReviews = {
  name: 'videoReview',
  title: 'VideoReviewsDataBase',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Сюди написати будь яке число головне шоб не повторювались числа',
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
      name: 'preview',
      title: 'Preview Image',
      type: 'image',
      description: 'Прев`юшка відео',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description:
            'Alt це можна сказати опис картинки яку ви вставили,приклад запису: "Покупка клієнта Tesla X 2016"',
          options: {
            isHighlighted: true,
          },
          validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
        },
      ],
    },
    {
      name: 'urlVideo',
      title: 'Video URL',
      type: 'url',
      description: 'Силка до відео в нашому випадку це силка до відео з Ютуба',
      validation: (Rule: Rule) => Rule.required().uri().error('Please enter a valid URL'),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the video review',
      validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'object',
      fields: [
        {
          name: 'subtitle_ua',
          title: 'Subtitle (Ukrainian)',
          type: 'string',
          description: 'Підзаголовок до відео українською',
          validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
        },
        {
          name: 'subtitle_ru',
          title: 'Subtitle (Russian)',
          type: 'string',
          description: 'Підзаголовок до відео російською',
          validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
        },
      ],
      validation: (Rule: Rule) => Rule.required().error("Обов'язкове поле для введення"),
    },
  ],
}
