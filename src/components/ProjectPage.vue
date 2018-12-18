<template>
  <div id='project'>
    <h1>{{ project.title }}</h1>
    <div v-html='project.long_description'></div>
    <div>{{ project.stack }}</div>
  </div>
</template>

<script>
import butter from '@/buttercms';

export default {
  name: 'project-page',
  data() {
    return {
      project: null,
    };
  },
  methods: {
    getProject() {
      butter.page.retrieve('project', this.$route.params.slug)
        .then((res) => {
          this.project = res.data.data.fields;
        }).catch((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.getProject();
  },
};
</script>

<style scoped>
</style>
