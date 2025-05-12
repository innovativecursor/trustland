import { upload } from 'node_modules/payload/dist/fields/validations'
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
    // {
    //   label: 'Property Images',
    //   name: 'images',
    //   type: 'upload',
    //   relationTo: 'media',
    //   required: true,
    // },
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
  ],
  upload: true,
}
