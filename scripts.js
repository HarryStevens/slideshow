/**
 * @author Harry Stevens
 */

//An array of images in order
var images = ["shot_20.png", "shot_19.png", "shot_18.png", "shot_17.png", "shot_16.png", "shot_15.png", "shot_14.png", "shot_13.png", "shot_12.png", "shot_11.png", "shot_10.png", "shot_9.png", "shot_8.png", "shot_7.png", "shot_6.png", "shot_5.png", "shot_4.png", "shot_3.png", "shot_2.png", "shot_1.png"];

//Index of current image in our index array
var index = 0;

//This is the main function. It describes what to do when certain div classes are clicked
function nav() {
	$(".button").on("click", function() {
		
		console.log("click");
		
		var isNext = $(this).hasClass("next");
		//isolating the next button

		//If the next button is clicked, it will move forward in the array; otherwise, it will move backwards
		if (isNext == true && index != (images.length - 1)) {
			index = index + 1;
			console.log ("next");
		} else if (isNext == false && index != 0) {
			index = index - 1;
			console.log("prev");
		}

		//Removes the class "disabled" from the button
		$(".button").removeClass("disabled");

		//Adds the class "disabled" to the appropriate button in the appropriate circumstances
		if (index == 0) {
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length - 1)) {
			$(".button.next").addClass("disabled");
		}

		//See below function
		updateImage();

	});
}

//Adds the new image depending on the click event
function updateImage() {
	console.log ("update image");
	console.log (images[index]);
	$("#image-wrapper").html("<img src='images/"+images[index]+"' />");
}

//When everything is loaded, this jQuery sets the initial image, makes the "previous" button look disabled, 
//and sets the javascript in motion by calling the "nav" function
$(document).ready(function() {
	$("#image-wrapper").html("<img src='images/" + images[index] + "' />");
	$(".button.prev").addClass("disabled");
	nav();
});
