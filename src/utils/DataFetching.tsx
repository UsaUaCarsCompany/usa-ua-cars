import { client } from '../../sanity/lib/client'

export async function getCars() {
  const query = `
  *[_type == "cars"] | order(createdAt desc) {
    id,
    title,
    "image": {
      "alt": image.alt,
      "_ref": image.asset._ref
    },
    price
  }
  `
  const data = await client.fetch(query)

  return data
}

export async function getVideos() {
  const query = `
  *[_type == "videoReview"] | order(createdAt desc) {
    id,
    title,
    subtitle,
    "preview": {
      "alt": preview.alt,
      "_ref": preview.asset._ref
    },
    urlVideo
  }
  `
  const data = await client.fetch(query)

  return data
}
