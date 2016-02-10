//packages:
// Iron Router
// accounts-password
// Restivus


// DataColl a Collection to hold the data value
// Meteor prefers to keep values in a Collection rather than a single variable. 
// This also allows us to store multiple values in a single location if we choose

DataColl = new Mongo.Collection('datastore'); //Initialize the collection
val0=54; //Initial value for data
time0 = new Date().getTime(); // Adding a time value. Not strictly necessary, but useful.