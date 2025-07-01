import type { CollectionConfig } from 'payload'

export const PropertyType: CollectionConfig = {
  slug: 'propertyType',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
  },
  fields: [
    {
      label: 'Property Type Name',
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}