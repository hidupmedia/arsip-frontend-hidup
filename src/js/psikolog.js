const data = [
	{
		nama: "Adinda Fitriana, M.Pasi",
		deskripsi: "Psikolog Klinis Anak dan Remaja",
		pendidikan: "S2 Universitas Padjajaran",
		praktik: "2019",
		pengalaman: [
			"Pengasuhan Anak",
			"Anak Berkebutuhan Khusus",
			"Pengembangan Diri Remaja",
			"Tumbuh Kembang Anak",
			"Permasalahan Anak",
			"Perencanaan Karier Remaja",
			"Minat Bakat/Penjurusan",
			"Kesulitan Belajar",
		],
		biaya: "300.000",
	},
	{
		nama: "Erwin Fazrin, M.Psi",
		deskripsi: "Psikolog Klinis Dewasa",
		pendidikan: "S2 Universitas Padjajaran",
		praktik: "2017",
		pengalaman: [
			"Hubungan Asmara Remaja",
			"Pranikah",
			"Pernikahan",
			"Pengembangan Diri Remaja",
			"Pengembangan Diri Dewasa",
			"Pengalaman Traumatis",
			"Gangguan Diagnosis Psikologis",
		],
		biaya: "300.000",
	},
	{
		nama: "Gita Yolanda, M.Psi",
		deskripsi: "Psikolog Lulusan S2 Universitas Gadjah Mada",
		pendidikan: "S2 Universitas Gadjah Mada",
		praktik: "2017",
		pengalaman: [
			"Hubungan Asmara",
			"Masalah Interaksi Sosial",
			"Self-Harm",
			"Kecemasan Berlebih",
			"Masalah Perilaku",
			"Depresi",
			"Kepercayaan Diri",
		],
		biaya: "300.000",
	},
	{
		nama: "Karina Dewanti Shafwan, M.Psi",
		deskripsi: "Psikolog Anak dan Remaja",
		pendidikan: "S2 Universitas Padjajaran",
		praktik: "2018",
		pengalaman: [
			"Pengasuhan Anak",
			"Anak Berkebutuhan Khusus",
			"Tumbuh Kembang Anak",
			"Permasalahan Anak",
			"Penjurusan Kuliah",
			"Pengembangan Diri Remaja",
			"Perencanaan Karier Remaja",
			"Minat Bakat Remaja",
			"Pengalaman Traumatis",
			"Self-Harm",
		],
		biaya: "300.000",
	},
	{
		nama: "Nira Wulansari, M.Psi",
		deskripsi: "Psikolog Klinis Anak, Remaja, dan Keluarga",
		pendidikan: "S2 Universitas Padjajaran",
		praktik: "2010",
		pengalaman: [
			"Tumbuh Kembang Anak",
			"Pranikah/Pernikahan",
			"Anak Berkebutuhan Khusus",
			"Permasalahan/Pengasuhan Anak",
			"Hubungan Asmara",
			"Perencanaan Karier",
			"Pengembangan Diri Remaja",
			"Pengembangan Diri Dewasa",
			"Kesulitan Belajar",
			"Minat Bakat/Penjurusan",
			"Pengalaman Traumatis",
			"Psikoterapi",
			"Kecanduan/Kebiasaan Buruk",
			"Kecemasan Berkepanjangan",
			"Gangguan Diagnosis Psikologis",
		],
		biaya: "300.000",
	},
	{
		nama: "Nurul Afifah Fuadi, M.Psi",
		deskripsi: "Psikolog Klinis Anak dan Remaja",
		pendidikan: "S2 Universitas Padjajaran",
		praktik: "2019",
		pengalaman: [
			"Hubungan Asmara Remaja",
			"Kesulitan Belajar",
			"Anak Berkebutuhan Khusus",
			"Tumbuh Kembang Anak",
			"Permasalahan Anak",
			"Minat Bakat/Penjurusan",
			"Perencanaan Karier Remaja",
			"Pengalaman Traumatis",
			"Self-Harm",
			"Kecanduan/Kebiasaan Buruk",
		],
		biaya: "300.000",
	},
	{
		nama: "Salma Dias Saraswati, M.Psi",
		deskripsi: "Psikolog Klinis Lulusan S2 Universitas Islam Indonesia",
		pendidikan: "S2 Universitas Islam Indonesia",
		praktik: "2019",
		pengalaman: [
			"Permsalahan Remaja-Dewasa",
			"Permasalahan Relationship(romantic, friendship, maupun family)",
			"Quarter Life Crisis",
			"Insecurity",
			"Stress",
			"Kecemasan",
		],
		biaya: "300.000",
	},
];

// CONTENT
const content = document.querySelector(".content");
const pengalaman = document.querySelector(".pengalaman");
const listPengalaman = (index) => {
	if (data[index].pengalaman.length > 10) {
		const pengalaman1 = data[index].pengalaman.slice(0, 8);
		const pengalaman2 = data[index].pengalaman.slice(
			8,
			data[index].pengalaman.length
		);
		return `
                <ul>
                    ${pengalaman1.map((item) => `<li>- ${item}</li>`).join("")}
                </ul>
                <ul>
                    ${pengalaman2.map((item) => `<li>- ${item}</li>`).join("")}
                </ul>
        `;
	} else {
		return `
                <ul>
                    ${data[index].pengalaman
											.map((item) => `<li>- ${item}</li>`)
											.join("")}
                </ul>
        `;
	}
};
const contentBody = (track, index) => {
	pengalaman.innerHTML = "";
	return (content.innerHTML = `
        <div class="psikolog-img d-flex justify-content-center">
            <img src="${track.children[index].children[0].src}" alt="psikolog"/>
        </div>
        <h2 class="my-5">Tentang Psikolog</h2>
            <div>
                <h3>${data[index].nama}</h3>
                <p>${data[index].deskripsi}</p>
            </div>
            <div>
                <h3>Pendidikan</h3>
                <p>${data[index].pendidikan}</p>
            </div>
            <div>
                <h3>Pengalaman - ${data[index].praktik}</h3>
                <div class="d-flex flex-column flex-lg-row gap-lg-10 mb-2">
                    ${(pengalaman.innerHTML = listPengalaman(index))}
                </div>
                <div>
                    <h3 class="d-inline-flex">Konsultasi per jam :</h3>
                    <span class="ms-2 fs-4 fw-bold">Rp 300.000</span>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <a
                        href="#"
                        class="
                            btn btn-green-logo
                            text-white
                            rounded-3
                            px-6
                            py-3
                            fw-semi-bold
                        "
                    >
                        Booking Sekarang
                    </a>
                </div>
            </div>
    `);
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const track = document.querySelector(".track");
let carouselWidth = document.querySelector(".slider").offsetWidth;
window.addEventListener("resize", () => {
	carouselWidth = document.querySelector(".slider").offsetWidth;
});

let index = 0;
next.addEventListener("click", (e) => {
	track.children[index].classList.remove("active");
	index++;
	if (index % 3 === 0 && screen.width > 1200) {
		track.style.transform = `translateX(-${
			(index / 3) * (carouselWidth - 130)
		}px)`;
	} else if (index % 2 === 0 && screen.width < 1200) {
		track.style.transform = `translateX(-${
			(index / 2) * (carouselWidth - 150)
		}px)`;
	}
	if (index > 0) {
		prev.classList.add("show");
	}
	if (index === track.children.length - 1) {
		next.classList.add("hide");
	}
	track.children[index].classList.add("active");
	contentBody(track, index);
});

prev.addEventListener("click", (e) => {
	track.children[index].classList.remove("active");
	if (index % 3 === 0 && screen.width > 1200) {
		track.style.transform = `translateX(${
			-(index / 3 - 1) * (carouselWidth - 130)
		}px)`;
	} else if (index % 2 === 0 && screen.width < 1200) {
		track.style.transform = `translateX(${
			-(index / 2 - 1) * (carouselWidth - 150)
		}px)`;
	}
	index--;
	if (index < track.children.length - 1) {
		next.classList.remove("hide");
	}
	if (index === 0) {
		prev.classList.remove("show");
	}
	track.children[index].classList.add("active");
	contentBody(track, index);
});
