var button1 = document.querySelector(".login-button"); 
var popup = document.querySelector(".modal-login");
var close = popup.querySelector('.modal-close'); 
var form = popup.querySelector('form');
var name = popup.querySelector('[name=name]');
var mail = popup.querySelector('[name=login]'); 
var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('name');
} catch (err) {
	isStorageSupport = false;
}

button1.addEventListener("click", function(evt) {
evt.preventDefault();
popup.classList.add("modal-show");
name.focus();
if (storage) {
	name.value = storage;
	mail.focus();
} else {
	name.focus();
}
});

close.addEventListener('click', function(evt){
	evt.preventDefault();
	popup.classList.remove('modal-show');
	popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt) {
	if (!name.value || !mail.value) {
	evt.preventDefault();
	popup.classList.remove('modal-error');
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('name', name.value);
		}
	}
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if(popup.classList.contains('modal-show')) {
			popup.classList.remove('modal-show');
			popup.classList.remove('modal-error');
		}
	}
});
