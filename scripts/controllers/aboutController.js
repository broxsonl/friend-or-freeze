(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    $('.page-content').hide();
    $('#about').fadeIn();
    $('#about article').hide();

    $('#about').on('click', 'h2', function() {
      console.log('class name clicked ' + this.className);
      $('article').hide();
      $('.' + this.className).fadeIn();
    });
  };
  module.aboutController = aboutController;
})(window);
