/**
 * @author Harry Stevens
 */

var images = ["images/shot_20.png", "images/shot_19.png", "images/shot_18.png", "images/shot_17.png", "images/shot_16.png", "images/shot_15.png", "images/shot_14.png", "images/shot_13.png", "images/shot_12.png", "images/shot_11.png", "images/shot_10.png", "images/shot_9.png", "images/shot_8.png", "images/shot_7.png", "images/shot_6.png", "images/shot_5.png", "images/shot_4.png", "images/shot_3.png", "images/shot_2.png", "images/shot_1.png"];

function nav() {
	$(".next").on("click", function() {
		console.log("next");
	});
	$(".prev").on("click", function() {
		console.log("prev");
	});
}

//jQuery to set the javascript in motion by calling the "nav" function
$(document).ready(function() {
	nav();
}); 