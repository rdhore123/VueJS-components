<template>
  <div class="ee-styled-checkbox-wrapper" :class="disabledClasses">
    <div class="ee-styled-checkbox-inner" :class="{ 'ee-styled-checkbox-error': invalid }">
      <input
        type="checkbox"
        :id="id"
        @input="getValue"
        class="ee-styled-checkbox"
        :class="classes"
        :rounded="rounded"
        v-bind="$attrs"
      />
    <label :for="id" class="ee-styled-checkbox-label">{{ label }}</label>
    </div>
    <small class="ee-styled-checkbox-error" v-if="errorMessage">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "StyledCheckbox",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`ee-styled-checkbox--${props.size || "medium"}`]: true,
      })),
      disabledClasses: computed(() => ({
        disabled : props.disabled,
      })),
    };
  },

  methods: {
    getValue(event) {
      console.log(event.target.checked);
      this.$emit("update:styledcheckboxValue", event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.ee-styled-checkbox {
  transition: box-shadow 0.2s;
  margin:0;
  position: absolute; 
  opacity: 0; 
  z-index:1;
  cursor: pointer;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  
  &:focus {
    box-shadow: 0 0 0 0.2rem #bfdbfe;
  }  
  &--small {
    & + label:before {
   width: 15px;
   height: 15px;
  }
  }
  &--medium {
    & + label:before {
   width: 20px;
   height: 20px;
  }
  }
  &--large {
    & + label:before {
   width: 25px;
   height: 25px;
  }
  }
  &-label {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding: 0;

    &:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    background: white;
  }
  }
  &-wrapper {
    margin-bottom: 1rem;
    position: relative;

    &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

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
    display: inline-flex;
    align-items: center;
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
  &:hover + label:before {
    background: #f35429;
  }
  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }
  &:checked + label:before {
    background: #f35429;
  }
  
  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);    
  }

  &.ee-styled-checkbox--large:checked + label:after {
      left: 7px;
    top: 11px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 6px 0 0 white, 6px -2px 0 white, 6px -4px 0 white, 6px -6px 0 white, 6px -8px 0 white, 6px -10px 0 white;
    }

    &.ee-styled-checkbox--small:checked + label:after {
      left: 3px;
    top: 7px;
    box-shadow: 2px 0 0 white, 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
    }
}
</style>
<style>
#anchor--data-styled-checkbox-floating-label--usages .docs-story div:first-child,
#anchor--data-styled-checkbox-basic--usages .docs-story div:first-child,
#anchor--data-styled-checkbox-basic--playground .docblock-code-toggle,
#anchor--data-styled-checkbox-floating-label--playground .docblock-code-toggle {
  display: none !important;
}
#anchor--data-styled-checkbox-floating-label--usages .docs-story div:nth-child(2),
#anchor--data-styled-checkbox-basic--usages .docs-story div:nth-child(2) {
  position: static;
}
</style>