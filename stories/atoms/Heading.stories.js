import Heading from "../../components/atoms/Heading.vue";

export default {
  title: "atoms/Heading",
  component: Heading,
};

// Example of creating stories
export const Default = {
  args: {
    level: "h1",
    text: "Default Heading Content",
  },
};
