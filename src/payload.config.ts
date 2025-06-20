// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ProjectOverview } from './collections/ProjectOverview'
// import FeaturedProperties from './collections/FeaturedProperties'
import icon from '../public/favicon.ico'
import { PropertyType } from './collections/PropertyType'
import { Location } from './collections/Location'
import BuyerInquiry from './collections/BuyerInquiry'
import { Property } from './collections/Property'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' - Trustland Solutions',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: icon.src,
        },
      ],
    },
  },

  collections: [
    Users,
    Media,
    ProjectOverview,
    // FeaturedProperties,
    PropertyType,
    Location,
    BuyerInquiry,
    Property,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
