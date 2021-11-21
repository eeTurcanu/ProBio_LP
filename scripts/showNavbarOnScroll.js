// When the user scrolls down, show the navbar.
// When the user scrolls up, hide the navbar

function showNavbarOnScroll() {
	let navbar = document.getElementById("navbar");
	let navbarHeight = window.getComputedStyle(navbar).height;
	navbarHeight = navbarHeight.substring(0, navbarHeight.length-2);
	navbarHeight /= 2;
	
	if (window.pageYOffset < navbarHeight) {
		navbar.style.backgroundColor = "";
	} else {
		navbar.style.backgroundColor = "#9DC3AB";
	}
}

window.onscroll = showNavbarOnScroll;
