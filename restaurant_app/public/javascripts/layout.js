/**
 * Restaurant App.js, Built using NodeJS and Express
 * By: James Shin
 * Date: Oct 10, 2013
 * Professor: Stanley Pieda
 * Email: piedas@algonquincollege.com 
 */

 /*
 	Uess JQuery to add functionalities to the layout page
 */
$(document).ready(function(){
	//When login button is clicked, toggle the login div to show using a fade
	//animation
	$('#btn-login').click(function(){
		$('#layout-login-div').fadeToggle();
	});
	//when cancel button is clicked, toggle fade animation and clear values.
	$('#layout-cancel-btn').click(function(){
		$('#layout-login-div').fadeToggle();
		$('#layout-input-username').val('');
		$('#layout-input-password').val('');
	});
});