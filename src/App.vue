<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
  setup() {
    // const userName = ref('Maximilian');
    // const userAge = ref(29);
    const user = reactive({
      name: 'Maximilian',
      age: 29,
    });

    const firstName = ref('');
    const lastName = ref('');

    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    function setNewAge() {
      user.age = 30;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    return { user, setAge: setNewAge, setFirstName, setLastName, fullName };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 30;
  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
