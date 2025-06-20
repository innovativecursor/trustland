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
      relationTo: 'media', // this should match your media collection slug
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
  ],
}
