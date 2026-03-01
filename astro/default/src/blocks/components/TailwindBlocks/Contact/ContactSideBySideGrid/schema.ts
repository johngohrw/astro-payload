import type { Block } from "payload";

export const contactSideBySideGridSchema: Block = {
  slug: "contactSideBySideGrid",
  labels: {
    singular: "Contact Side By Side Grid",
    plural: "Contact Side By Side Grids",
  },
  fields: [
    {
      name: "contactHeading",
      type: "text",
      label: "Contact Section Heading",
      defaultValue: "Get in touch",
    },
    {
      name: "contactDescription",
      type: "textarea",
      label: "Contact Section Description",
      defaultValue: "Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.",
    },
    {
      name: "contactCards",
      type: "array",
      label: "Contact Cards",
      defaultValue: [
        { title: "Collaborate", email: "collaborate@example.com", phone: "+1 (555) 905-2345" },
        { title: "Press", email: "press@example.com", phone: "+1 (555) 905-3456" },
        { title: "Join our team", email: "careers@example.com", phone: "+1 (555) 905-4567" },
        { title: "Say hello", email: "hello@example.com", phone: "+1 (555) 905-5678" },
      ],
      fields: [
        { name: "title", type: "text", label: "Title", required: true },
        { name: "email", type: "text", label: "Email", required: true },
        { name: "phone", type: "text", label: "Phone", required: true },
      ],
    },
    {
      name: "locationsHeading",
      type: "text",
      label: "Locations Section Heading",
      defaultValue: "Locations",
    },
    {
      name: "locationsDescription",
      type: "textarea",
      label: "Locations Section Description",
      defaultValue: "Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.",
    },
    {
      name: "locationCards",
      type: "array",
      label: "Location Cards",
      defaultValue: [
        { city: "Los Angeles", addressLine1: "4556 Brendan Ferry", addressLine2: "Los Angeles, CA 90210" },
        { city: "New York", addressLine1: "886 Walter Street", addressLine2: "New York, NY 12345" },
        { city: "Toronto", addressLine1: "7363 Cynthia Pass", addressLine2: "Toronto, ON N3Y 4H8" },
        { city: "Chicago", addressLine1: "726 Mavis Island", addressLine2: "Chicago, IL 60601" },
      ],
      fields: [
        { name: "city", type: "text", label: "City", required: true },
        { name: "addressLine1", type: "text", label: "Address Line 1", required: true },
        { name: "addressLine2", type: "text", label: "Address Line 2", required: true },
      ],
    },
  ],
};
