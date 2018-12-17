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
