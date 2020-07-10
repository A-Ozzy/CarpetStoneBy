function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});;

// ======================= burger 

let sosialheaderInfo = document.querySelector('.sosialheader');
let sosialheaderLinks = document.querySelector('.sosialheader__links');

let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__links');


sosialheaderInfo.addEventListener('click', toggleClassShowhow);
burger.addEventListener('click', toggleClassActive);


function toggleClassShowhow () {
	sosialheaderLinks.classList.toggle('show');
}

function toggleClassActive () {
	burger.classList.toggle('active');
	headerMenu.classList.toggle('active');
}

//============================ FILTER 

$('.filter__item').click(function(event){
		// $(this).addClass.('show');
		var i=$(this).data('filter');
	if(i == 1){
		$('.cardmonument').show();
	}else{
		$('.cardmonument').hide();
		$('.cardmonument.f_'+i).show();
	}
	$('.filter__item').removeClass('show');
	$(this).addClass('show');
	return false;
});