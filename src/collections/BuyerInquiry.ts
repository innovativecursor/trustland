import { CollectionConfig } from 'payload'

export const BuyerInquiry: CollectionConfig = {
  slug: 'buyer-inquiry',
  labels: {
    singular: 'Buyer Inquiry',
    plural: 'Buyer Inquiries',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'budget', 'minSize', 'createdAt'],
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
    },
    {
      name: 'budget',
      type: 'number',
      label: 'Budget (PHP)',
      required: false, // changed from true
    },
    {
      name: 'minSize',
      type: 'number',
      label: 'Minimum Size (Sq ft)',
      required: false, // changed from true
    },
    {
      name: 'howToAddress',
      type: 'select',
      label: 'How should we address you?',
      required: false, // changed from true
      options: [
        { label: 'Mr.', value: 'mr' },
        { label: 'Ms.', value: 'ms' },
        { label: 'Mrs.', value: 'mrs' },
        { label: 'Dr.', value: 'dr' },
        { label: 'Mx.', value: 'mx' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'personnelRole',
      type: 'select',
      label: 'Personnel Role',
      required: false, // changed from true
      options: [
        { label: 'Buyer', value: 'buyer' },
        { label: 'Agent', value: 'agent' },
        { label: 'Investor', value: 'investor' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      required: false,
    },
    {
      name: 'serviceType',
      type: 'text',
      label: 'Service Type',
      required: false,
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      required: false,
    },
    {
      name: 'source',
      type: 'text',
      label: 'Form Source',
      required: false,
    },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Submitted At',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [({ value }) => value || new Date().toISOString()],
      },
    },
  ],
}

export default BuyerInquiry
