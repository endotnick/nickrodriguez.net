<template>
  <div class="projects">
    <h1>Projects!</h1>
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
<style scoped>
h1 {
  margin-bottom: 0;
  font-family: lobster, cursive;
  font-weight: 400;
}
</style>
