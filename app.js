const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    showResult() {
      if (this.result !== 0) console.log('running watcher');
      const that = this;
      setTimeout(() => {
        that.result = 0;
      }, 5000);
    },
  },
  computed: {
    showResult() {
      if (this.result < 37) return 'Not there yet';
      else if (this.result === 37) return this.result;
      else return 'Too much!';
    },
  },
  methods: {
    add(amount) {
      this.result += amount;
    },
  },
});

app.mount('#assignment');
