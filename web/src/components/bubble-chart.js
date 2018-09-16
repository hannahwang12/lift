import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  name: 'bubble-chart',
  mounted () {
    this.renderChart(this.data, this.options)
  },
  data () {
    return {
      data: {
        // X Value = date
        x: [20, 30, 40, 30, 30, 25, 30, 30],
        // Y Value = reps
        y: [20, 30, 40, 30, 30, 25, 30, 30],
        // Bubble radius = weight, color = exercise
        r: [20, 30, 40, 30, 30, 25, 30, 30]
      },
      options: {responsive: false, maintainAspectRatio: false}
    }
  }
}
