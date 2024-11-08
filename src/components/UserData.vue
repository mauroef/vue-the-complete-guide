<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    // context.emit('change-age', 30); // this.$emit('change-age', 30);

    return { userName };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
};
</script>
