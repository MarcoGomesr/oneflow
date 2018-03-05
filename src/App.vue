<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    appHome: Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 80px auto;
}
</style>
