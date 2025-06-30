import { CollectionConfig } from 'payload'

const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service Card',
    plural: 'Service Cards',
  },
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      required: true,
    },
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'numberImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'points',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}

export default Services
