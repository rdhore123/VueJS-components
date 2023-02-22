<template>
  <div class="ee-input-wrapper" :class="{ 'ee-input-focused': inFocus }">
    <input
      :type="inputType"
      :id="id"
      class="ee-input"
      :style="style"
      v-bind="$attrs"
      :value="inputValue"
      @input="getValue"
      :class="classes"
      :helpText="helpText"
      @focus="inFocus = true"
      @blur="getValue"
    />
    <label :for="id" v-if="label" class="ee-input-label">
      {{ label }}
    </label>
    <i :class="iconClasses" class="ee-input-icon" v-if="iconClasses" />
  </div>
  <small class="ee-input-error" v-if="invalid">
    {{ errorMessage }}
  </small>
  <small v-if="helpText">
    {{ helpText }}
  </small>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "New label",
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "text",
      validator: function (value) {
        return ["email", "number"].indexOf(value) !== -1;
      },
    },
    iconClasses: {
      type: String,
    },
    iconRight: {
      type: Boolean,
    },
    textColor: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    borderWidth: {
      type: String,
    },
    borderColor: {
      type: String,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
    },
    helpText: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inputValue: {
      type: String,
    },
    id: {
      type: String,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        disabled: props.disabled,
        invalid: props.invalid,
        [`ee-input--${props.size || "medium"}`]: true,
        [`ee-input--with-icon`]: props.iconClasses,
        [`ee-input--with-right-icon`]: props.iconRight,
      })),
      iconClasses: computed(() => ({
        [`${props.iconClasses}`]: props.iconClasses,
        [`ee-input--with-right-icon-image`]: props.iconRight,
      })),
      inputType: computed(() => `${props.type || "text"}`),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
      })),
    };
  },
  data() {
    return {
      inFocus: false,
    };
  },
  methods: {
    getValue(event) {
      if (event.target.value.length > 0) this.inFocus = true;
      else this.inFocus = false;
      this.$emit("update:inputValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.ee-input {
  font-size: 1rem;
  color: #495057;
  background: #fff;
  padding: 0.75rem 0;
  border: none;
  border-bottom: 1px solid #ced4da;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
  appearance: none;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: #3b82f6;
  }
  &:focus {
    outline: 0 none;
    outline-offset: 0;
    border-color: #3b82f6;

    + .ee-input-label {
      top: -15px;
      transform: scale(75%);
      transform-origin: left;
    }
  }
  &-focused .ee-input + .ee-input-label {
    top: -15px;
    transform: scale(75%);
    transform-origin: left;
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &--small {
    font-size: 0.875rem;
    padding: 0.5rem 0.65625rem;
  }
  &--medium {
    font-size: 1rem;
    padding: 0.6rem 0;
  }
  &--large {
    font-size: 1.25rem;
    padding: 0.75rem 0;
  }
  &-label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;
    pointer-events: none;
    transition: transform 0.2s, top 0.2s;
    display: block;
  }
  &.invalid {
    border-color: #e24c4c !important;
  }
  &-wrapper {
    margin-bottom: 1rem;
    position: relative;

    > small {
      margin-top: 0.25rem;
      display: block;
    }
  }
  &-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &--with-icon {
    padding-left: 40px;
    + .ee-input-label {
      left: 40px;
    }
  }
  &-error {
    color: #f00;
  }
}
</style>
