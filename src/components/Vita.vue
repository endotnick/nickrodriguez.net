<template>
  <div class="vita">
    <h1>Vita!</h1>
    <VueMarkdown :source='md'></VueMarkdown>
  </div>
</template>

<script>
import axios from 'axios';
import VueMarkdown from 'vue-markdown';

const vita = 'https://gist.githubusercontent.com/endotnick/233613454f7a963f309dc50b4a74f496/raw/4382d7ea51228a245f83031c268dbb34dc441599/nick_rodriguez_resume.md';

export default {
  name: 'Vita',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      md: '',
    };
  },
  mounted() {
    axios.get(vita).then((res) => {
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
.vita >>> p, .vita >>> ul  {
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
