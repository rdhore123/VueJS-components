<template>
  <div>
    <Input
      type="text"
      name="fName"
      label="First name"
      placeholder="First Name"
      class="newclass"
      id="fName"
      size="medium"
      v-model:inputValue="fName"
      autocomplete="on"
      errorMessage="Field is required"
      helpText="Enter your username to reset your password."
      textColor="#f00"
      borderWidth="1px"
      borderColor="#ddd"
      :invalid="false"
      iconClasses="fa-solid fa-magnifying-glass"
      rounded="20px"
      :iconRight="true"
      autofocus
    />
    {{ fName }}
  </div>
  <div>
    <InputFloatingLabel
      type="text"
      name="lName"
      label="Last name"
      class="newclass"
      id="lName"
      size="medium"
      v-model:inputValue="lName"
      autocomplete="on"
      errorMessage="Field is required."
      helpText="Enter your username to reset your password."
      textColor="#f00"
      borderWidth="1px"
      :invalid="false"
      :iconRight="true"
    />
    {{ lName }}
  </div>
  <div>
    <Textarea
      name="desc"
      label="Desc"
      class="newclass"
      id="desc"
      v-model:textareaValue="desc"
      autocomplete="on"
      errorMessage="Field is required."
      borderWidth="1px"
      :invalid="false"
      :iconRight="true"
      rows="5"
      :characterLimit="100"
    />
    {{ desc }}
  </div>
  <div>
    <Select
      :selectDropdownOptions="selectDropdownOptions"
      v-model:select-change="selectValue"
    >
      --Pick an Option--
    </Select>
    {{ selectValue }}
  </div>
  <div>
    <SelectFloatingLabel
      :selectDropdownOptions="selectDropdownOptions"
      v-model:select-label-change="selectLabelValue"
    >
      --Pick an Option--
    </SelectFloatingLabel>
    {{ selectLabelValue }}
  </div>
  <div>
  <Checkbox label="test" size="large" v-model:checkboxValue="accept" /> {{accept}}
   </div>
    <div>
  <StyledCheckbox label="test" size="large" v-model:styledcheckboxValue="accept1" /> {{accept1}}
   </div>
   <div>
  <Radio label="test" size="large" v-model:radioValue="accept2" /> {{accept2}}
   </div>
   <div>
  <StyledRadio label="test" size="large" v-model:styledradioValue="accept3" /> {{accept3}}
   </div>
</template>
<script>
import Input from "./stories/InputText/Basic/Input.vue";
import InputFloatingLabel from "./stories/InputText/Floating-Label/InputFloatingLabel.vue";
import Textarea from "./stories/Textarea/Basic/Textarea.vue";
import Select from "./stories/Select/Basic/Select.vue";
import SelectFloatingLabel from "./stories/Select/Floating-Label/SelectFloatingLabel.vue";
import Checkbox from "./stories/Checkbox/Basic/Checkbox.vue";
import StyledCheckbox from "./stories/Checkbox/Styled/StyledCheckbox.vue";
import Radio from "./stories/Radio/Basic/Radio.vue";
import StyledRadio from "./stories/Radio/Styled/StyledRadio.vue";

export default {
  components: {
    Input,
    InputFloatingLabel,
    Textarea,
    Select,
    SelectFloatingLabel,
    Checkbox,
    StyledCheckbox,
    Radio,
    StyledRadio
  },
  data() {
    return {
      fName: "",
      lName: "",
      desc: "",
      selectDropdownOptions: ["Option 1", "Option 2"],
      selectValue: "",
      selectLabelValue: "",
      accept: false,
      accept1: false,
      accept2: false,
      accept3: false
    };
  },
  created() {
    this.emitter.on("select-change", (event) => {
      this.selectValue = event.selectChangeContent;
    });
    this.emitter.on("select-label-change", (event) => {
      this.selectLabelValue = event.selectLabelChangeContent;
    });
  },
};
</script>
