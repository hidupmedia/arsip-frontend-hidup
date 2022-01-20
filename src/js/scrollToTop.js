// display the scroll to top button
const scrollToTopButton = document.querySelector(".scroll-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		scrollToTopButton.style.display = "flex";
	} else {
		scrollToTopButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopButton.addEventListener("click", backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
