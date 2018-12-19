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
</style>
