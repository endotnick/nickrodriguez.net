<template>
  <nav class="nav">
    <ul>
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/resume">Resume</router-link></li>
      <span><font-awesome-icon icon="arrow-left" /> This is all coming soon</span>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped>
nav{
  border-style: solid;
  border-color: #d5d5d5;
  border-width: 1px 0;
  position: relative;
  z-index: 1;
}
a {
  text-decoration: line-through;
}
</style>
