<template>
  <section>
    <active-user :username="user.username" :age="user.age"></active-user>
    <user-data
      @username-changed="changeUsername"
      @age-changed="changeAge"
    ></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'Mauro',
        age: 34,
      },
    };
  },
  methods: {
    changeUsername(newUsername) {
      this.user.username = newUsername;
    },
    changeAge(newAge) {
      this.user.age = +newAge;
    },
  },
};
</script>
