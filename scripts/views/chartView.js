(function(module) {

  var chartView = {};

  var tweetChart;
  chartView.chartDrawn = false;

  chartView.titles = ['Positive Tweets', 'Negative Tweets', 'Neutral Tweets'];

  chartView.vibes = [];


  /// CHART ///

  var data = {
    labels: chartView.titles,
    datasets: [
      {
        data: chartView.vibes,
        backgroundColor: [
          'navy',
          'red',
          'white'
        ],
        hoverBackgroundColor: [
          'purple',
          'purple',
          'purple'
        ]
      }]
  };

  chartView.drawChart = function() {
    var ctx = document.getElementById('tweet-chart').getContext('2d');
    tweetChart = new Chart(ctx,{
      type: 'doughnut',
      data: data,
      options: {
        responsive: false
      }
    });
    chartDrawn = true;
  };


  module.chartView = chartView;

})(window);
