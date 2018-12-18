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
  border-bottom: 1px solid #d5d5d5;
}
</style>
