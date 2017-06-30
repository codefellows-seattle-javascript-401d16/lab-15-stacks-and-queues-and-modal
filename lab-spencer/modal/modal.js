'use strict';

document.getElementById('exit-modal').addEventListener('click', hideModal);

function hideModal(event) {
  event.preventDefault();
  document.getElementById('modal').style.display = 'none';
}
