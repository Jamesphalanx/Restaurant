/**
 * Restaurant App.js, Built using NodeJS and Express
 * By: James Shin
 * Date: Oct 10, 2013
 * Professor: Stanley Pieda
 * Email: piedas@algonquincollege.com 
 */

/*
 * GET reservation page. This page is still under constuction.
 * This page will allow the user to select a time and place for the 
 * table reservation. 
 */

exports.reservation = function(db){
	var user;
	db.reservations.find(function(err, docs) {
		if( err || !docs)
			console.log("");
		else {
			user = docs;
		}
	});
	return function(req, res){
		res.render('reservation', { title: 'Restaurant Reservator Tool', data: user});
	}
};