'use strict';
//Declaration
//Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
//Buttons
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModel = document.querySelectorAll('.show-modal');



//Functions
//ShowFunction

function showModal(){
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}
//Close Funtion
function closeModal(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}
//Events
for(Let i = 0; i <btnShowModel.length; i++){
btnShowModel[i].addEventListener('click',showModal)
}

btnCloseModel[i].addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',function(e) {
	if(e.key === 'Escape' && !modal.classList.contains('hidden')){
		closeModal();
	}
})