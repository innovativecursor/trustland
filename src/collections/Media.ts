import type { CollectionConfig } from 'payload'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
  },
  upload: {
    // staticDir: path.resolve('/var/www/trustland-media'), // For linux
    // staticDir: 'media', // Folder where files will be stored
    staticDir: path.resolve('/Users/datatype/Downloads/'), // For MacOS
    mimeTypes: ['image/*', 'video/*'], // Allow images & videos
  },
  fields: [],
}
