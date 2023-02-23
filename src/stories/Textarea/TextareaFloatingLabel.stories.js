import TextareaFloatingLabel from "../../components/Textarea/TextareaFloatingLabel.vue";

export default {
  title: "Data/Textarea/Floating-Label",
  component: TextareaFloatingLabel,
  argTypes: {
    backgroundColor: { control: "color", description: "Select BG Color" },
    borderColor: { control: "color", description: "Select Border Color" },
    borderWidth: { control: "text", description: "Select Border Width" },
    rounded: { control: "text", description: "Select rounded corner in px" },
    characterLimit: { control: "text", description: "Select character limit" },
    placeholder: { control: "text", description: "Add placeholder text" },
    textColor: { control: "color", description: "Select Text Color" },
    rows: { control: "text", description: "Select number of rows" },
    iconClasses: { control: "text", description: "Add icon classes eg. `fa-solid fa-magnifying-glass`" },
    resize: {
      control: { type: "select" },
      options: ["auto", "both", "vertical", "horizontal", "none"],
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
  components: { TextareaFloatingLabel },
  setup() {
    return { args };
  },
  template:
    '<TextareaFloatingLabel v-bind="args" />',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TextareaFloatingLabel },
  // The story's `args` need to be mapped into the template through the `setup()` method and are optional depending on requirement
  setup() {
    const args = {
      label: "New label",
      disabled: false, // true
      id: "fname",
      textColor: "#495057",  // Text color of FloatingLabel field
      backgroundColor: "#fff",
      borderWidth: "1px",
      rounded: "4px",  // border-radius
      characterLimit: "400",
      borderColor: "#ced4da",
      invalid: false, // true
      errorMessage: "Field is required", // this will show only if  `invalid` is true
      rows: "",  // it can be 2, 3, 4, etc
      iconClasses: "fa-solid fa-magnifying-glass", // Font icons class names from library you included in your project
      iconRight: false, // true
      helpText: "",
      resize: "auto",  // it can be both, vertical, horizontal, none
      placeholder: ""
    };
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<TextareaFloatingLabel v-bind="args" />',
});

export const Usages = Template.bind({});
