/**
 * Restaurant App.js, Built using NodeJS and Express
 * By: James Shin
 * Date: Oct 10, 2013
 * Professor: Stanley Pieda
 * Email: piedas@algonquincollege.com 
 */

/*
 * GET home page, it retrieves only the db.menu collection and returns the today's 
 * menu to be build by jade.
 */

/**
 * 
 */
exports.index = function(db){
	var db_menu;
	//set a date variable
	var date = new Date();
	//create a array with all dates listed.
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	//from the date api library, get the current date's name using the array.
	var n = weekday[date.getDay()];
	//find only the records from the menu collection that holds today's date.
	db.find({"day":n}, function(err, docs) {
		//ERROR handling to see if the record was found.
		if( err || !docs)
			console.log("No menu items found");
		else {
			//if found store into a temporary variable
			db_menu = docs;
		}
	});
	//return this function to be rendered by express to create a page.
	return function(req, res){
		//set the page as index, title of "Restaurant Reservator Tool" and pass the menu
		//database collection.
		res.render('index', { title: 'Restaurant Reservator Tool', menu: db_menu});
	}
};