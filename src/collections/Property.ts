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

export const Property: CollectionConfig = {
  slug: 'property',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'prop_name',
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
            const source = value || data?.prop_name || ''
            return slugify(source)
          },
        ],
      },
    },
    {
      label: 'Name of the Property',
      name: 'prop_name',
      type: 'text',
      required: true,
    },
    {
      label: 'Property Price',
      name: 'prop_price',
      type: 'number',
      defaultValue: 100000,
      required: true,
    },
    {
      label: 'Location of the Property (City)',
      name: 'prop_location',
      type: 'relationship',
      relationTo: 'location',
      required: true,
    },
    {
      label: 'Property Images',
      name: 'images',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Ensure you have a media collection
          required: true,
        },
      ],
    },
    {
      label: 'Description',
      name: 'prop_desc',
      type: 'textarea',
      defaultValue: '',
      required: false,
    },
    {
      label: 'Bedrooms',
      name: 'bedrooms',
      type: 'number',
      required: false,
    },
    {
      label: 'Home Interior -  Bedroom description',
      name: 'home_interior_bedrooms',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Bathrooms',
      name: 'bathrooms',
      type: 'number',
      required: false,
    },
    {
      label: 'Home Interior - Bathroom description',
      name: 'home_interior_bathroom',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Home Interior - Kitchen description',
      name: 'home_interior_kitchen',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Home Interior - Dining Area description',
      name: 'home_interior_dining',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Home Interior - Living Room description',
      name: 'home_interior_Living',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Garages',
      name: 'garages',
      type: 'number',
      required: false,
    },
    {
      label: 'Home Exterior - Garage description',
      name: 'home_exterior_garage',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Size of the Property in Sq Ft',
      name: 'prop_size',
      type: 'number',
      required: true,
    },
    {
      label: 'Home Exterior - Balcony description',
      name: 'home_exterior_balcony',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Home Exterior - Accessibility description (Example: Close to Malls...)',
      name: 'home_exterior_accessibility',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Home Exterior - Backyard description (Example: Close to Malls...)',
      name: 'home_exterior_backyard',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Home Exterior - Terrace description (Example: Description about rooftop)',
      name: 'home_exterior_terrace',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Property Type',
      name: 'prop_type',
      type: 'relationship',
      relationTo: 'propertyType',
      required: true,
    },
    {
      label: 'Size of the Total lot Area in Sq Ft',
      name: 'lot_area',
      type: 'number',
      required: false,
    },
    {
      label: 'Destination (Pin Location)',
      name: 'prop_destination',
      type: 'text',
      required: true,
    },
    {
      label: 'Property Status',
      name: 'prop_status',
      type: 'text',
      required: false,
    },
    {
      label: 'Ownership',
      name: 'prop_ownership',
      type: 'text',
      required: false,
    },
    {
      label: 'Year Built',
      name: 'prop_year',
      type: 'date',
      required: true,
    },
    {
      label: 'Parking Space',
      name: 'prop_pkSpace',
      type: 'text',
      required: false,
    },
    {
      label: 'Furnishing Type (semi, completely furnished)',
      name: 'prop_furnishing',
      type: 'text',
      required: false,
    },
    {
      label: 'Discount Description (if applicable)',
      name: 'prop_discount',
      type: 'text',
      required: false,
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
      label: 'Gated Community with 24/7 Security',
      name: 'feature_gated',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Spacious living and dining areas',
      name: 'feature_spacious',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Modern kitchen with built-in cabinets',
      name: 'feature_kitchen_cabinets',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Master bedroom with en-suite bathroom',
      name: 'feature_bedroom',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Covered car garage',
      name: 'feature_covered_garage',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Landscaped front yard',
      name: 'feature_frontyard',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Proximity to schools, malls, and hospitals',
      name: 'feature_proximity',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Fiber-optic internet ready',
      name: 'feature_internet',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Nearby playground and clubhouse',
      name: 'feature_play_clubhouse',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
    {
      label: 'Pet-friendly community',
      name: 'feature_pet_friendly',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
  ],
}
