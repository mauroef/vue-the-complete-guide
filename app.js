const app = Vue.createApp({
  data() {
    return {
      paragraphOne: '',
      paragraphTwo: '',
    };
  },
  methods: {
    showAlert() {
      alert('Button clicked!');
    },
    updateParagraphOnKeydown(e) {
      this.paragraphOne = e.target.value;
    },
    updateParagraphOnEnter(e) {
      this.paragraphTwo = e.target.value;
    },
  },
});

app.mount('#assignment');
