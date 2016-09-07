(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    $('.page-content').hide();
    $('#about').fadeIn();
    $('#about article').hide();

    $('#about').on('click', 'h2', function() {
      console.log(this.className);
      $('article').find(this.className).show();
    });
  };
  module.aboutController = aboutController;
})(window);
