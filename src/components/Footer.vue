<template>
  <footer>
    <span>
      <font-awesome-icon icon='code' /> w/ <font-awesome-icon icon='heart' /> by <a href='https://github.com/endotnick/nickrodriguez.net'>n.</a>
    </span>
    <span> | </span>
    <span>
      <font-awesome-icon icon='file' /> served by <a href='https://buttercms.com'><img src='../assets/butter-y.webp'/></a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
  footer {
    font-family: 'Lobster', cursive;
    background-color: #fff;
    text-align: center;
    position: fixed;
    max-width: 800px;
    padding: 1em;
    width: 100%;
    bottom: 0;
  }

  img {
    height: 1.5em;
    margin-bottom: -.5em;
  }

  a {
    color: rgb(255, 183, 77);
    text-decoration: none;
  }
</style>
