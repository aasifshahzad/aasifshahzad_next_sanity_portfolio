import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project_schema'
import page from './schemas/page-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project,page],
}
