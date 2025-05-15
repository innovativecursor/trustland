import type { CollectionConfig } from 'payload'

const FeaturedProperties: CollectionConfig = {
  slug: 'featured-properties',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'featuredOnHomepage'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          async ({ data, value, req }) => {
            if (data?.project) {
              const projectID = typeof data.project === 'string' ? data.project : data.project?.id
              const project = await req.payload.findByID({
                collection: 'project-overview',
                id: projectID,
              })
              return project?.title || value
            }
            return value
          },
        ],
      },
    },
    {
      label: 'Project',
      name: 'project',
      type: 'relationship',
      relationTo: 'project-overview',
      required: true,
    },
    {
      label: 'Feature on Homepage?',
      name: 'featuredOnHomepage',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      label: 'Custom Feature Tagline (optional)',
      name: 'tagline',
      type: 'text',
    },
    {
      label: 'Priority (optional)',
      name: 'priority',
      type: 'number',
    },
  ],
}

export default FeaturedProperties
