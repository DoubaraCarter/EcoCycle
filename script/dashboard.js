    // Sample data for a line chart spanning a year
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Recycling',
          data: [10, 15, 20, 25, 30, 35, 40, 35, 30, 25, 20, 15], // Sample recycling data for each month
          borderColor: '#009900',
          borderWidth: 2,
          fill: false
        }, {
          label: 'Donations',
          data: [5, 8, 10, 12, 15, 18, 20, 18, 15, 12, 8, 5], // Sample donations data for each month
          borderColor: '#FF6384',
          borderWidth: 2,
          fill: false
        }, {
          label: 'Waste Disposal',
          data: [15, 18, 22, 25, 30, 28, 24, 22, 20, 18, 15, 12], // Sample waste disposal data for each month
          borderColor: '#FFFF00',
          borderWidth: 2,
          fill: false
        }]
      };
  
      // Get the context of the canvas element
      var ctx = document.getElementById('myLineChart').getContext('2d');
  
      // Create a line chart
      var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });