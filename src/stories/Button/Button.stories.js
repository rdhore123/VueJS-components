import MyButton from "./Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Data/Button/Button",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color", description: "Select BG Color" },
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
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const doLogin = () => {
      console.log("button click");
    };
    const someOver = () => {
      console.log("someOver");
    };
    return { args, doLogin, someOver };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<my-button v-bind="args" @click="doLogin" @mouseOver="someOver" />',
});
export const Playground = PlaygroundTemplate.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Playground.args = {
  primary: true,
  label: "Button",
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const args = {
      primary: false,
      label: "New Button",
      size: "small",
      icon: "fa-user-secret",
    };
    const doLogin = () => {
      console.log("button click");
    };
    const someOver = () => {
      console.log("someOver");
    };
    return { args, doLogin, someOver };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<my-button v-bind="args" @click="doLogin" @mouseOver="someOver" />',
});

export const Usages = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Usages.args = {
  primary: true,
  label: "Button",
};
