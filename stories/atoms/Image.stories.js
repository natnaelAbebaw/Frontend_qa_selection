import Image from "../../components/atoms/Image.vue";

export default {
  title: "atoms/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    src: {
      control: { type: "text" },
    },
  },
};

export const Default = {
  args: {
    type: "md",
    src: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png",
  },
};
