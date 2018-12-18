<template>
  <div id="app">
    <component :is='layout'>
      <router-view/>
    </component>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

const defaultLayout = 'default';
export default {
  name: 'app',
  components: {
    Footer,
  },
  computed: {
    layout() {
      return `${(this.$route.meta.layout || defaultLayout)}-layout`;
    },
  },
};
</script>

<style>
#app {
  font-family: Prompt, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
body {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
ul {
  font-family:'Helvetica', 'Arial', 'Sans-Serif';
  padding: 0px;
  list-style: none;
  font-weight: bold;
}
li {
  display: inline;
  margin-right: 20px;
}
a {
  text-decoration: none;
  color: #999;
}
a:hover {
  text-decoration: underline;
  color: rgb(88, 88, 88);
}
h1 {
  font-size: 3em;
  text-align: center;

}
p {
  font-size: 1.5em;
  line-height: 1.4em;
  color: #333;
}
figure, img{
  max-width: 100%;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.wrapper span {
  width: 100%;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  margin-top: -350px;
}
.fade-enter-active,
.fade-leave-active {
  transition: margin-top 300ms ease-out;
}
.fade-enter-to,
.fade-leave {
  margin-top: 0px;
  opacity: 1
}
.animated {
  transition: all 300ms;
}
</style>
