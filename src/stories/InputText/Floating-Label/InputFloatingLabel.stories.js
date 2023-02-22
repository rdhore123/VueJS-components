import InputFloatingLabel from "./InputFloatingLabel.vue";

export default {
  title: "Data/InputText/Floating-Label",
  component: InputFloatingLabel,
  argTypes: {
    backgroundColor: { control: "color", description: "Select BG Color" },
    borderColor: { control: "color", description: "Select Border Color" },
    borderWidth: { control: "text", description: "Select Border Width" },
    textColor: { control: "color", description: "Select Text Color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "number"],
    },
    iconClasses: { control: "text", description: "Add icon classes eg. `fa-solid fa-magnifying-glass`" },
  },
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  }
};

const PlaygroundTemplate = (args) => ({
  components: { InputFloatingLabel },
  setup() {
    return { args };
  },
  template:
    '<InputFloatingLabel v-bind="args" />',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { InputFloatingLabel },
  // The story's `args` need to be mapped into the template through the `setup()` method and are optional depending on requirement
  setup() {
    const args = {
      label: "New label",
      disabled: false, // true
      id: "",
      textColor: "",  // Text color of input field
      backgroundColor: "",
      borderWidth: "",
      borderColor: "",
      invalid: false, // true
      errorMessage: "", // this will show only if  `invalid` is true
      size: "",  // it can be small, medium, large
      type: "", // it can be email, number, etc...
      iconClasses:"", // Font icons class names from library you included in your project
      iconRight: false, // true
      helpText: "",
    };
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<InputFloatingLabel v-bind="args" />',
});

export const Usages = Template.bind({});
