<template>
  <section>
    <div>
      <label for="username">Username</label>
      <input id="username" type="text" placeholder="Enter username" @input="handleUsernameInput" />
    </div>
    <div>
      <label for="age">Age</label>
      <input id="age" type="text" placeholder="Enter age" @input="handleAgeInput" />
    </div>
  </section>
</template>

<script>
export default {
  emits: ['username-changed', 'age-changed'],
  methods: {
    handleUsernameInput(event) {
      this.$emit('username-changed', event.target.value);
    },
    handleAgeInput(event) {
      this.$emit('age-changed', event.target.value);
    },
  },
};
</script>
