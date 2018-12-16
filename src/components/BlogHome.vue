<template>
  <div>
     <p>Blog home rendered</p>
  </div>
</template>

<script>
import butter from '@/buttercms';

export default {
  name: 'blog-home',
  data() {
    return {
      page_title: 'Blog',
      posts: [],
      categories: [],
    };
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10,
      }).then((res) => {
        // console.log(res.data)
        this.posts = res.data.data;
      });
    },
    getCategories() {
      butter.category.list()
        .then((res) => {
          console.log('List of Categories:');
          console.log(res.data.data);
        });
    },
    getPostsByCategory() {
      butter.category.retrieve('example-category', {
        include: 'recent_posts',
      })
        .then((res) => {
          console.log('Posts with specific category:');
          console.log(res);
        });
    },
  },
  created() {
    this.getPosts();
    this.getCategories();
    this.getPostsByCategory();
  },
};
</script>

<style scoped>
</style>
