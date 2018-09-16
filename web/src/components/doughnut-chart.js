import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  name: 'doughnut-chart',
  mixins: [reactiveProp],
  props: ['pie_data', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  data () {
    return {}
  }
}
