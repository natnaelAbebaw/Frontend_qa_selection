import Input from "../../components/atoms/Input.vue";

export default {
  title: "atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "text" },
    name: { control: "text" },
    placeholder: { control: "text" },
  },
};

export const Default = {
  args: {
    type: "text",
    name: "email",
    placeholder: "Email address",
  },
};
