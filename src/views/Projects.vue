<template>
  <div class="projects">
    <h1>This is a projects page view!</h1>
    <Projects/>
  </div>
</template>
<script>
import Projects from '@/components/Projects.vue';

export default {
  name: 'projects',
  components: {
    Projects,
  },
};
</script>
