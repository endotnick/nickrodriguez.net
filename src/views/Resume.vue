<template>
  <div class="resume">
    <h1>This is a resume page view!</h1>
    <Resume/>
  </div>
</template>
<script>
import Resume from '@/components/Resume.vue';

export default {
  name: 'resume',
  components: {
    Resume,
  },
};
</script>
