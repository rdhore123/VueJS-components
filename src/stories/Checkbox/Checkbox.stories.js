import Checkbox from "../../components/Checkbox/Checkbox.vue";

export default {
  title: "Data/Checkbox/Basic",
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  }
};

const PlaygroundTemplate = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template:
    '<Checkbox v-bind="args" />',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  components: { Checkbox },
  setup() {
    const args = {
      label: "New label",
      size: "medium",
      invalid: false,
      errorMessage: "Field is required",
      disabled: false,
      id: "fname",
    };
    return { args };
  },
  template:
    '<Checkbox v-bind="args" />',
});

export const Usages = Template.bind({});
