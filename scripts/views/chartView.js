(function(module) {

  var chartView = {};

  chartView.tweetChart;
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
          'cyan',
          'cyan',
          'cyan'
        ]
      }]
  };

  chartView.drawChart = function() {
    var ctx = document.getElementById('tweet-chart').getContext('2d');
    chartView.tweetChart = new Chart(ctx,{
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
