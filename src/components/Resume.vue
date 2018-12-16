<template>
  <div>
    <p>Resume view rendered</p>
    <!--vuepdf :src='pdf'></vuepdf-->
  </div>
</template>

<script>
// import vuepdf from 'vue-pdf';
// import file from '../assets/NickRodriguezResume_public.pdf';

export default {
  name: 'Resume',

  components: {
    // vuepdf,
  },

  data() {
    return {
      // pdf: file,
    };
  },
};
</script>

<style scoped>
</style>
