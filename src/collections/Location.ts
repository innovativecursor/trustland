import type { CollectionConfig } from 'payload'

export const Location: CollectionConfig = {
  slug: 'location',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'location_city',
  },
  fields: [
    {
      label: 'City Name',
      name: 'location_city',
      type: 'text',
      required: true,
    },
    {
      label: 'Name of the Province',
      name: 'location_province',
      type: 'text',
      required: true,
    },
    {
      label: 'Location Image',
      name: 'location_image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
