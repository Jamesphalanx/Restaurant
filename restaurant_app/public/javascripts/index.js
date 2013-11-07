/**
 * Restaurant App.js, Built using NodeJS and Express
 * By: James Shin
 * Date: Nov 4, 2013
 * Professor: Stanley Pieda
 * Email: piedas@algonquincollege.com 
 */

 /*
 	Uess JQuery to add functionalities to the index page,
 	Create the google map, sets the carousel and show specific pictures on
 	hover of specific web elements.
 */

//Sets a floating marker for the google map.
var myCenter = new google.maps.LatLng(45.348119,-75.759015);
var marker;

//initialies google map.
function initialize()
{
	var mapProp = {
	  center: myCenter,
	  zoom:15,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	var map=new google.maps.Map(document.getElementById("home-google-location")
	  ,mapProp);

	marker=new google.maps.Marker({
		position:myCenter,
		animation:google.maps.Animation.BOUNCE
	});
	marker.setMap(map);
}

$(document).ready(function(){
	//sets carousel interval and sets the carousel to be active
	$('.carousel').carousel({
    	interval: 3000
	});
	//show each tab when clicked for the bootstrap tab menu
	$('#home-navmenu li a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	//always show first tab for bootstrap tab menu
	$('#home-navmenu li a:first').tab('show');

	//when hovered over the 'reservation' button, show the label.
	$('#home-reservation-btn').hover(function(){
		$('#home-reservation-lbl').show("slide");
	},function(){
		$('#home-reservation-lbl').fadeOut();
	}).click(function (e){
		//when clicked, go to reservation page location.
		document.location.href='reservation';
	});

	//hover over a speicific page and show image accordingly
	$('h4[id*="home-menu-item"]').hover(function(){
		$('#home-menuitem-show').fadeIn();
		var menuid = $(this).attr("id").substr(14);
		switch(menuid)
		{
			case '0':
				$('#home-menuitem-show').css("background-image", "url(/images/home-menuimg-1.jpg)"); 
				break;
			case '1':
				$('#home-menuitem-show').css("background-image", "url(/images/home-menuimg-2.jpg)"); 
				break;
			case '2':
				$('#home-menuitem-show').css("background-image", "url(/images/home-menuimg-3.jpg)"); 
				break;
			case '3':
				$('#home-menuitem-show').css("background-image", "url(/images/home-menuimg-4.jpg)"); 
				break;
		}
		//reset the image when hovered out.
	},function(){
		$('#home-menuitem-show').hide();
		$('#home-menuitem-show').fadeIn();
		$('#home-menuitem-show').css("background-image", "url(/images/home-menuimg-0.jpg)"); 
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var activeTab = e.target; // activated tab
		if(activeTab.toString().substr(22) == "#location"){
			//initialize the google web page
			initialize();
		}
	});
});
//load the google map dom.
google.maps.event.addDomListener(window, 'load');
