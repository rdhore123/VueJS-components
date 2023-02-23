import SelectFloatingLabel from "../../components/Select/SelectFloatingLabel.vue";

export default {
  title: "Data/Select/Floating-Label",
  component: SelectFloatingLabel,
  argTypes: {
    textColor: { control: "color", description: "Select Text Color" },
    iconClasses: { control: "text", description: "Add icon classes eg. `fa-solid fa-chevron-down`" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    backgroundColor: { control: "color", description: "Select BG Color" },
    borderColor: { control: "color", description: "Select Border Color" },
    borderWidth: { control: "text", description: "Select Border Width" },
  },
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  }
};

const PlaygroundTemplate = (args) => ({
  components: { SelectFloatingLabel },
  setup() {
    const args = {
      label: "Choose Option",
      selectDropdownOptions: ["Option 1", "Option 2"]
    };
    return { args };
  },
  template:
    '<SelectFloatingLabel v-bind="args" />',
});
export const Playground = PlaygroundTemplate.bind({});

const Template = () => ({
  components: { SelectFloatingLabel },
  setup() {
    const args = {
      selectDropdownOptions: ["Option 1", "Option 2"],
      label: "New label",
      id: "fname",
      size: "medium", 
      iconClasses: "fa-solid fa-chevron-down", 
      textColor: "#495057",  
      backgroundColor: "#fff",
      borderWidth: "1px",
      rounded: "4px", 
      borderColor: "#ced4da",
      invalid: false, 
      errorMessage: "Field is required", 
      helpText: "",
      disabled: false,
    };
    return { args };
  },
  template:
    '<SelectFloatingLabel v-bind="args" />',
});

export const Usages = Template.bind({});
