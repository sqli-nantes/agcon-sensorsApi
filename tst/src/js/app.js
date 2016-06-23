"use strict";

var threerest = require('threerest');
//Ajout de la base de donnée
var mongoose = require('mongoose');

import * as ServiceSensors from "./services/serviceSensors";
//import * as ServiceRooms from "./services/serviceRooms";

import express from "express";

var app = express();

// Connexion à la base de donnée mongo local
mongoose.connect('mongodb://localhost/connectedagency', function(err) {
  if (err) { throw err; }
});

// Create a mongoose model 'Sensor'
var SensorSchema = new mongoose.Schema({
    id : { type : Number, required : true },
    name : { type : String, required : true }
});

// Create a mongoose model 'Room'
var RoomSchema = new mongoose.Schema({
    id : { type : Number, required : true },
    name : { type : String, required : true }
});

var Sensor = mongoose.model('sensor', SensorSchema);
var Room = mongoose.model('room', RoomSchema);

app.get("/", function(req, res){
  res.send("hello world");
});


// load the service Test
threerest.ServiceLoader.loadService(app, new ServiceSensors.default(Sensor));
//threerest.ServiceLoader.loadService(app, new ServiceRooms.default(Room));

app.listen(8080, () => {console.log("Express start...");});
