<template>
  <div class="ee-styled-radio-wrapper" :class="disabledClasses">
    <div class="ee-styled-radio-inner" :class="{ 'ee-styled-radio-error': invalid }">
      <input
        type="radio"
        :id="id"
        class="ee-styled-radio"
        :class="classes"
        @input="getValue"
        :rounded="rounded"
        v-bind="$attrs"
      />
    <label :for="id" class="ee-styled-radio-label">{{ label }}</label>
    </div>
    <small class="ee-styled-radio-error" v-if="errorMessage">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "StyledRadio",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    size: {
      type: String,
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
        [`ee-styled-radio--${props.size || "large"}`]: true,
      })),
      disabledClasses: computed(() => ({
        disabled : props.disabled,
      })),
    };
  },

  methods: {
    getValue(event) {
      console.log(event.target.checked);
      this.$emit("update:styledradioValue", event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.ee-styled-radio {
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
  
  &-label {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding: 0;

    &:before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 18px;
    height: 18px;
    border: 1px solid #666;
    border-radius: 100%;
    background: white;
    box-sizing: border-box;
    margin-right: 10px;
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
  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
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

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 3px;
    top: 2px;
    background: orange;
    width: 11px;
    height: 11px;
    border-radius: 100%;
  }

  &--small {
    & + label:before {
   width: 16px;
   height: 16px;
  }
  }
  &--medium {
    & + label:before {
   width: 22px;
   height: 22px;
  }

  &:checked + label:after {
        left: 4px;
    top: 4px;
    width: 14px;
    height: 14px;
  }
  }
  &--large {
    & + label:before {
   width: 26px;
   height: 26px;
  }

  &:checked + label:after {
        left: 4px;
    top: 4px;
    width: 18px;
    height: 18px;
  }
  }
}
</style>
<style>
#anchor--data-styled-radio-floating-label--usages .docs-story div:first-child,
#anchor--data-styled-radio-basic--usages .docs-story div:first-child,
#anchor--data-styled-radio-basic--playground .docblock-code-toggle,
#anchor--data-styled-radio-floating-label--playground .docblock-code-toggle {
  display: none !important;
}
#anchor--data-styled-radio-floating-label--usages .docs-story div:nth-child(2),
#anchor--data-styled-radio-basic--usages .docs-story div:nth-child(2) {
  position: static;
}
</style>