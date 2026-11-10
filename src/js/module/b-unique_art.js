import Splide from '@splidejs/splide';




var splide = new Splide('.splide', {
	type: 'loop',
	perPage: 3,
	focus: 'center',
	gap: '30px',
	breakpoints: {
		1300: { perPage: 2, gap: '15px' }, // Планшеты (≤1024px) — 2 слайда
		900: { perPage: 1, gap: '10px'}, // Смартфоны (≤768px) — 1 слайд, без стрелок
	}

});

splide.mount();

