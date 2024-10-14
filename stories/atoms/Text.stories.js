import Text from "../../components/atoms/Text.vue";

export default {
  title: "atoms/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
      description: "Slot content for the heading",
    },
  },
};

export const Default = {
  args: {
    text: "text description",
  },
};
