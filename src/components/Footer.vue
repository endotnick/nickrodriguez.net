<template>
  <footer>
    <span>
      <font-awesome-icon icon='code' /> w/ <font-awesome-icon icon='heart' /> by <a href='https://github.com/endotnick/nickrodriguez.net'>n.</a>
    </span>
    <span> | </span>
    <span>
      <font-awesome-icon icon='file' /> served by <a class='butter' href='https://buttercms.com'></a>
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
    text-align: center;
    position: fixed;
    max-width: 800px;
    padding: 1em;
    width: 100vw;
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
  .butter, .butter:hover{
    padding-left: 100px;
  }
  .butter {
    background: url('../assets/butter-y.webp') no-repeat;
    background-size: 100px;
  }
  .butter:hover {
    background: url('../assets/butter-b.webp') no-repeat;
    background-size: 100px;
  }
</style>
