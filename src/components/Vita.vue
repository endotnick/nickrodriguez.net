<template>
  <div class="vita">
    <h1>Vita!</h1>
    <VueMarkdown :source='md'></VueMarkdown>
    <p>View as Markdown at <a :href='vita'>GitHub gist</a></p>
  </div>
</template>

<script>
import axios from 'axios';
import VueMarkdown from 'vue-markdown';


export default {
  name: 'Vita',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      md: '',
      vita: 'https://gist.githubusercontent.com/endotnick/233613454f7a963f309dc50b4a74f496',
      hash: '6144c1a41e7b24018b1d17d23ca12d8e34a7cfd9',
      filename: 'nick_rodriguez_resume.md',
    };
  },
  mounted() {
    axios.get(`${this.vita}/raw/${this.hash}/${this.filename}`).then((res) => {
      this.md = res.data;
    });
  },
};
</script>
<style scoped>
h1 {
  font-family: lobster, cursive;
  font-weight: 400;
}
.vita {
  padding: 0 2em;
  text-align: center;
}
/* Deep select v-html */
.vita >>> div h1 {
  font-size: 2em;
  display: inline-block
}
.vita >>> p, .vita >>> ul {
  text-align: left;
}
.vita >>> ul {
  margin-left: 1em;
}
@media screen and (max-width: 730px) {
  .vita >>> div h1 {
    max-width: 400px;
  }
}
</style>
