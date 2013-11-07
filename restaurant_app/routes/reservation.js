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

exports.reservation = function(db, io){

	//allow connection using the socket io, this is where the data will be received and will query the database.
	//once the database has been queried it will emit the data back to the page.
	io.sockets.on('connection', function(socket){
		socket.on('getReservation', function(data){
			//look for database reservation that has the specifi date and time.
			db.reservations.find({$and: [{"date": data.date}, {"start_time": data.start},{"end_time": data.end}]}, function(err, value){
				if(err) console.log('reservation error');
				//emit the table reserved data.
				socket.emit('reservationData', value);
			});
		});
		//to grab the table reservation data and insert into database
		socket.on('setReservation', function(data){
			db.reservations.insert(data);
			//emit a completed insert message
			socket.emit('doneInsert');
		});
	});
	//return the page to be created.
	return function(req, res){
		res.render('reservation', { title: 'Restaurant Reservator Tool'});
	}
};