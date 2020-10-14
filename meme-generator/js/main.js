// Enter your JavaScript for the solution here...

window.addEventListener('load', function () {
  const UserForm = document.querySelector('form');
  const errorDisplay = document.querySelector('.error');
  const chosedImage = document.querySelector('select');
  const textTop = document.querySelector('#meme-top-text');
  const textBottom = document.querySelector('#meme-bottom-text');
  const topDisplay = document.querySelector('.top-text');
  const bottomDisplay = document.querySelector('.bottom-text');
  const imageArea = document.querySelector('img');
  UserForm.addEventListener('submit', inputValidation);
  UserForm.addEventListener('reset', formReset);
  UserForm.addEventListener('submit', displayMeme);
  chosedImage.addEventListener('change', imagePreview);

  function imagePreview(e) {
    imageArea.src = 'img/' + e.target.value + '.png';
  }

  function displayMeme(e) {
    e.preventDefault();
    topDisplay.textContent = textTop.value;
    bottomDisplay.textContent = textBottom.value;
    imageArea.src =
      'img/' + chosedImage.options[chosedImage.selectedIndex].value + '.png';
    imageArea.alt = chosedImage.options[chosedImage.selectedIndex].textContent;
  }

  function inputValidation(e) {
    e.preventDefault();
    if (chosedImage.value == '') {
      errorDisplay.textContent = 'Choose an image';
    } else if (textTop.value == '') {
      errorDisplay.textContent = 'Top text cannot be empty';
    } else if (textBottom.value == '') {
      errorDisplay.textContent = 'Bottom text cannot be empty';
    } else {
      errorDisplay.textContent = '';
    }
  }

  function formReset(e) {
    e.preventDefault();
    chosedImage.selectedIndex = 0;
    textTop.value = '';
    textBottom.value = '';
    topDisplay.textContent = '';
    bottomDisplay.textContent = '';
    imageArea.src =
      'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown';
    imageArea.alt = 'Placeholder Image';
    errorDisplay.textContent = '';
  }
});
