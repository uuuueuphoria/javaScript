// Enter your JavaScript for the solution here...
window.addEventListener('load', function (e) {
  const imageList = document.querySelectorAll('.thumb-display');
  const tagList = document.querySelectorAll('.tags');
  const inputArea = document.querySelector('form input');
  const resetButton = document.querySelector('form a');
  inputArea.addEventListener('input', SearchImage);
  resetButton.addEventListener('click', resetImage);

  function SearchImage() {
    if (inputArea.value.trim() != '') {
      resetButton.classList.remove('hidden');
      tagList.forEach(function (value, index) {
        const tagName = value.innerHTML.trim().toLowerCase();
        if (tagName.includes(inputArea.value.trim().toLowerCase())) {
          value.parentElement.classList.remove('hidden');
          if (value.parentElement.classList.contains('hidden')) {
            value.parentElement.classList.remove('hidden');
          }
        } else {
          value.parentElement.classList.add('hidden');
        }
      });
    } else {
      resetButton.classList.add('hidden');
      resetImage(e);
    }
  }

  function resetImage(e) {
    e.preventDefault();
    imageList.forEach(function (value, index) {
      if (value.classList.contains('hidden')) {
        value.classList.remove('hidden');
      }
    });
    inputArea.value = '';
  }
});
