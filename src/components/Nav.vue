<template>
  <nav class="nav">
    <ul>
      <!-- this should be extracted to a v-for -->
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/minutiae">Blog</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/vita">Resume</router-link></li>
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
ul{
  list-style: none;
}
li {
  display: inline;
  margin-right: 20px;
  font-weight: bold;
}
</style>
