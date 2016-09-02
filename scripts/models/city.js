(function(module) {

  //create a city object:
  function City(opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  City.allCities = []; //empty array with all our City objects

  //setting up websql table for our cities
  City.createTable = function() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS cities (' +
        'id INTEGER PRIMARY KEY, ' +
        'zip VARCHAR(255) NOT NULL, ' +
        'state VARCHAR(255) NOT NULL, ' +
        'city VARCHAR (255), ' +
        'lat FLOAT, ' +
        'long FLOAT;',
      function() {
        console.log('Cities table successfully set up.');
      }
    );
  };





})(window);
