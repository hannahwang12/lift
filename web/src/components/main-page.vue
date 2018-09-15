<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      temp: {'x': '0,-3.2,6.4,-5.4,8.3,-4.7,3.5,6.2,-4.8,8.4,-4.6,7.7,-4.5,5.5,1.3,-5.9,-5.5,-5.3',
        'y': '0,-2.2,-3.4,-2.6,-3.5,-1.7,-2.5,-3.1,-3.0,-3.1,-2.4,-3.8,-2.7,-3.4,-7.3,-2.6,-3.0,-3.1',
        'z': '0,-9.1,-1.8,-8.1,-0.6,-9.7,-8.9,-4.6,-9.9,-2.4,-8.4,-0.6,-9.9,-6.8,-8.2,-6.4,-7.7,-7.7'}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
