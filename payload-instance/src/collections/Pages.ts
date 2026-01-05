import { allBlocks } from '@/blocks/_allBlocks'
import { ContactSimpleFourCol } from '@/blocks/ContactSimpleFourColBlock'
import { FeatSimpleThreeCol } from '@/blocks/FeatSimpleThreeColBlock'
import { HeroWithOffsetImage } from '@/blocks/HeroWithOffsetImage'
import { ImageGrid } from '@/blocks/ImageGrid'
import { RichText } from '@/blocks/RichText'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // public read for build-time fetch
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'includeInNav',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'contentBlocks',
      type: 'blocks',
      blocks: allBlocks,
    },
  ],
}
