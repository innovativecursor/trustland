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
<<<<<<< HEAD
import { ProjectOverview } from './collections/ProjectOverview'
import FeaturedProperties from './collections/FeaturedProperties'
import icon from '../public/favicon.ico'
import { PropertyType } from './collections/PropertyType'
import { Location } from './collections/Location'
=======
import { Property } from './collections/Property'
import { PropertyType } from './collections/PropertyType'
import ContactUs from './collections/ContactUs'
import { Location } from './collections/Location'
import { Contact } from './globals/Contact'

>>>>>>> refs/remotes/origin/master
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' - Paul Balita Realty Services',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: icon.src,
        },
      ],
    },
  },
<<<<<<< HEAD

  collections: [Users, Media, ProjectOverview, FeaturedProperties, PropertyType, Location],
=======
  collections: [Property, PropertyType, ContactUs, Location, Users, Media],
  globals: [Contact],
>>>>>>> refs/remotes/origin/master
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
