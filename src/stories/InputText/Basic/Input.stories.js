import Input from "../../../components/InputText/Input.vue";

export default {
  title: "Data/InputText/Basic",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color", description: "Select BG Color" },
    borderColor: { control: "color", description: "Select Border Color" },
    borderWidth: { control: "text", description: "Select Border Width" },
    rounded: { control: "text", description: "Select rounded corner in px" },
    placeholder: { control: "text", description: "Add placeholder text" },
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
  components: { Input },
  setup() {
    return { args };
  },
  template:
    '<Input v-bind="args" />',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Input },
  // The story's `args` need to be mapped into the template through the `setup()` method and are optional depending on requirement
  setup() {
    const args = {
      label: "New label", // you can add label for inout field
      disabled: false, // true
      id: "fname",
      textColor: "#495057",  // Text color of input field
      backgroundColor: "#fff",
      borderWidth: "1px",
      rounded: "4px",  // border-radius
      borderColor: "#ced4da",
      invalid: false, // true
      errorMessage: "Field is required", // this will show only if  `invalid` is true
      size: "medium",  // it can be small, medium, large
      type: "text", // it can be email, number, etc...
      iconClasses:"fa-solid fa-magnifying-glass", // Font icons class names from library you included in your project
      iconRight: false, // true
      helpText: "",
      placeholder:""
    };
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<Input v-bind="args" />',
});

export const Usages = Template.bind({});
