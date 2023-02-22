<template>
  <div class="ee-input-wrapper">
    <label :for="id" v-if="label" class="ee-input-label">{{ label }}</label>
    <div class="ee-input-inner">
      <input
        :type="inputType"
        :id="id"
        class="ee-input"
        :style="style"
        v-bind="$attrs"
        :value="inputValue"
        @input="getValue"
        :rounded="rounded"
        :class="classes"
        :helpText="helpText"
        :placeholder="placeholder"
      />
      <i :class="iconClasses" class="ee-input-icon" v-if="iconClasses" />
    </div>
    <small class="ee-input-error" v-if="invalid">
      {{ errorMessage }}
    </small>
    <small v-if="helpText">
      {{ helpText }}
    </small>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
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
    placeholder: {
      type: String,
    },
    iconRight: {
      type: Boolean,
    },
    rounded: {
      type: String,
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
      placeholder: computed(() => `${props.placeholder || ""}`),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
        borderRadius: props.rounded,
      })),
    };
  },

  methods: {
    getValue(event) {
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
  padding: 0.75rem 0.75rem;
  border: 1px solid #ced4da;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
  appearance: none;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: #3b82f6;
  }

  &:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #bfdbfe;
    border-color: #3b82f6;
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
    padding: 0.6rem 0.75rem;
  }
  &--large {
    font-size: 1.25rem;
    padding: 0.75rem 0.9375rem;
  }
  &-label {
    padding-right: 0.5rem;
    display: block;
    margin-bottom: 0.5rem;
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
  &-inner {
    position: relative;
  }
  &--with-icon {
    padding-left: 40px;
  }
  &--with-right-icon {
    padding-right: 40px;
    padding-left: 20px;
    &-image {
      left: auto;
      right: 12px;
    }
  }
  &-error {
    color: #f00;
  }
}
</style>
<style>
#anchor--data-input-floating-label--usages .docs-story div:first-child,
#anchor--data-input-basic--usages .docs-story div:first-child,
#anchor--data-input-basic--playground .docblock-code-toggle,
#anchor--data-input-floating-label--playground .docblock-code-toggle {
  display: none !important;
}
#anchor--data-input-floating-label--usages .docs-story div:nth-child(2),
#anchor--data-input-basic--usages .docs-story div:nth-child(2) {
  position: static;
}
</style>