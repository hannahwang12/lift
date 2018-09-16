<template>
  <div id="app">
    <img id="title" src="../static/img/logo.svg">
    <div id="welcome">welcome back, ariel</div>
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
  #title {
    margin: 10px 10px;
    padding-left: 12px;
    padding-bottom: 10px;
  }
  #welcome {
    color: #FAD961;
    text-align: right;
    position: absolute;
    top: 70px;
    right: 100px;
    font-size: 40px;
    z-index: 100;
    font-family: Quicksand;
  }
  body {
    background-image: url("../static/img/connectwork.png");;
  }
</style>
