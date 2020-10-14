window.addEventListener('load', function (e) {
  agree = document.querySelector('.thumb-up img');
  disagree = document.querySelector('.thumb-down img');
  disagreeNumber = document.querySelector('.thumb-down span');
  agreeNumber = document.querySelector('.thumb-up span');
  let agreeCount = 0;
  let disagreeCount = 0;
  agree.addEventListener('click', function (e) {
    agreeCount++;
    agreeNumber.textContent = agreeCount;
  });
  disagree.addEventListener('click', function (e) {
    disagreeCount++;
    disagreeNumber.textContent = disagreeCount;
  });
});
