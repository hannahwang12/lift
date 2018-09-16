<template>
  <div id="app">
    <img id="title" src="../static/img/logo.svg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    margin: 50px;
  }
  #title{
    margin: 10px 10px;
  }
  body {
    background: #131313;
  }
</style>
