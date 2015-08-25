// jshint devel:true

function postHover(x){
	var post_box = x.parentNode;
	post_box.style.boxShadow = "0px 30px 36px -20px #F71107";
	post_box.style.border = "1px solid red";
}

function notPostHover(x){
	var post_box = x.parentNode;
	post_box.style.boxShadow = "0px 32px 20px -30px #F71107";
	post_box.style.border = "1px solid #2B2B2B";
}



var dog ="dog";

// hamburger

$(document).ready(function(){
console.log('\'Allo \'Allo!');


// //POST BOX LINK HOVER
// $( ".post_box_link" ).hover(
//   function() {
//   	console.log('hey');
//     $( this ).parent().css("box-shadow",'0px 30px 36px -20px #F71107');
//     $( this ).parent().css("border",'1px solid red');

//   }, function() {
//     $( this ).parent().css("box-shadow",'0px 32px 20px -30px #F71107');
//     $( this ).parent().css("border",'1px solid #2B2B2B');

//   }
// );

});


