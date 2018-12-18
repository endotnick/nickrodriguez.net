<template>
  <div>
    <Intro/>
    <Nav/>
    <About/>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Intro from '@/components/Intro.vue';
import Nav from '@/components/Nav.vue';

export default {
  name: 'home',
  components: {
    About,
    Nav,
    Intro,
  },
};
</script>

<style scoped>
nav {
  border-width: 1px 0;
  border-color: #d5d5d5;
  border-style: solid;
}
</style>
