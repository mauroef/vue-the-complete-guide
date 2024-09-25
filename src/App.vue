<template>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resourses/StoredResources.vue';

export default {
  components: {
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
        {
          id: 'stackblitz',
          title: 'StackBlitz',
          description: 'Learn to stackblitz...',
          link: 'https://stackblitz.com',
        },
        {
          id: 'wikipedia',
          title: 'Wikipedia',
          description: 'Learn to wikipedia...',
          link: 'https://wikipedia.org',
        },
        {
          id: 'youtube',
          title: 'Youtube',
          description: 'Learn to youtube...',
          link: 'https://youtube.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
