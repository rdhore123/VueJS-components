import StyledCheckbox from "./StyledCheckbox.vue";

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
  // Components used in your story `template` are defined in the `components` object
  components: { StyledCheckbox },
  // The story's `args` need to be mapped into the template through the `setup()` method and are optional depending on requirement
  setup() {
    const args = {
      label: "New label",
      disabled: false, // true
      id: "fname",
      invalid: false, // true
      errorMessage: "Field is required", // this will show only if  `invalid` is true
      size: "medium",  // it can be small, medium, large
      placeholder: ""
    };
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<StyledCheckbox v-bind="args" />',
});

export const Usages = Template.bind({});
