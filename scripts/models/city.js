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
        'zip INTEGER NOT NULL, ' +
        'state VARCHAR(255) NOT NULL, ' +
        'city VARCHAR (255), ' +
        'lat FLOAT NOT NULL, ' +
        'lng FLOAT NOT NULL);',
      function() {
        console.log('Cities table successfully set up.');
      }
    );
    City.fetchCities();
  };


  //insert record in cities table for each City
  City.prototype.insertRecord = function() {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO cities (zip, state, city, lat, lng) VALUES (?, ?, ?, ?, ?);',
          'data': [this.zip, this.state, this.city, this.lat, this.lng],
        }
      ]
    );
  };

  //getting our cities if not already in table
  City.fetchCities = function() {
    webDB.execute(
      'SELECT * FROM cities',
    function(rows) {
      if (rows.length) {
        console.log('already there');
      }else {
        $.getJSON('/data/cities.json', function(rawData) {
          rawData.forEach(function(item) {
            var city = new City(item); // Instantiate a city based on item from JSON
            city.insertRecord(); // Cache the article in DB
          });
        });
      }
    });
  };

  City.createTable();

  module.City = City;

})(window);
