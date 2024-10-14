import Icon from "../../components/atoms/Icon.vue";

export default {
  title: "atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "text" },
      description: "Slot content for the heading",
    },
  },
};

export const Default = {
  args: {
    icon: "fa-solid fa-envelope",
  },
};
