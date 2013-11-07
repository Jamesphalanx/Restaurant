/**
 * Restaurant App.js, Built using NodeJS and Express
 * By: James Shin
 * Date: Nov 4, 2013
 * Professor: Stanley Pieda
 * Email: piedas@algonquincollege.com 
 */

 /*
 	The javascript page for reservation.
 */

$(document).ready(function(){

	//set today's Date
	var date = new Date();
	//get the socket io connection on the client end.
	var socket = io.connect('http://localhost:3000');
	//global variables so that the reservation can be set using a specific format.
	var selectedDay;
	var selectedMonth;
	var selectedYear;
	var mashedDay;
	//set a new array with months so that the main page can display the name of the month rather than
	// a number representation of the month, JANUARY IS 0!!!
	var month=new Array(12);
	month[0]="January";
	month[1]="February";
	month[2]="March";
	month[3]="April";
	month[4]="May";
	month[5]="June";
	month[6]="July";
	month[7]="August";
	month[8]="September";
	month[9]="October";
	month[10]="November";
	month[11]="December";
	//grab the month of today
	var thisMonth = month[date.getMonth()];
	$('.nav-tabs').button();

	/**
	 * this function is to reset and btn-success class in the button group
	 * so that when another button is selected it will give a button group with no color 
	 * Also hide both table rows.
	 */
	function resetBtns(){
		var allBtns = $('#res-button-grp').find("label");
		$(allBtns).each(function(){
			$(this).removeClass('btn-success');
		});
		$('#res-well-1').hide();
		$('#res-well-2').hide();
	}

	//Confirm reservation button click
	$('#res-confirm').click(function(){
		//get the value of the time current time slider value
		var a = $('.res-time-slider').slider('getValue');
		//emit all information to be inserted
		socket.emit('setReservation', {date: mashedDay, start_time: parseInt($(a).val()), end_time: parseInt($(a).val()) + 1, 
			table_name: $('#res-table').text(), reserver: "James"});

	});
	//when the insert done message is recived from the server, alert the client and reload the page
	socket.on('doneInsert', function(){
		alert('Reserved');
		location.reload();
	});

	//Select table buttons, when clicked add the appropriate HTML in the table
	$('#res-well1-table1').click(function(){
		$('#res-table').html('table1');
	});
	$('#res-well1-table2').click(function(){
		$('#res-table').html('table2');
	});
	$('#res-well1-table3').click(function(){
		$('#res-table').html('table3');
	});
	$('#res-well2-table1').click(function(){
		$('#res-table').html('table4');
	});
	$('#res-well2-table2').click(function(){
		$('#res-table').html('table5');
	});
	$('#res-well2-table3').click(function(){
		$('#res-table').html('table6');
	});

	/**
	 * TODO: Recompile into one function
	 * Sets the current date when the specific date button is selected. for each day of the week.
	 */
	$('#res-monday-btn').click(function(){
		resetBtns();
		$(this).addClass('btn-success');
		$('#res-date-text').html('Monday');
		var selectedDate = new Date();
		var dateAddition = parseInt($('#res-monday-btn input').val());
		var millisecondOffset = dateAddition * 24 * 60 * 60 * 1000;
		selectedDate.setTime(selectedDate.getTime() + millisecondOffset);
		thisMonth = month[selectedDate.getMonth()];
		if(selectedDate.getMonth().toString().length == 1){
			selectedMonth = "0" + selectedDate.getMonth().toString();
		}else{
			selectedMonth = selectedDate.getMonth().toString();
		}
		if(selectedDate.getDate().toString().length == 1){
			selectedDay = "0" + selectedDate.getDate().toString();
		}else{
			selectedDay = selectedDate.getDate().toString();
		}
		selectedYear = selectedDate.getFullYear().toString();
		mashedDay = selectedDay + selectedMonth + selectedYear;
		$('#res-date2-text').html( ', ' + thisMonth + " " + selectedDate.getDate() + " " + selectedDate.getFullYear());
	});

	$('#res-tuesday-btn').click(function(){
		resetBtns();
		$(this).addClass('btn-success');
		$('#res-date-text').html('Tuesday');
		var selectedDate = new Date();
		var dateAddition = parseInt($('#res-tuesday-btn input').val());
		var millisecondOffset = dateAddition * 24 * 60 * 60 * 1000;
		selectedDate.setTime(selectedDate.getTime() + millisecondOffset);
		thisMonth = month[selectedDate.getMonth()];
		if(selectedDate.getMonth().toString().length == 1){
			selectedMonth = "0" + selectedDate.getMonth().toString();
		}else{
			selectedMonth = selectedDate.getMonth().toString();
		}
		if(selectedDate.getDate().toString().length == 1){
			selectedDay = "0" + selectedDate.getDate().toString();
		}else{
			selectedDay = selectedDate.getDate().toString();
		}
		selectedYear = selectedDate.getFullYear().toString();
		mashedDay = selectedDay + selectedMonth + selectedYear;
		$('#res-date2-text').html( ', ' + thisMonth + " " + selectedDate.getDate() + " " + selectedDate.getFullYear());
	});

	$('#res-wendsday-btn').click(function(){
		resetBtns();
		$(this).addClass('btn-success');
		$('#res-date-text').html('Wendsday');
		var selectedDate = new Date();
		var dateAddition = parseInt($('#res-wendsday-btn input').val());
		var millisecondOffset = dateAddition * 24 * 60 * 60 * 1000;
		selectedDate.setTime(selectedDate.getTime() + millisecondOffset);
		thisMonth = month[selectedDate.getMonth()];
		if(selectedDate.getMonth().toString().length == 1){
			selectedMonth = "0" + selectedDate.getMonth().toString();
		}else{
			selectedMonth = selectedDate.getMonth().toString();
		}
		if(selectedDate.getDate().toString().length == 1){
			selectedDay = "0" + selectedDate.getDate().toString();
		}else{
			selectedDay = selectedDate.getDate().toString();
		}
		selectedYear = selectedDate.getFullYear().toString();
		mashedDay = selectedDay + selectedMonth + selectedYear;
		$('#res-date2-text').html( ', ' + thisMonth + " " + selectedDate.getDate() + " " + selectedDate.getFullYear());
	});

	$('#res-thursday-btn').click(function(){
		resetBtns();
		$(this).addClass('btn-success');
		$('#res-date-text').html('Thursday');
		var selectedDate = new Date();
		var dateAddition = parseInt($('#res-thursday-btn input').val());
		var millisecondOffset = dateAddition * 24 * 60 * 60 * 1000;
		selectedDate.setTime(selectedDate.getTime() + millisecondOffset);
		thisMonth = month[selectedDate.getMonth()];
		if(selectedDate.getMonth().toString().length == 1){
			selectedMonth = "0" + selectedDate.getMonth().toString();
		}else{
			selectedMonth = selectedDate.getMonth().toString();
		}
		if(selectedDate.getDate().toString().length == 1){
			selectedDay = "0" + selectedDate.getDate().toString();
		}else{
			selectedDay = selectedDate.getDate().toString();
		}
		selectedYear = selectedDate.getFullYear().toString();
		mashedDay = selectedDay + selectedMonth + selectedYear;
		$('#res-date2-text').html( ', ' + thisMonth + " " + selectedDate.getDate() + " " + selectedDate.getFullYear());
	});

	$('#res-friday-btn').click(function(){
		resetBtns();
		$(this).addClass('btn-success');
		$('#res-date-text').html('Friday');
		var selectedDate = new Date();
		var dateAddition = parseInt($('#res-friday-btn input').val());
		var millisecondOffset = dateAddition * 24 * 60 * 60 * 1000;
		selectedDate.setTime(selectedDate.getTime() + millisecondOffset);
		thisMonth = month[selectedDate.getMonth()];
		if(selectedDate.getMonth().toString().length == 1){
			selectedMonth = "0" + selectedDate.getMonth().toString();
		}else{
			selectedMonth = selectedDate.getMonth().toString();
		}
		if(selectedDate.getDate().toString().length == 1){
			selectedDay = "0" + selectedDate.getDate().toString();
		}else{
			selectedDay = selectedDate.getDate().toString();
		}
		selectedYear = selectedDate.getFullYear().toString();
		mashedDay = selectedDay + selectedMonth + selectedYear;
		$('#res-date2-text').html( ', ' + thisMonth + " " + selectedDate.getDate() + " " + selectedDate.getFullYear());
	});

	$('#res-saturday-btn').click(function(){
		resetBtns();
		$(this).addClass('btn-success');
		$('#res-date-text').html('Saturday');
		var selectedDate = new Date();
		var dateAddition = parseInt($('#res-saturday-btn input').val());
		var millisecondOffset = dateAddition * 24 * 60 * 60 * 1000;
		selectedDate.setTime(selectedDate.getTime() + millisecondOffset);
		thisMonth = month[selectedDate.getMonth()];
		if(selectedDate.getMonth().toString().length == 1){
			selectedMonth = "0" + selectedDate.getMonth().toString();
		}else{
			selectedMonth = selectedDate.getMonth().toString();
		}
		if(selectedDate.getDate().toString().length == 1){
			selectedDay = "0" + selectedDate.getDate().toString();
		}else{
			selectedDay = selectedDate.getDate().toString();
		}
		selectedYear = selectedDate.getFullYear().toString();
		mashedDay = selectedDay + selectedMonth + selectedYear;
		$('#res-date2-text').html( ', ' + thisMonth + " " + selectedDate.getDate() + " " + selectedDate.getFullYear());
	});

	$('#res-sunday-btn').click(function(){
		resetBtns();
		$(this).addClass('btn-success');
		$('#res-date-text').html('Sunday');
		var selectedDate = new Date();
		var dateAddition = parseInt($('#res-sunday-btn input').val());
		var millisecondOffset = dateAddition * 24 * 60 * 60 * 1000;
		selectedDate.setTime(selectedDate.getTime() + millisecondOffset);
		thisMonth = month[selectedDate.getMonth()];
		if(selectedDate.getMonth().toString().length == 1){
			selectedMonth = "0" + selectedDate.getMonth().toString();
		}else{
			selectedMonth = selectedDate.getMonth().toString();
		}
		if(selectedDate.getDate().toString().length == 1){
			selectedDay = "0" + selectedDate.getDate().toString();
		}else{
			selectedDay = selectedDate.getDate().toString();
		}
		selectedYear = selectedDate.getFullYear().toString();
		mashedDay = selectedDay + selectedMonth + selectedYear;
		$('#res-date2-text').html( ', ' + thisMonth + " " + selectedDate.getDate() + " " + selectedDate.getFullYear());
	});

	//from the date api library, get the current date's name using the array.
	/*initialize all the button values so that the value of the day can change appropriately*/
	var todayDate = date.getDay();
	switch(todayDate)
	{
		case 1:
			$('#res-monday-btn input').val(0);
			$('#res-tuesday-btn input').val(1);
			$('#res-wendsday-btn input').val(2);
			$('#res-thursday-btn input').val(3);
			$('#res-friday-btn input').val(4);
			$('#res-saturday-btn input').val(5);
			$('#res-sunday-btn input').val(6);
			$('#res-monday-btn').trigger('click');
		break;
		case 2:
			$('#res-tuesday-btn input').val(0);
			$('#res-wendsday-btn input').val(1);
			$('#res-thursday-btn input').val(2);
			$('#res-friday-btn input').val(3);
			$('#res-saturday-btn input').val(4);
			$('#res-sunday-btn input').val(5);
			$('#res-monday-btn input').val(6);
			$('#res-tuesday-btn').trigger('click');
		break;
		case 3:
			$('#res-wendsday-btn input').val(0);
			$('#res-thursday-btn input').val(1);
			$('#res-friday-btn input').val(2);
			$('#res-saturday-btn input').val(3);
			$('#res-sunday-btn input').val(4);
			$('#res-monday-btn input').val(5);
			$('#res-tuesday-btn input').val(6);
			$('#res-wendsday-btn').trigger('click');
		break;
		case 4:
			$('#res-thursday-btn input').val(0);
			$('#res-friday-btn input').val(1);
			$('#res-saturday-btn input').val(2);
			$('#res-sunday-btn input').val(3);
			$('#res-monday-btn input').val(4);
			$('#res-tuesday-btn input').val(5);
			$('#res-wendsday-btn input').val(6);
			$('#res-thursday-btn').trigger('click');
		break;
		case 5:
			$('#res-friday-btn input').val(0);
			$('#res-saturday-btn input').val(1);
			$('#res-sunday-btn input').val(2);
			$('#res-monday-btn input').val(3);
			$('#res-tuesday-btn input').val(4);
			$('#res-wendsday-btn input').val(5);
			$('#res-thursday-btn input').val(6);
			$('#res-friday-btn').trigger('click');
		break;
		case 6:
			$('#res-saturday-btn input').val(0);
			$('#res-sunday-btn input').val(1);
			$('#res-monday-btn input').val(2);
			$('#res-tuesday-btn input').val(3);
			$('#res-wendsday-btn input').val(4);
			$('#res-thursday-btn input').val(5);
			$('#res-friday-btn input').val(6);
			$('#res-saturday-btn').trigger('click');
		break;
		case 0:
			$('#res-sunday-btn input').val(0);
			$('#res-monday-btn input').val(1);
			$('#res-tuesday-btn input').val(2);
			$('#res-wendsday-btn input').val(3);
			$('#res-thursday-btn input').val(4);
			$('#res-friday-btn input').val(5);
			$('#res-saturday-btn input').val(6);
			$('#res-sunday-btn').trigger('click');
		break;
	}
	//Slider function, change the value of the string when the slider has changed.
	$('.res-time-slider').slider().on('slide', function(ev){
		var tempString;
		switch(ev.value)
		{
			case -6:
				tempString = "9:00 AM";
			break;
			case -5:
				tempString = "10:00 AM";
			break;
			case -4:
				tempString = "11:00 AM";
			break;
			case -3:
				tempString = "12:00 PM";
			break;
			case -2:
				tempString = "1:00 PM";
			break;
			case -1:
				tempString = "2:00 PM";
			break;
			case 0:
				tempString = "3:00 PM";
			break;
			case 1:
				tempString = "4:00 PM";
			break;
			case 2:
				tempString = "5:00 PM";
			break;
			case 3:
				tempString = "6:00 PM";
			break;
			case 4:
				tempString = "7:00 PM";
			break;
			case 5:
				tempString = "8:00 PM";
			break;
			case 6:
				tempString = "9:00 PM";
			break;
		}
		$('.res-time-text').html(tempString);
	});
	//when the slider has stopped, contact the server to grab the db information
	$('.res-time-slider').on('slideStop', function(ev){
		$('#res-well-1').show();
		$('#res-well-2').show();
		socket.emit('getReservation', { date: mashedDay, start: ev.value, end: ev.value + 1});
		clearTable();
	});
	//when the data is recieved create the table.
	socket.on('reservationData', function(data){
		createTable(data);
	});

	//hide both table rows when initiated
	$('#res-well-1').hide();
	$('#res-well-2').hide();

	/**
	 * Create table using the data provided, mainly set each of the division with a certain message, and remove
	 * the mouse pointer when a reservation is present and deattach the event 
	 */
	function createTable(data){
		$.each(data, function(i, value){
			switch(value.table_name){
				case 'table1':
					$('#res-well1-table1 h3').html('Reserved By: ' + value.reserver);
					$('#res-well1-table1').off().removeClass('pointer');
				break;
				case 'table2':
					$('#res-well1-table2 h3').html('Reserved By: ' + value.reserver);
					$('#res-well1-table2').off().removeClass('pointer');
				break;
				case 'table3':
					$('#res-well1-table3 h3').html('Reserved By: ' + value.reserver);
					$('#res-well1-table3').off().removeClass('pointer');
				break;
				case 'table4':
					$('#res-well2-table1 h3').html('Reserved By: ' + value.reserver);
					$('#res-well2-table1').off().removeClass('pointer');
				break;
				case 'table5':
					$('#res-well2-table2 h3').html('Reserved By: ' + value.reserver);
					$('#res-well2-table2').off().removeClass('pointer');
				break;
				case 'table6':
					$('#res-well2-table3 h3').html('Reserved By: ' + value.reserver);
					$('#res-well2-table3').off().removeClass('pointer');
				break;
			}
		});
	}

	/**
	 * Clear the table so that it will show Open, and relink the event trigger.
	 *
	 */
	function clearTable(){
		$('#res-table').html('');
		$('#res-well1-table1 h3').html('Open');
		$('#res-well1-table1').on().addClass('pointer');
		$('#res-well1-table2 h3').html('Open');
		$('#res-well1-table2').on().addClass('pointer');
		$('#res-well1-table3 h3').html('Open');
		$('#res-well1-table3').on().addClass('pointer');
		$('#res-well2-table1 h3').html('Open');
		$('#res-well2-table1').on().addClass('pointer');
		$('#res-well2-table2 h3').html('Open');
		$('#res-well2-table2').on().addClass('pointer');
		$('#res-well2-table3 h3').html('Open');
		$('#res-well2-table3').on().addClass('pointer');
	}
});