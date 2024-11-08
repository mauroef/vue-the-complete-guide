<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <!-- <h2>{{ user.name }}</h2> -->
    <h3>{{ userAge }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set last name</button>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue';

export default {
  setup() {
    const userName = ref('Maximilian');
    const userAge = ref(29);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 29,
    // });

    const firstName = ref('');
    const lastName = ref('');

    const lastNameInput = ref(null);

    watch([userAge, userName], (newValues, oldValues) => {
      console.log('Old Value', oldValues[0]);
      console.log('New Value', newValues[0]);
    });

    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    function setNewAge() {
      // user.age = 30;
      userAge.value = 30;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      userName,
      userAge,
      setAge: setNewAge,
      firstName,
      lastName,
      fullName,
      lastNameInput,
      setLastName,
    };
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
  // watch: {
  //   age(val) {
  //     console.log(val);
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
