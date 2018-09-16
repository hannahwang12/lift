<template>
  <div id="app">
    <img id="title" src="../static/img/logo.svg">
    <div style="color: #FAD961 !important; text-align: right; position: absolute; top: 70px; right: 100px; font-size: 40px; z-index: 100">welcome back, ariel</div>
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
    padding-left: 12px;
  }
  body {
    background-image: url("../static/img/connectwork.png");;
  }
</style>
