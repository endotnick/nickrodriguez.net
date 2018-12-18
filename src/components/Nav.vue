<template>
  <nav class="nav">
    <ul>
      <!-- this should be extracted to a v-for -->
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/minutiae">Blog</router-link></li>
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
  text-align: center;
}
a {
  text-decoration: line-through;
}
</style>
