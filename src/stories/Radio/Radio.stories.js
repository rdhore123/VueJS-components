import Radio from "../../components/Radio/Radio.vue";

export default {
  title: "Data/Radio/Basic",
  component: Radio,
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
  components: { Radio },
  setup() {
    return { args };
  },
  template:
    '<Radio v-bind="args" />',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  components: { Radio },
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
    '<Radio v-bind="args" />',
});

export const Usages = Template.bind({});
