import type { CollectionConfig } from 'payload'

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

export const ProjectOverview: CollectionConfig = {
  slug: 'project-overview',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      label: 'Slug (Mandatory for page generation and SEO)',
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            const source = value || data?.title || ''
            return slugify(source)
          },
        ],
      },
    },

    {
      label: 'Gallery Images',
      name: 'gallery_images',
      type: 'upload',
      relationTo: 'media',
      required: false,
      minRows: 5,
      maxRows: 5,
      admin: {
        description: 'Upload property images (required 5 images)',
      },
      hasMany: true,
    },
    {
      label: 'Promo Video',
      name: 'promo_video',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Upload a promotional video for the project',
      },
    },
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Overview',
      name: 'overview',
      type: 'textarea',
      required: true,
    },
    {
      label: 'Property Details',
      name: 'property_details',
      type: 'group',
      fields: [
        {
          label: 'Property Type',
          name: 'property_type',
          type: 'text',
          required: true,
        },
        {
          label: 'Floor Area',
          name: 'floor_area',
          type: 'text',
          required: false,
        },
        {
          label: 'Unit Types',
          name: 'unit_types',
          type: 'text',
          required: false,
        },
        {
          label: 'Price',
          name: 'price',
          type: 'text',
          required: true,
        },
        {
          label: 'Property Status',
          name: 'property_status',
          type: 'text',
          required: false,
        },
        {
          label: 'Location',
          name: 'location',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      label: 'Features & Amenities',
      name: 'features_amenities',
      type: 'group',
      fields: [
        {
          label: 'Nature-Inspired Living',
          name: 'nature_living',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'point',
              label: 'Point',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Building & Unit Features',
          name: 'building_unit_features',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'point',
              label: 'Point',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Recreational Facilities',
          name: 'recreational_facilities',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'point',
              label: 'Point',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Convenience & Accessibility',
          name: 'convenience_accessibility',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'point',
              label: 'Point',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },

    {
      label: 'Pricing & Payment Plans',
      name: 'pricing_payment_plans',
      type: 'group',
      fields: [
        {
          label: 'Price Range',
          name: 'price_range',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'point',
              label: 'Point',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Flexible Payment Options',
          name: 'flexible_payment_options',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'point',
              label: 'Point',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      label: 'Location Highlights',
      name: 'location_highlights',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'point',
          label: 'Point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      label: 'Display Card Data',
      name: 'card_data',
      type: 'group',
      admin: {
        description: 'Information used for the property card display',
      },
      fields: [
        {
          label: 'Beds',
          name: 'beds',
          type: 'number',
          required: false,
          admin: {
            description: 'Number of bedrooms',
          },
        },
        {
          label: 'Baths',
          name: 'baths',
          type: 'number',
          required: false,
          admin: {
            description: 'Number of bathrooms',
          },
        },
        {
          label: 'Area (in sqm)',
          name: 'area',
          type: 'number',
          required: false,
          admin: {
            description: 'Floor area in square meters',
          },
        },
        {
          label: 'Primary Image',
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Image to be shown in property card',
          },
        },
        {
          label: 'Badges',
          name: 'badges',
          type: 'array',
          required: false,
          admin: {
            description: 'e.g. FOR SALE, FEATURED, etc.',
          },
          fields: [
            {
              name: 'badge',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      label: 'Feature on Landing Page?',
      name: 'prop_featured',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'feature on Offers Section',
      name: 'prop_offer',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Offer Discount Text',
      name: 'offer_discount_text',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar',
        description: 'Enter the discount offer text (e.g., "10% OFF for early buyers"). Optional.',
        condition: (data) => data?.prop_offer === true,
      },
    },
  ],
}
