const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');   

const overlay = document.getElementById('overlay');   


openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';   

});

setTimeout(() => {
    popup.style.display = 'block';
}, 5000);