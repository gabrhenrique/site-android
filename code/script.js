const buttonMobile = document.getElementById('btn-mobile')

function toggleMenu() {
  const navigation = document.getElementById('navigation');
  navigation.classList.toggle('active');
}

buttonMobile.addEventListener('click', toggleMenu);