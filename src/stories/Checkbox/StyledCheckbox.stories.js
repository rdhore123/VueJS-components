import StyledCheckbox from "../../components/Checkbox/StyledCheckbox.vue";

export default {
  title: "Data/Checkbox/Styled",
  component: StyledCheckbox,
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
  components: { StyledCheckbox },
  setup() {
    return { args };
  },
  template:
    '<StyledCheckbox v-bind="args" />',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  components: { StyledCheckbox },
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
    '<StyledCheckbox v-bind="args" />',
});

export const Usages = Template.bind({});
