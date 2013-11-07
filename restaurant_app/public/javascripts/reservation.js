$(document).ready(function(){

	//set today's Date
	var date = new Date();

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
	var thisMonth = month[date.getMonth()];
	$('.nav-tabs').button();

	function resetBtns(){
		var allBtns = $('#res-button-grp').find("label");
		$(allBtns).each(function(){
			$(this).removeClass('btn-success');
		});
	}

	//Confirm reservation
	$('#res-confirm').click(function(){
		alert("1");
	});

	//Select table
	$('#res-well1-table1').click(function(){
		alert("table1");
	});
	$('#res-well1-table2').click(function(){
		alert("table2");
	});
	$('#res-well1-table3').click(function(){
		alert("table3");
	});
	$('#res-well1-table4').click(function(){
		alert("table4");
	});
	$('#res-well1-table5').click(function(){
		alert("table5");
	});
	$('#res-well1-table6').click(function(){
		alert("table6");
	});
	$('#res-well2-table1').click(function(){
		alert("table1");
	});
	$('#res-well2-table2').click(function(){
		alert("table2");
	});
	$('#res-well2-table3').click(function(){
		alert("table3");
	});
	$('#res-well2-table4').click(function(){
		alert("table4");
	});
	$('#res-well2-table5').click(function(){
		alert("table5");
	});
	$('#res-well2-table6').click(function(){
		alert("table6");
	});

	//Day selector
	$('#res-monday-btn').click(function(){
		resetBtns();
		$(this).addClass('btn-success');
		$('#res-date-text').html('Monday');
		var selectedDate = new Date();
		var dateAddition = parseInt($('#res-monday-btn input').val());
		var millisecondOffset = dateAddition * 24 * 60 * 60 * 1000;
		selectedDate.setTime(selectedDate.getTime() + millisecondOffset);
		thisMonth = month[selectedDate.getMonth()];
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
		$('#res-date2-text').html( ', ' + thisMonth + " " + selectedDate.getDate() + " " + selectedDate.getFullYear());
	});

	//from the date api library, get the current date's name using the array.
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

	//Slider function
	$('.res-time-slider').slider().on('slide', function(ev){
		var tempString;
		switch(ev.value)
		{
			case -12:
				tempString = "9:00 AM";
			break;
			case -11:
				tempString = "9:30 AM";
			break;
			case -10:
				tempString = "10:00 AM";
			break;
			case -9:
				tempString = "10:30 AM";
			break;
			case -8:
				tempString = "11:00 AM";
			break;
			case -7:
				tempString = "11:30 AM";
			break;
			case -6:
				tempString = "12:00 PM";
			break;
			case -5:
				tempString = "12:30 PM";
			break;
			case -4:
				tempString = "1:00 PM";
			break;
			case -3:
				tempString = "1:30 PM";
			break;
			case -2:
				tempString = "2:00 PM";
			break;
			case -1:
				tempString = "2:30 PM";
			break;
			case 0:
				tempString = "3:00 PM";
			break;
			case 1:
				tempString = "3:30 PM";
			break;
			case 2:
				tempString = "4:00 PM";
			break;
			case 3:
				tempString = "4:30 PM";
			break;
			case 4:
				tempString = "5:00 PM";
			break;
			case 5:
				tempString = "5:30 PM";
			break;
			case 6:
				tempString = "6:00 PM";
			break;
			case 7:
				tempString = "6:30 PM";
			break;
			case 8:
				tempString = "7:00 PM";
			break;
			case 9:
				tempString = "7:30 PM";
			break;
			case 10:
				tempString = "8:00 PM";
			break;
			case 11:
				tempString = "8:30 PM";
			break;
			case 12:
				tempString = "9:00 PM";
			break;
		}
		$('.res-time-text').html(tempString);
	});
});