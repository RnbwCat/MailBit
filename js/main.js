let button = document.querySelector('.mms__btn');
let contact = document.querySelector('.contact');
let homeBtn = document.querySelector('.home-box__btn');

let navItems = document.querySelectorAll('.nav-list__item');
let nav = document.querySelector('.nav-list');
let navBurger = document.querySelector('.burger');

navItems.forEach(function(item) {
	item.addEventListener('click', makeActive);
	function makeActive() {
		for(let i= 0; i < navItems.length; i++) {
			navItems[i].classList.remove('active');
		}
		this.classList.add('active');
		nav.classList.add('hide');
		navBurger.classList.remove('open-burger');
		nav.classList.remove('open-burger');
		document.body.classList.remove('lock');
	}
});

navBurger.addEventListener('click', showMenu);

function showMenu() {
	navBurger.classList.toggle('open-burger');
	nav.classList.toggle('open-burger');
	nav.classList.remove('hide');
	document.body.classList.toggle('lock');
}

homeBtn.addEventListener('click', showModal);
button.addEventListener('click', showModal);

function showModal() {
	let modal = document.querySelector('.modal');
	let form = modal.querySelector('.modal-form');
	let close = modal.querySelector('.modal-close');
	let sendButton = modal.querySelector('.modal-form__btn');
	let inputName = modal.querySelector('#name');
	let inputEmail = modal.querySelector('#email');
	let inputPhone = modal.querySelector('#phone');
	let input = modal.querySelectorAll('.modal-form__input');

	modal.style.display = 'block';
	document.body.classList.add('lock');

	close.addEventListener('click', () => {
		modal.style.display = 'none';
		document.body.classList.remove('lock');
	});

	form.addEventListener('submit', () => {
		event.preventDefault();

		for(let i = 0; i < input.length; i++) {
			if(!input[i].value) {
				let errorrMessage = document.querySelectorAll('.modal-form__error-message');
				errorrMessage[i].style.opacity = '1';

				function hideError() {
					errorrMessage[i].style.opacity = '0';
				}
				setTimeout(hideError, 1500);
			}
			if(inputName.value && inputEmail.value && inputPhone.value) {
				modal.style.display = 'none';
				document.body.classList.remove('lock');
			}
		}
	});
}

$(function() {
	$('#phone').mask('+1(999)999-99-999');
});