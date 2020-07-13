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

//============================ POPUP =======
let orderBtn = document.querySelectorAll('.btn');
let closeBtn = document.querySelector('.bodypopup__close');
let popupSection = document.querySelector('.test_popup');
let wrapper = document.querySelector('.wrapper');

for (let i = 0; i < orderBtn.length; i++) {
	orderBtn[i].addEventListener('click', openPopup);
}

closeBtn.addEventListener('click', closePopup);

function openPopup(e){
	let pagePosition = window.pageYOffset;
	wrapper.classList.add('lock');
	popupSection.classList.add('show');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';

	
}
function closePopup(){
	popupSection.classList.remove('show');
	wrapper.classList.remove('lock');
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	window.scroll({top: pagePosition, left: 0});
	document.body.removeAttribute('data-position');
}

//============================ POPUP =======
