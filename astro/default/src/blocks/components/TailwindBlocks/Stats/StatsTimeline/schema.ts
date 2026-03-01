import type { Block } from "payload";

export const statsTimelineSchema: Block = {
  slug: "statsTimeline",
  labels: {
    singular: "Stats Timeline",
    plural: "Stats Timelines",
  },
  fields: [
    {
      name: "items",
      type: "array",
      label: "Timeline Items",
      defaultValue: [
        {
          datetime: "2021-08",
          dateLabel: "Aug 2021",
          title: "Founded company",
          description:
            "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
        },
        {
          datetime: "2021-12",
          dateLabel: "Dec 2021",
          title: "Secured $65m in funding",
          description:
            "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
        },
        {
          datetime: "2022-02",
          dateLabel: "Feb 2022",
          title: "Released beta",
          description:
            "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
        },
        {
          datetime: "2022-12",
          dateLabel: "Dec 2022",
          title: "Global launch of product",
          description:
            "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
        },
      ],
      fields: [
        { name: "datetime", type: "text", label: "Datetime (e.g. 2021-08)", required: true },
        { name: "dateLabel", type: "text", label: "Date Label (e.g. Aug 2021)", required: true },
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
      ],
    },
  ],
};
