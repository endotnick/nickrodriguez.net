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
                  Posted on {{ prettyDate(post.published) }} by
                  {{ post.author.first_name }} {{ post.author.last_name }}
                </span>
              </figcaption>
            </figure>
            <p>{{ post.summary }}</p>
          </article>
        </router-link>
      </div>
  </div>
</template>

<script>
import butter from '@/buttercms';
import prettyDate from '@/helpers';

export default {
  name: 'blog-feed',
  data() {
    return {
      page_title: '/Minutiae/',
      posts: [],
    };
  },
  methods: {
    prettyDate,
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10,
      }).then((res) => {
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
h1 {
  font-family: lobster, cursive;
  font-weight: 400;
}
article {
  box-shadow: 4px 4px 10px 1px #b3b3b3;
}
article p {
  padding: 1em;
  margin-top: 0;
}
a:hover {
  text-decoration: none;
}
figure {
  position: relative;
  margin: 0;
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
figcaption:hover {
  background-color: rgba(10,9,8,0.65);
}
figcaption {
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  transition: background-color 225ms cubic-bezier(.4,.25,.3,1);
  /* There is a ghost somewhere */
  height: calc(100% - 7px);
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
