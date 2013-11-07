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
exports.image = function(db){
	//console.log(gs);
	/*
	res.contentType("image/jpg");
	gs.open(function(err,gs){
        var stream = gs.stream(true);
        // When the stream is finished close the database
        stream.on("end", function(err) {
            db.close();
        });
        // Pipe out the data
        stream.pipe(res);
	});*/
/*
	gs.open(function(err, imgStream){
		var imgs = imgStream.stream(true);
		imgs.on("end", function(err) {
     	   db.close();
		});
        var fileStream = fs.createWriteStream("./test.jpg");
		imgs.pipe(fileStream);
	});
*/	var img;

	var ObjectID = require('mongodb').ObjectID;
	db.fs.chunks.find({"_id": new ObjectID('526eb42094d83a404305329d')}, function(err, docs) {
		//ERROR handling to see if the record was found.
		if( err || !docs)
			console.log("No menu items found");
		else {
			//if found store into a temporary variable
			image = docs;
			//console.log(docs);
			base = image[0].data.buffer
			img = new Buffer(base, 'binary').toString('base64');
		}
	});

	return function(req, res){
		res.render('image', { title: 'Restaurant Reservator Tool', data: img});
	}
};