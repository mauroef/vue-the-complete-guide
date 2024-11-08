<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <!-- ref object & reactive object -->
  <!-- <h3 v-if="goal.show">{{ goal.text }}</h3> -->

  <!-- ref & options api -->
  <!-- <h3 v-if="show">{{ goal }}</h3> -->

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    // ref
    // const goal = ref('Learn Vue');
    // const show = ref(true);

    // function toggle() {
    //   show.value = !show.value;
    // }

    // return { goal: goal.value, show: show, toggle };

    // ref object
    // const goal = ref({
    //   text: 'Learn Vue',
    //   show: true,
    // });

    // function toggle() {
    //   goal.value.show = !goal.value.show;
    // }

    // return { goal, toggle };

    // reactive object
    const goal = reactive({
      text: 'Learn Vue',
      show: true,
    });

    function toggle() {
      goal.show = !goal.show;
    }

    return { goal, toggle };
  },
  // data() {
  //   return {
  //     goal: 'Learn Vue',
  //     show: true,
  //   };
  // },
  // methods: {
  //   toggle() {
  //     this.show = !this.show;
  //   },
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
