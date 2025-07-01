// collections/discount.ts
import { CollectionConfig } from 'payload'

const Discount: CollectionConfig = {
  slug: 'discount',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'percentage'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'label',
      label: 'Discount Label',
      type: 'text',
      required: true,
      defaultValue: 'Perfect House Discount',
    },
    {
      name: 'percentage',
      label: 'Discount Percentage',
      type: 'text', // or 'number' if you prefer
      required: true,
      defaultValue: '15',
    },
  ],
}

export default Discount
