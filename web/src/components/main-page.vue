<template>
  <div>
    <div class="card">
      <bar-line-chart
        :chartData="this.data"
        :options="this.options"
        :width="600"
        :height="320"
      ></bar-line-chart>
      <select id="dropdown" ></select>
    </div>
    <div class="card">
      <doughnut-chart 
        :width="380" 
        :height="320">
      </doughnut-chart>
      <div class="textbox">
        <div class='cardtitle' style="font-size: 24 !important;">my routine</div>
      </div>   
    </div>
    <div class="card">
      <doughnut-chart
        :chartData="this.pie_data"
        :options="this.pie_options"
        :width="380"
        :height="320"
      ></doughnut-chart>
    </div>
    <div class="card">
      <stacked-bar-chart
        :chartData="this.stacked_data"
        :options="this.stacked_options"
        :width="600"
        :height="320"
      ></stacked-bar-chart>
    </div>
    
    
  </div>
</template>

<script>
import BarLineChart from './bar-line-chart.js'
import BubbleChart from './bubble-chart.js'
import DoughnutChart from './doughnut-chart.js'
import StackedBarChart from './stacked-bar-chart.js'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  components: {BubbleChart, BarLineChart, DoughnutChart, StackedBarChart},
  methods: {
    dropdownOptions (user) {
      const dropdown = document.getElementById('dropdown')
      axios.get(`https://lift-3e738.firebaseio.com/users/${user}.json`)
        .then((response) => {
          let exercises = Object.keys(response.data)
          exercises.map((elem) => {
            var option = document.createElement("OPTION");
            option.setAttribute('value', elem)
            option.text = elem
            console.log(option)
            dropdown.appendChild(option)
          })
          console.log(dropdown)
        })
      dropdown.onchange = () => {
        this.dropdownChange();
      }
    },

    dropdownChange () {
      const option = document.getElementById('dropdown').value
      console.log(option)
      this.days = [];
      this.weights = []
      this.reps = []
      this.getData(this.user, option)
      
    },

    getData (user, exercise) {
      axios.get(`https://lift-3e738.firebaseio.com/users/${user}/${exercise}.json`)
        .then((response) => {
          this.fb_data = response.data
          this.parseData()
          this.fillData()
        })
    },

    getPieData (user) {
      axios.get(`https://lift-3e738.firebaseio.com/users/${user}.json`)
        .then((response) => {
          this.fb_pie_data = response.data
          this.parsePieData()
          this.parseStackedData()
          this.fillPieData()
          this.fillStackedData()
          console.log(this.fb_pie_data)
        })
    },

    parseData () {
      let session = this.fb_data
      for (var key in session) {
        if (session[key].date.slice(0, -5) == this.days[this.days.length - 1]) {
          this.weights[this.weights.length - 1] = session[key].weight
          this.reps[this.reps.length - 1] = session[key].reps
        } else {
          this.days.push(session[key].date.slice(0, -5))
          this.weights.push(session[key].weight)
          this.reps.push(session[key].reps)
        }
        
      }
      console.log(this.reps)
    },

    fillData () {
      this.data = {
        labels: this.days,
        datasets: [
          {
            label: 'Weight',
            borderColor: '#FC6B3A',
            borderWidth: 2.5,
            backgroundColor: 'transparent',
          //  backgroundColor: 'rgba(255, 255, 255, 0.4)',
          //  data: [10, 10, 10, 10, 10, 10, 10, 10],
            data: this.weights,
            // Changes this dataset to become a line
            type: 'line',
            yAxisID: 'weight-axis'
          },
          {
            label: 'Reps',
            backgroundColor: '#FAD961',
            data: this.reps,
            yAxisID: 'reps-axis'

          //  data: [9, 4, 5, 3, 8, 8, 10, 1]
          },
        ]
      }
    },

    parsePieData() {
      let fb_pie_data = this.fb_pie_data
      for (var key in fb_pie_data) {
        this.exercises.push(key)        
        this.exercise_frequency.push(Object.keys(fb_pie_data[key]).length)
      }
      console.log(this.exercises)
      console.log(this.exercise_frequency)
    },

    fillPieData () {
      this.pie_data = {
        labels: this.exercises,
        datasets: [
          {
            label: 'Weight',
            borderColor: 'rgba(0, 0, 0, 0.2)',
          //  data: [10, 10, 10, 10, 10, 10, 10, 10],
            data: this.exercise_frequency,
            backgroundColor: ['#FC6B3A', 'orange', '#FAD961'],
            // Changes this dataset to become a line
            type: 'doughnut',
            // yAxisID: 'weight-axis'
          }
        ]
      }
    },

    parseStackedData () {
      let data = this.fb_pie_data
      this.trend_exercises = Object.keys(data)
      for (var key in data) {
     //   exercises_obj.key = 
      }
    },

    fillStackedData () {
      this.stacked_data = {
        labels: this.days,
        datasets: [
          {
            label: 'bench',
            borderColor: 'rgba(0, 0, 0, 0.2)',
            data: [9, 4, 5, 3, 8, 8, 10, 16, 16],
          //  data: [10, 10, 10, 10, 10, 10, 10, 10],
          //  data: this.exercise_frequency,
            backgroundColor: '#FC6B3A',
            // Changes this dataset to become a line
            type: 'bar',
            // yAxisID: 'weight-axis'
          },
          {
            label: 'curl',
            borderColor: 'rgba(0, 0, 0, 0.2)',
            data: [15, 15, 18, 18, 18, 20, 20, 18, 18],
          //  data: [10, 10, 10, 10, 10, 10, 10, 10],
            // data: this.exercise_frequency,
            backgroundColor: 'orange',
            // Changes this dataset to become a line
            type: 'bar',
            // yAxisID: 'weight-axis'
          },
          {
            label: 'squat',
            borderColor: 'rgba(0, 0, 0, 0.2)',
            data: [0, 10, 0, 10, 0, 12, 12, 0, 12],
          //  data: [10, 10, 10, 10, 10, 10, 10, 10],
            // data: this.exercise_frequency,
            backgroundColor: '#FAD961',
            // Changes this dataset to become a line
            type: 'bar',
            // yAxisID: 'weight-axis'
          }
        ]
      }
    }
  },
  async mounted () {
    this.dropdownOptions(this.user)
    this.getData(this.user, this.exercise)
    this.getPieData(this.user)
  },
  data () {
    return {
      user: 'hannah',
      exercise: 'bench',
      days: [],
      weights: [],
      reps: [],
      fb_data: {},
      fb_pie_data: {},
      exercises: [],
      exercise_frequency: [],
      trend_exercises: [],
      exercises_obj: {},
      data: null,
      pie_data: null,
      stacked_data: null,
      options: {
        title: {
          display: true,
          text: 'trends',
          fontSize: 24,
          fontStyle: 'normal',
        },
        layout: {
          padding: {
              left: 5,
              right: 5,
              top: 18,
              bottom: 20
          }
        },
        legend: {
          position: 'bottom'
        },
        responsive: false, 
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            id: 'weight-axis',
            type: 'linear',
            position: 'left',
            ticks: {
              beginAtZero: true,
              max: 25,
            },
            scaleLabel: {
              labelString: 'weight (lbs)',
              display: true,
              lineHeight: 2
            }
          }, {
            id: 'reps-axis',
            type: 'linear',
            position: 'right',
            labelString: 'reps',
            ticks: {
              beginAtZero: true,
              max: 25,
            },
            scaleLabel: {
              labelString: 'reps',
              display: true,
              lineHeight: 2
            }
          }]
        }
      },
      pie_options: {
        title: {
          display: true,
          text: 'exercises',
          fontSize: 24,
          fontStyle: 'normal',
        },
        layout: {
          padding: {
              left: 5,
              right: 5,
              top: 18,
              bottom: 20
          }
        },
        legend: {
          position: 'bottom',
        },     
      },
      stacked_options: {
        title: {
          display: true,
          text: 'workout trends',
          fontSize: 24,
          fontStyle: 'normal',
        },
        layout: {
          padding: {
              left: 5,
              right: 5,
              top: 18,
              bottom: 20
          }
        },
        legend: {
          position: 'bottom',
        },   
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                  labelString: 'weight (lbs)',
                  display: true,
                  lineHeight: 2
                }
            }]
        } 
      }
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
    position: relative;
  }
  .options {
    margin: 20px;
  }
  table, tr, td {
    border: 1px solid black;
    text-align: centre;
  }
  #dropdown {
    position: absolute;
    top: 12px;
    right: 20px;
    color: #FC6B3A;
    border-radius: 10px;
    border: 1px solid #FC6B3A; 
    padding: 5px;
    font-size: 14px;
  }
  .textbox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, Helvetica, sans-serif;
  }
  .cardtitle {
    font-size: 24 !important;
    font-style: normal;
  }

</style>
