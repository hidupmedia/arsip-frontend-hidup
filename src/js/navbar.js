const navbar = document.querySelector(".navbar");
const navbarDark = document.querySelector(".navbar-dark");
const navbarLight = document.querySelector(".navbar-light");
const navbarHeight = navbar.offsetHeight;

// Scroll event listener
window.addEventListener("scroll", () => {
	if (window.scrollY > navbarHeight) {
		navbar.classList.remove("pt-lg-5");
		navbar.classList.add("fixed-top");
		document.body.style.paddingTop = navbarHeight + "px";
		if (navbarLight) {
			navbarLight.classList.add("bg-white");
		} else {
			navbarDark.classList.add("bg-hijau-lumut");
		}
	} else {
		navbar.classList.add("pt-lg-5");
		navbar.classList.remove("fixed-top");
		document.body.style.paddingTop = 0;
		if (navbarLight) {
			navbarLight.classList.remove("bg-white");
		} else {
			navbarDark.classList.remove("bg-hijau-lumut");
		}
	}
});
