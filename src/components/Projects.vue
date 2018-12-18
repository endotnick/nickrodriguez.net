<template>
  <div id='project-feed'>
      <div class='project' v-for='(project,index) in projects' :key='`${project.slug}_${index}`'>
        <router-link :to='`/projects/${project.slug}`'>
          <article class='media'>
            <figure>
              <img v-if='project.fields.hero_image' :src='project.fields.hero_image' alt=''>
              <img v-else src='http://via.placeholder.com/250x250' alt=''>
              <figcaption>
                <span class='project_title'>{{ project.fields.title }}</span>
              </figcaption>
            </figure>
              <p>{{ project.fields.short_description }}</p>
          </article>
        </router-link>
      <hr>
      </div>
  </div>
</template>

<script>
import butter from '@/buttercms';

export default {
  name: 'projects',
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getProjects() {
      butter.page.list('project', {
        page: 1,
        page_size: 10,
      }).then((res) => {
        this.projects = res.data.data;
        console.log(this.projects[0]);
      });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<style scoped>
</style>
