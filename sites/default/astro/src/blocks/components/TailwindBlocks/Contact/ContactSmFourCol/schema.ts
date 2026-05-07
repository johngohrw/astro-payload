import type { Block } from "payload";

export const contactSmFourColSchema: Block = {
  slug: "contactSmFourCol",
  labels: {
    singular: "Contact Sm Four Col",
    plural: "Contact Sm Four Cols",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Our offices",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    },
    {
      name: "offices",
      type: "array",
      label: "Offices",
      defaultValue: [
        { city: "Los Angeles", addressLine1: "4556 Brendan Ferry", addressLine2: "Los Angeles, CA 90210" },
        { city: "New York", addressLine1: "886 Walter Street", addressLine2: "New York, NY 12345" },
        { city: "Toronto", addressLine1: "7363 Cynthia Pass", addressLine2: "Toronto, ON N3Y 4H8" },
        { city: "London", addressLine1: "114 Cobble Lane", addressLine2: "London N1 2EF" },
      ],
      fields: [
        { name: "city", type: "text", label: "City", required: true },
        { name: "addressLine1", type: "text", label: "Address Line 1", required: true },
        { name: "addressLine2", type: "text", label: "Address Line 2", required: true },
      ],
    },
  ],
};
