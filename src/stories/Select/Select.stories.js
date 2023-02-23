import Select from "../../components/Select/Select.vue";

export default {
  title: "Data/Select/Basic",
  component: Select,
  argTypes: {
    rounded: { control: "text", description: "Select rounded corner in px" },
    textColor: { control: "color", description: "Select Text Color" },
    iconClasses: { control: "text", description: "Add icon classes eg. `fa-solid fa-chevron-down`" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    borderColor: { control: "color", description: "Select Border Color" },
    borderWidth: { control: "text", description: "Select Border Width" },
    backgroundColor: { control: "color", description: "Select BG Color" },
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
  components: { Select },
  setup() {
    const args = {
      selectDropdownOptions: ["Option 1", "Option 2"],
      label: "New label",
      id: "fname",
      size: "medium", 
      iconClasses:"fa-solid fa-chevron-down", 
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
    '<Select v-bind="args">Choose Option</Select>',
});

export const Usages = Template.bind({});
