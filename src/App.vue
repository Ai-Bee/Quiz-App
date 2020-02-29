<template>
  <div id="app">
    <router-view>
      <one></one>
    </router-view>
      
  </div>
</template>

<script>
import one from "./components/one"
import two from "./components/two"
export default {
  name: 'App',
  components:{one,two}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
