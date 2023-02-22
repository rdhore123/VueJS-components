import Select from "./Select.vue";

export default {
  title: "Data/Select/Basic",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color", description: "Select BG Color" },
    borderColor: { control: "color", description: "Select Border Color" },
    borderWidth: { control: "text", description: "Select Border Width" },
    rounded: { control: "text", description: "Select rounded corner in px" },
    textColor: { control: "color", description: "Select Text Color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    iconClasses: { control: "text", description: "Add icon classes eg. `fa-solid fa-chevron-down`" },
  },
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  }
};

const PlaygroundTemplate = (args) => ({
  components: { Select },
  setup() {
    const args = {
      selectDropdownOptions: ["Option 1", "Option 2"]
    };
    return { args };
  },
  template:
    '<Select v-bind="args">Choose Option</Select>',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Select },
  // The story's `args` need to be mapped into the template through the `setup()` method and are optional depending on requirement
  setup() {
    const args = {
      label: "New label",
      disabled: false, // true
      id: "fname",
      textColor: "#495057",  // Text color of Select field
      backgroundColor: "#fff",
      borderWidth: "1px",
      rounded: "4px",  // border-radius
      borderColor: "#ced4da",
      invalid: false, // true
      errorMessage: "Field is required", // this will show only if  `invalid` is true
      size: "medium",  // it can be small, medium, large
      iconClasses:"fa-solid fa-chevron-down", // Font icons class names from library you included in your project
      helpText: "",
      selectDropdownOptions: ["Option 1", "Option 2"]
    };
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<Select v-bind="args">Choose Option</Select>',
});

export const Usages = Template.bind({});
