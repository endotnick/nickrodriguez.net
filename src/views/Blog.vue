<template>
  <div class="blog">
    <BlogFeed/>
  </div>
</template>

<script>
import BlogFeed from '@/components/BlogFeed.vue';

export default {
  name: 'blog',
  components: {
    BlogFeed,
  },
};
</script>
