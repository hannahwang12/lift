<template>
  <div id="app">
    <img src="../static/img/logo.svg">
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
    text-align: center;
    margin-top: 60px;
  }
  body {
    background: #000;
  }
</style>
