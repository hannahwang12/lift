<template>
  <div>
    <div class="btn-primary">
      asfsdfs
    </div>
    <div class="card">
      <bubble-chart></bubble-chart>
    </div>
    <div class="card">
      <div class="options">
      </div>
      <bar-line-chart
      :data="this.data"
      :options="this.options"
    ></bar-line-chart>
    </div>
   <div class="card">
    <bar-line-chart
    :data="this.data"
    :options="this.options"
  ></bar-line-chart>
  </div>
  </div>
</template>

<script>
import BarLineChart from './bar-line-chart.js'
import BubbleChart from './bubble-chart.js'
export default {
  name: 'HelloWorld',
  components: {BubbleChart, BarLineChart},
  data () {
    return {
      temp: {'x': '0,-3.2,6.4,-5.4,8.3,-4.7,3.5,6.2,-4.8,8.4,-4.6,7.7,-4.5,5.5,1.3,-5.9,-5.5,-5.3',
        'y': '0,-2.2,-3.4,-2.6,-3.5,-1.7,-2.5,-3.1,-3.0,-3.1,-2.4,-3.8,-2.7,-3.4,-7.3,-2.6,-3.0,-3.1',
        'z': '0,-9.1,-1.8,-8.1,-0.6,-9.7,-8.9,-4.6,-9.9,-2.4,-8.4,-0.6,-9.9,-6.8,-8.2,-6.4,-7.7,-7.7'},
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Weight',
            borderColor: '#9a5fae',
            data: [50, 50, 50, 50, 10, 40, 39, 80, 40, 20, 12, 11],
            // Changes this dataset to become a line
            type: 'line'
          },
          {
            label: 'Reps',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      options: {responsive: false, maintainAspectRatio: false}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    background-color: white;
    display: inline-block;
    margin: 10px;
    border: 3px solid #FAD961;
    border-radius: 25px;
  }
</style>
