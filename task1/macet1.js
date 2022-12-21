const isMobile = {
	Android: function(){
		return navigator.userAgent.match(/Android/i);
	},
	iOS: function(){
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	any: function(){
		return(
			isMobile.Android() ||
			isMobile.iOS());
	}
};
if (isMobile.any()){
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu_arrow');
	if (menuArrows.length > 0){
		for (let index = 0; index < menuArrows.length; index++){
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function(e){
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
	const Menu = document.querySelector('.menu_body');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		Menu.classList.toggle('_active');
	});
}