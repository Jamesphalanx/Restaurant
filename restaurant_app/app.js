/**
 * Restaurant App.js, Built using NodeJS and Express
 * By: James Shin
 * Date: Oct 10, 2013
 * Professor: Stanley Pieda
 * Email: piedas@algonquincollege.com 
 */

/**
 * app.js
 *	
 * This app is to set the server and its properites, it uses mongojs to connect
 * to the database and runs express to set the NodeJS properties.
 */

/**
 * Module dependencies.
 * uses the NodeJS global variable, require, to 
 * direct all necessary dependencies into a variable. 
 */
//require the express.js so that it can be used through out this app.js
var express = require('express');
//sets the directory of the routes, this is where the index.js is and loads the index
var routes = require('./routes');
//sets the directory of the reservation, this will be where the reservation web page
//directory will be.
var reservation = require('./routes/reservation');
//require all functionalities of http.js and path.js and insert into variable. 
var http = require('http');
var path = require('path');

// database using mongojs, sets the current database as "Restaurant"
var databaseUrl = "jamesphalanx:password@ds053668.mongolab.com:53668/restaurant_db";
//gets 3 collections from the "Restaurant" database. "reservation", "menu" and "users"
var collections = ["reservations", "menu"];

//sets a variable 'express' as the library express, this allows us to use
//the Express functionaities given to us.
var app = express();

//File I/O
/*
var fileSystem = require('fs');
//Simple FILE IO.
fileSystem.writeFile("./test", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
*/
/**
 * all environments variables, created using express
 */
//set the port of the application, this will allow us to use port 3000 as the 
//hosting port.
app.set('port', process.env.PORT || 3000);
//set where the views are stored, in MVC design, '__dirname' is the directory name.
//This case will be localhost.
app.set('views', __dirname + '/views');
//The view engine will be set as jade, So that it will look for .jade as my HTML builder.
app.set('view engine', 'jade');
/*
 This is a middleware provided by express
 sets a default icon for the web application, this icon can be changed accordingly.
 To change, . favicon(__dirname + '/path/to/myfavicon.ico'), can be used.
*/
app.use(express.favicon());
/*
 logs the response status on to the node instance, it outputs according to the program
 For example, it will print out the get, directory, and the time it takes
*/
app.use(express.logger('dev'));
/*
 parses the request body if the forms are submitted with encoded body.
*/
app.use(express.bodyParser());
/*
 This simulates a DELETE and PUT; HTML. allowing us to use app.delete, app.put instead of
 using app.post all the time, 'when _method is passed'.
*/
app.use(express.methodOverride());
/*
 this command beings the parse sequence of the cookie parser, and populates
 req.cookies
*/
app.use(express.cookieParser('your secret here'));
/*
 This is the session, mainly used for keeping track of users while they browse 
 through my web application.
*/
app.use(express.session());
/*
 runs the routes code, to set where the webpage is directed towards
*/
app.use(app.router);
/*
 The static server with the given root path.
*/
app.use(express.static(path.join(__dirname, 'public')));

console.log("starting DB...");
//
var db = require("mongojs").connect(databaseUrl, collections);

//Error Handling Handles 500 error, might need to develop more surroding this.
//TODO
/*
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});
*/
//Example of a files write in Node, will create a simple log file Commented out
//since it is not used.
/*
var fs = require('fs');
fs.writeFile("Log File", "H", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});*/

// handle 404 errors by redirect to 404
//*MUST BE LAST OF APP.USE
app.use(function(req,res){
    res.render('404.jade', {title: "Page not found"});
});

//This is the code for creating a server on the specific port.
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//initate the socket io, and allow it to listen to the current active server.
var io = require('socket.io').listen(server);


//routes to specific pages, either index or reservation.
//anything other than indes or reservation throws a 404 error.
//sends the db.menu collection to index, and the whole database to reservation
app.get('/', routes.index(db.menu));
app.get('/reservation', reservation.reservation(db, io));
