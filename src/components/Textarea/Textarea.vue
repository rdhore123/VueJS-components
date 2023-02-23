<template>
  <div class="ee-textarea-wrapper">
    <label :for="id" v-if="label" class="ee-textarea-label">{{ label }}</label>
    <div class="ee-textarea-inner">
      <textarea
        :id="id"
        :value="textareaValue"
        @input="getValue"
        :rounded="rounded"
        :rows="rows"
        :resize="resize"
        :placeholder="placeholder"
        :characterLimit="characterLimit"
        class="ee-textarea"
        :class="classes"
        :helpText="helpText"
        :style="style"
        v-bind="$attrs"
      />
      <div v-if="characterLimit" :class="characterPosition">
        {{ characterLimit }}
      </div>
      <i :class="iconClasses" class="ee-textarea-icon" v-if="iconClasses" />
    </div>
    <small class="ee-textarea-error" v-if="invalid">
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
  name: "Textarea",
  inheritAttrs: false,
  props: {
    rows: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    resize: {
      type: String,
      default: "auto",
      validator: function (value) {
        return ["both", "vertical", "horizontal", "none"].indexOf(value) !== -1;
      },
    },
    characterLimit: {
      type: Number,
    },
    characterPosition: {
      type: Boolean,
    },
    iconClasses: {
      type: String,
    },
    iconRight: {
      type: Boolean,
    },
    rounded: {
      type: String,
    },
    id: {
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
    disabled: {
      type: Boolean,
      default: false,
    },
    textareaValue: {
      type: String,
    },    
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        disabled: props.disabled,
        invalid: props.invalid,
        [`ee-textarea--with-icon`]: props.iconClasses,
        [`ee-textarea--with-right-icon`]: props.iconRight,
      })),
      placeholder: computed(() => `${props.placeholder || ""}`),
      characterLimit: computed(() => `${props.characterLimit || ""}`),
      iconClasses: computed(() => ({
        [`${props.iconClasses}`]: props.iconClasses,
        [`ee-textarea--with-right-icon-image`]: props.iconRight,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
        borderRadius: props.rounded,
        resize: props.resize,
      })),
      characterPosition: computed(() => ({
        [`ee-textarea-charposition--right`]: props.characterPosition,
      })),
    };
  },
  // data() {
  //   return {
  //     remainingCharCount: ''
  //   }
  // },
  methods: {
    getValue(event) {
      this.$emit("update:textareaValue", event.target.value);
      // this.remainingCharCount = event.target.value.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.ee-textarea {
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
    top: 15px;
    pointer-events: none;
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
  &-charposition--right {
    text-align: right;
  }
}
</style>
<style>
#anchor--data-textarea-floating-label--usages .docs-story div:first-child,
#anchor--data-textarea-basic--usages .docs-story div:first-child,
#anchor--data-textarea-basic--playground .docblock-code-toggle,
#anchor--data-textarea-floating-label--playground .docblock-code-toggle {
  display: none !important;
}
#anchor--data-textarea-floating-label--usages .docs-story div:nth-child(2),
#anchor--data-textarea-basic--usages .docs-story div:nth-child(2) {
  position: static;
}
</style>