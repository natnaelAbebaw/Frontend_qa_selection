import { fn } from "@storybook/test";
// import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "../../components/Button.vue";

export default {
  title: "atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    class: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: { onClick: fn() },
};

export const normal = {
  args: {
    class: "btn",
    label: "Button",
  },
};
