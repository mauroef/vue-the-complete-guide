const app = Vue.createApp({
  data() {
    return {
      name: 'Mauro',
      age: 34,
      image:
        'https://images.ctfassets.net/19dvw6heztyg/33TIRHLCSMjWnD9rGjnaBy/a56f1eaf8e9702980c013a01480c74cb/earn-more-as-developer?w=1440&q=75',
    };
  },
  methods: {
    showRandomNumber() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
