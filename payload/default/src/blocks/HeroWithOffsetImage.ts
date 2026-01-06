import { Block } from 'payload'

export const HeroWithOffsetImage: Block = {
  slug: 'heroWithOffsetImage',
  labels: {
    singular: 'Hero with Offset Image',
    plural: 'Heroes with Offset Images',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'images',
      type: 'array',
      minRows: 5,
      maxRows: 5, // all 5 images required
      required: true,
      fields: [
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
      ],
    },

    {
      name: 'primaryAction',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'href',
          type: 'text',
        },
      ],
    },

    {
      name: 'secondaryAction',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'href',
          type: 'text',
        },
      ],
    },
  ],
}
