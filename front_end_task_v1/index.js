toggleOverlay = () => {
  document.getElementById('overlay').classList.toggle('overlay--open');
}

function on() {
  document.getElementById('overlay').style.display = 'flex';
}

function off() {
  document.getElementById('overlay').style.display = 'none';
}

