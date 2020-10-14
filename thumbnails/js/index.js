window.addEventListener('load', function () {
  displayArea = document.querySelector('.image-display img');
  imageSelection = document.querySelector('.image-options');
  imageSelection.addEventListener('click', function (e) {
    if (e.target.src !== undefined) {
      displayArea.src = e.target.src;
    }
  });
});
