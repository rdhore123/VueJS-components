<template>
  <div class="ee-select-wrapper" :class="{ 'ee-select-focused': inFocus }">
    <div class="ee-select-inner">
      <select
        :id="id"
        class="ee-select"
        :class="classes"
        :style="style"
        :rounded="rounded"
        @input="getValue"
        :helpText="helpText"
        @focus="inFocus = true"
        @blur="getValue"
        v-bind="$attrs"
      >
        <option selected disabled></option>
        <option
          v-for="(value, index) in selectDropdownOptions"
          :key="index"
          :value="value"
        >
          {{ value }}
        </option>
      </select>
      <label :for="id" v-if="label" class="ee-select-label">
        {{ label }}
      </label>
      <i :class="iconClasses" class="ee-select-icon" v-if="iconClasses" />
    </div>
    <small class="ee-select-error" v-if="invalid">
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
  name: "Select",
  inheritAttrs: false,
  props: {
    selectDropdownOptions: {
      type: Array,
    },
    label: {
      type: String,
      required: true,
    },
    iconClasses: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
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
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
    },
  },

  data() {
    return {
      inFocus: false,
    };
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        disabled: props.disabled,
        invalid: props.invalid,
        [`ee-select--${props.size || "medium"}`]: true,
        [`ee-select--with-icon`]: props.iconClasses,
      })),
      iconClasses: computed(() => ({
        [`${props.iconClasses}`]: props.iconClasses,
      })),
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
      if (event.target.value.length > 0) this.inFocus = true;
      else this.inFocus = false;
      this.emitter.emit("select-label-change", { selectLabelChangeContent: event.target.value });
    },
  },
};
</script>

<style lang="scss" scoped>
.ee-select {
  font-size: 1rem;
  color: #495057;
  background: #fff;
  padding: 0.75rem 0;
  border: none;
  border-bottom: 1px solid #ced4da;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: #3b82f6;
  }
  &:focus {
    outline: 0 none;
    outline-offset: 0;
    border-color: #3b82f6;

    + .ee-select-label {
      top: -15px;
      transform: scale(75%);
      transform-origin: left;
    }
  }
  &-focused .ee-select + .ee-select-label {
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
    + .ee-select-label {
      left: 40px;
    }
  }
  &-error {
    color: #f00;
  }
}
</style>
<style>
#anchor--data-select-floating-label--usages .docs-story div:first-child,
#anchor--data-select-basic--usages .docs-story div:first-child,
#anchor--data-select-basic--playground .docblock-code-toggle,
#anchor--data-select-floating-label--playground .docblock-code-toggle {
  display: none !important;
}
#anchor--data-select-floating-label--usages .docs-story div:nth-child(2),
#anchor--data-select-basic--usages .docs-story div:nth-child(2) {
  position: static;
}
</style>
