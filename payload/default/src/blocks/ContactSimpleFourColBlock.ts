import { Block } from 'payload'

export const ContactSimpleFourCol: Block = {
  slug: 'contactSimpleFourCol',
  labels: {
    singular: 'Contact – Simple 4 Column',
    plural: 'Contact – Simple 4 Columns',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
    },
    {
      name: 'offices',
      label: 'Columns',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Office Name',
          required: true,
        },
        {
          name: 'lines',
          label: 'Address Lines',
          type: 'array',
          minRows: 1,
          maxRows: 4,
          fields: [
            {
              name: 'line',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
