'use strict';

document.getElementsByClassName('modal-button')[0].addEventListener('click', hideModal);

function hideModal(event) {
  event.preventDefault();
  document.getElementsByClassName('modal')[0].style.display = 'none';
}
