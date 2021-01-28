const mobileNavBar = document.querySelector('#navbar');
const hamburger = document.querySelector('.hamburger');
const hamBar = document.querySelectorAll('.ham-bar');

const toggleNavBar = () => {
	mobileNavBar.classList.toggle('slide-in');
	hamBar.forEach(ham => ham.classList.toggle('slide'));
};

hamburger.addEventListener('click', toggleNavBar);
