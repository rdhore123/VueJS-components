<template>
  <div class="ee-radio-wrapper" :class="disabledClasses">
    <div class="ee-radio-inner" :class="{ 'ee-radio-error': invalid }">
      <input
        type="radio"
        :id="id"
        class="ee-radio"
        :class="classes"
        @input="getValue"
        :rounded="rounded"
        v-bind="$attrs"
      />
    <label :for="id" v-if="label" class="ee-radio-label">{{ label }}</label>
    </div>
    <small class="ee-radio-error" v-if="errorMessage">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Radio",
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
        [`ee-radio--${props.size || "medium"}`]: true,
      })),
      disabledClasses: computed(() => ({
        disabled : props.disabled,
      })),
    };
  },

  methods: {
    getValue(event) {
      console.log(event.target.checked);
      this.$emit("update:radioValue", event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.ee-radio {
  margin:0;
  &--small {
    width: 15px;
    height: 15px;
  }
  &--medium {
    width: 20px;
    height: 20px;
  }
  &--large {
    width: 25px;
    height: 25px;
  }
  &-label {
    padding-left: 0.5rem;
    display: block;
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
    display: flex;
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
}
</style>
<style>
#anchor--data-radio-floating-label--usages .docs-story div:first-child,
#anchor--data-radio-basic--usages .docs-story div:first-child,
#anchor--data-radio-basic--playground .docblock-code-toggle,
#anchor--data-radio-floating-label--playground .docblock-code-toggle {
  display: none !important;
}
#anchor--data-radio-floating-label--usages .docs-story div:nth-child(2),
#anchor--data-radio-basic--usages .docs-story div:nth-child(2) {
  position: static;
}
</style>