'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listings = require('./listings.json');

/* Connect to your database */
  mongoose.connect(config.db.uri);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function() {
      //we're connected:
    console.log("Connected to the db!");
  })
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

 for (var i = 0; i < listings.entries.length; i++){

    var currentListing = listings.entries[i];

    var currentEntry = new Listing({
    //added commented line below, didnt uncomment to test because of duplicate creation in database
    //  currentListing.coordinates = currentListing.entries[i].coordinates || {};
      code: currentListing.code,
      name: currentListing.name,
      coordinates: currentListing.coordinates,
      address: currentListing.address
    });

    currentEntry.save(function(err){
      if (err) throw err;
    });
 }
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */