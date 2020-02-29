<template>
  <div class="hello jumbotron">
    <h1>{{ msg }}</h1>
    <h2 class='text-danger'></h2>
    <button class="mt-4 btn btn-success">
            <router-link to="/two" class=" text-dark">Start Game</router-link>
      </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to The Quiz App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
router-link{
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
