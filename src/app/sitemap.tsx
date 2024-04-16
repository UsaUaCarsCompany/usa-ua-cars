import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://www.usa-ua-cars.com/',
      lastModified: new Date(),
    },
  ]
}
