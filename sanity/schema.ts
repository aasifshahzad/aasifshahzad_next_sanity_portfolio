import { type SchemaTypeDefinition } from 'sanity'
import project from './project_schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
}
