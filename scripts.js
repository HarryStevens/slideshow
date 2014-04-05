/**
 * @author Harry Stevens
 */



function nav() {
	$(".next").on("click", function() {
		console.log("next");
	});
	$(".prev").on("click", function() {
		console.log("prev");
	});
}

$(document).ready(function() {
	nav();
});
