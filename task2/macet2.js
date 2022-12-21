var goTopBtn = document.querySelector('.button_kn');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
	  goTopBtn.classList.add('back_to_top-show');
	}
	if (scrolled < coords) {
	  goTopBtn.classList.remove('back_to_top-show');
	}
 }

    var smoothJumpUp = function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0,-50);
            setTimeout(smoothJumpUp, 10);
        }
    }
    
    window.onscroll = function() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 100) {
      	document.getElementById('upbutton').style.display = 'block';
      } else {
      	document.getElementById('upbutton').style.display = 'none';
      }
    }

	const iconMenu = document.querySelectorAll('.menu_icon');
if (iconMenu) {
	const Menu = document.querySelector('.menu_body');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		Menu.classList.toggle('_active');
	});
}


