window.addEventListener('load', function () {
  iconDisplay = document.querySelector('.browser-icon');
  option = document.querySelector('.browsers-types');
  downloadLink = document.querySelector('.download-link');
  descriptionOne = document.querySelector('.additional-info li:first-child');
  descriptionTwo = document.querySelector('.additional-info li:last-child');
  option.addEventListener('change', function (e) {
    iconDisplay.src = `img/icons/browsers/${e.currentTarget.value}.svg`;
    downloadLink.href = 'downloads/' + e.currentTarget.value + '.zip';
    downloadLink.textContent = 'download ' + e.currentTarget.value + ' browser';
    descriptionOne.textContent =
      'js engine: ' +
      e.currentTarget.options[e.currentTarget.selectedIndex].dataset.runtime;
    descriptionTwo.textContent =
      'version: ' +
      e.currentTarget.options[e.currentTarget.selectedIndex].dataset.version;
  });
});
