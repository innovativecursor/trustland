import type { CollectionConfig } from 'payload'

export const PropertyType: CollectionConfig = {
  slug: 'propertyType',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'property_type',
  },
  fields: [
    {
      label: 'Property Type',
      name: 'property_type',
      type: 'text',
      required: true,
    },
  ],
}
