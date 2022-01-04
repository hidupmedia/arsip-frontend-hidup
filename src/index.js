const arrow = document.querySelectorAll(".arrow");
const close = document.querySelectorAll(".close");
const card = document.querySelector(".owl-carousel");

card.addEventListener("click", (e) => {
	if (e.target.className === "arrow") {
		e.target.parentElement.parentElement.lastElementChild.style.display =
			"block";
	} else if (e.target.className === "close") {
		e.target.parentElement.parentElement.lastElementChild.style.display =
			"none";
	}
});
