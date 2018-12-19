<template>
  <div>
    <Nav/>
    <slot/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  border-bottom: 1px solid #d5d5d5;
  max-width: 800px;
  width: 100vw;
  top: 0;
}
</style>
