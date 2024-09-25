<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resourses/LearningResource.vue';

export default {
  components: {
    LearningResource,
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
