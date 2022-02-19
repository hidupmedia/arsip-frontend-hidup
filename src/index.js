// HALAMAN BERANDA
const arrow = document.querySelectorAll(".arrow");
const close = document.querySelectorAll(".close");
const card = document.querySelector(".owl-carousel");

card.addEventListener("click", (e) => {
	if (e.target.className === "arrow") {
		e.target.parentElement.parentElement.parentElement.lastElementChild.style.display =
			"block";
	} else if (e.target.className === "close") {
		e.target.parentElement.parentElement.lastElementChild.style.display =
			"none";
	}
});

card.getElementsByClassName("card-psikolog")[0].style.backgroundImage =
	"url(/public/assets/img/psikolog/adinda-fitriani.png)";
card.getElementsByClassName("card-psikolog")[1].style.backgroundImage =
	"url(/public/assets/img/psikolog/erwin-fazrin.png)";
card.getElementsByClassName("card-psikolog")[2].style.backgroundImage =
	"url(/public/assets/img/psikolog/gita-yolanda.png)";
