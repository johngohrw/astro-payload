import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'thumb', width: 400 },
      { name: 'medium', width: 800 },
      { name: 'large', width: 1600 },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
