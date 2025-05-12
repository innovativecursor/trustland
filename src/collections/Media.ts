import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
  },
  upload: {
    staticDir: 'media', // Folder where files will be stored
    mimeTypes: ['image/*', 'video/*'], // Allow images & videos
  },
  fields: [],
}
