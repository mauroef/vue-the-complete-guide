const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      visible: true,
      backgroundInput: '',
    };
  },
  computed: {
    styleParagraph() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
      };
    },
    visibility() {
      return this.visible ? { visible: true } : { hidden: true };
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
});

app.mount('#assignment');
