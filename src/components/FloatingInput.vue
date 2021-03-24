<template>
  <div
    class="form-group label-floating"
    :class="{ 'is-empty': isEmptyOrWhite, 'is-focused': isFocused }"
    :id="id"
  >
    <label class="control-label">{{ label }}</label>
    <template v-if="type !== 'textarea'">
      <input
        class="form-control"
        :class="{ 'is-invalid': errors.has(name) }"
        :placeholder="placeholder"
        :type="type"
        :name="name"
        @focus="handleFocus"
        @blur="handleFocus"
        @keyup="isInputEmpty"
        v-model="inputValue"
        v-validate="validator"
        autocomplete="off"
      />
    </template>
    <template v-else>
      <textarea
        class="form-control"
        :name="name"
        :class="{ 'is-invalid': errors.has(name) }"
        @focus="handleFocus"
        @blur="handleFocus"
        @keyup="isInputEmpty"
        v-model="inputValue"
        v-validate="validator"
        rows="4"
      ></textarea>
    </template>
    <span class="invalid-feedback text-danger">
      {{ errors.first(name) }}
    </span>
  </div>
</template>
<script>
export default {
  name: "FloatingInput",
  props: {
    value: {},
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: "text"
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    validator: {
      type: String,
      required: false,
      default: ""
    }
  },
  data: () => ({
    isFocused: false,
    isEmptyOrWhite: true,
    inputValue: null
  }),
  watch: {
    inputValue(value) {
      this.$emit("input", value);
    }
  },
  mounted() {
    this.inputValue = this.value;
    this.$nextTick(() => {
      this.isInputEmpty();
    });
  },
  methods: {
    handleFocus() {
      this.isFocused = !this.isFocused;
    },
    isInputEmpty() {
      let input = document.getElementById(this.id);
      if (input) {
        let val = input.children[1].value;
        this.isEmptyOrWhite = !val || val.trim() === "";
        this.$emit("changed");
      }
    }
  }
};
</script>
