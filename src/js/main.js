import '../scss/style.scss';
import './module/header.js';
import './module/b-unique_art.js';

import init from './script.js';
import Pristine from 'pristinejs';


init()

// Функция для переключения темы
function toggleTheme() {
	const bgPattern = document.querySelector('.bg-pattern');
	const body = document.body;
	const checkbox = document.getElementById('check');

	if (bgPattern) {
		bgPattern.classList.toggle('pink-theme', checkbox.checked);
	}
	body.classList.toggle('pink-theme', checkbox.checked);

	// Сохраняем текущую тему в localStorage
	if (checkbox.checked) {
		localStorage.setItem('theme', 'pink-theme');
	} else {
		localStorage.removeItem('theme');
	}
}

// Проверяем сохраненную тему при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
	const bgPattern = document.querySelector('.bg-pattern');
	const body = document.body;
	const checkbox = document.getElementById('check');

	if (localStorage.getItem('theme') === 'pink-theme') {
		if (bgPattern) {
			bgPattern.classList.add('pink-theme');
		}
		body.classList.add('pink-theme');
		checkbox.checked = true;
	}
});

// Привязываем обработчик к чекбоксу
document.getElementById('check').addEventListener('change', toggleTheme);



window.onload = function () {
	let preloader = document.querySelector('.js-preloader');
	preloader.classList.add('hide-preloader');
	setInterval(function () {
		preloader.classList.add('preloader-hidden');
	}, 990);
}

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("year").textContent = new Date().getFullYear();



	var form = document.getElementById("js-contact-form");

	// create the pristine instance
	var pristine = new Pristine(form);
	form.addEventListener('submit', function (e) {
		e.preventDefault();

		// check if the form is valid
		var valid = pristine.validate(); // returns true or false
if(valid){alert("Ваша почта отправлена")}
	});

});




