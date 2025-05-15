import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Contact Phone Number',
      name: 'phone_number',
      type: 'number',
      required: true,
    },
    {
      label: 'Contact Email Address',
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      label: 'Contact Address',
      name: 'address',
      type: 'text',
      required: true,
    },
  ],
}
