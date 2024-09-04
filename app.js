const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredValue: '',
      showList: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.showList ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
      this.enteredValue = '';
    },
    showListHandler() {
      this.showList = !this.showList;
    },
  },
});

app.mount('#assignment');
