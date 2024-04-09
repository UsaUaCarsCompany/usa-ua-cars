import { type SchemaTypeDefinition } from 'sanity'
import { cars } from './schemas/Cars'
import { videoReviews } from './schemas/VideoReviews'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars,videoReviews],
}
