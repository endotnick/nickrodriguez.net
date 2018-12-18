import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'custom-nav' },
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/minutiae',
      name: 'blog-feed',
      component: () => import('./views/Blog.vue'),
    },
    {
      path: '/minutiae/:slug',
      name: 'blog-post',
      component: () => import('./components/BlogPost.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('./views/Resume.vue'),
    },
  ],
});
