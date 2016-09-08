(function(module) {

  var chartView = {};

  var tweetChart;
  var chartDrawn = false;

  chartView.titles = ['Positive Tweets', 'Negative Tweets', 'Neutral Tweets'];

  chartView.vibes = [];


  /// CHART ///

  var data = {
    labels: chartView.titles,
    datasets: [
      {
        data: chartView.vibes,
        backgroundColor: [
          'bisque',
          'darkgray',
          'burlywood',
          'lightblue',
          'darkseagreen'
        ],
        hoverBackgroundColor: [
          'purple',
          'purple',
          'purple',
          'purple',
          'purple'
        ]
      }]
  };

  chartView.drawChart = function() {
    var ctx = document.getElementById('tweet-chart').getContext('2d');
    tweetChart = new Chart(ctx,{
      type: 'bar',
      data: data,
      options: {
        responsive: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    chartDrawn = true;
  };


  chartView.hideChart = function() {
    $('tweet-chart').hidden = true;
  };

  module.chartView = chartView;

})(window);
