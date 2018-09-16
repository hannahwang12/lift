import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'bar-line-chart',
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  },
  data () {
    return {}
  }
}
