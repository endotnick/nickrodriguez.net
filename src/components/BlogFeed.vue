<template>
  <div id='blog-feed'>
      <h1>{{ page_title }}</h1>
      <div class='post' v-for='(post,index) in posts' :key='`${post.slug}_${index}`'>
        <router-link :to='`/minutiae/${post.slug}`'>
          <article class='media'>
            <figure>
              <img v-if='post.featured_image' :src='post.featured_image' alt=''>
              <img v-else src='http://via.placeholder.com/250x250' alt=''>
              <figcaption>
                <span class='post_title'>{{ post.title }}</span>
                <span class='post_author'>
                by {{ post.author.first_name }} {{ post.author.last_name }}
                </span>
              </figcaption>
            </figure>
              <p>{{ post.summary }}</p>
          </article>
        </router-link>
      <hr>
      </div>
  </div>
</template>

<script>
import butter from '@/buttercms';

export default {
  name: 'blog-feed',
  data() {
    return {
      page_title: '/Minutiae/',
      posts: [],
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
  },
  created() {
    this.getPosts();
  },
};
</script>

<style scoped>
figure {
  position: relative;
}

figure::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 33%;
  background-image: linear-gradient(180deg,rgba(10,9,8,.33),transparent);
}

figure::before:hover {
  background-color: rgba(10,9,8,0.65);
}
/* img:hover {
  opacity: 0.5;
} */

figcaption {
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.post_title {
  padding-top: 0.2rem;
  padding-left: 0.75rem;
  color: #fcfdff;
  font-size: 3rem;
  text-transform: capitalize;
  font-family: Prompt,Helvetica,Arial,sans-serif;
  font-weight: semi-bold;
}

.post_author {
  position: absolute;
  bottom: .75rem;
  right: .75rem;
}
</style>
