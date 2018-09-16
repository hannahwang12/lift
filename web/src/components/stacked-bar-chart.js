import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  name: 'stacked-bar-chart',
  mixins: [reactiveProp],
  props: ['stacked_data', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  data () {
    return {}
  }
}
