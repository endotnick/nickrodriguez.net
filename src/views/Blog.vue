<template>
  <div class="blog">
    <h1> This is a blog view! </h1>
    <BlogHome/>
  </div>
</template>

<script>
import BlogHome from '@/components/BlogHome.vue';

export default {
  name: 'blog',
  components: {
    BlogHome,
  },
};
</script>
