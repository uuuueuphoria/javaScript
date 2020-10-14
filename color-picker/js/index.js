window.addEventListener('load', function () {
  colorDisplay = document.querySelector('.color-display');
  swatchOptions = document.querySelector('.color-options');
  swatchOptions.addEventListener('click', function (e) {
    if (e.target !== undefined) {
      colorDisplay.style.backgroundColor = e.target.dataset.color;
    }
  });
});
