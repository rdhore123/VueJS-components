import StyledRadio from "../../components/Radio/StyledRadio.vue";

export default {
  title: "Data/Radio/Styled",
  component: StyledRadio,
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
  components: { StyledRadio },
  setup() {
    return { args };
  },
  template:
    '<StyledRadio v-bind="args" />',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  components: { StyledRadio },
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
    '<StyledRadio v-bind="args" />',
});

export const Usages = Template.bind({});
