/* Fill out these functions using Mongoose queries*/
 var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

    mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

   Listing.find({name: 'Library West'}, function(err, user){
    if (err) throw err;

    //object of the user
    console.log(user);
   })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   Listing.findOneAndRemove({code: 'CABL'}, function(err){
      if(err) throw err;

      console.log('CABL Listing deleted!');
   });
};

var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */


   Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '100 Phelbs Lab, Gainesville, 32611, United States'}, function(err, user){
      if (err) throw err;

      console.log(user);
   });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

   Listing.find({}, function(err, users){
    if (err) throw err;

    console.log(users);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();