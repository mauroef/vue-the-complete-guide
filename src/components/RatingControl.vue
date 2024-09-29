<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  // computed: {
  //   activeOption() {
  //     return this.modelValue
  //   }
  // },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  display: flex;
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
}

li {
  align-items: center;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  margin: 0 0.25rem;
  padding: 0.5rem;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font: inherit;
}
</style>
