var navIcon = document.getElementById('nav-icon');

navIcon.addEventListener('click', onNavClick);
var nav = document.getElementById('nav');
function onNavClick(e){
	nav.classList.toggle("show");
}