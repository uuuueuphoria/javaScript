// Enter JavaScript for the exercise here...
window.addEventListener('load', function () {
  const inputForm = document.querySelector('form');
  const tdArray = document.getElementsByTagName('td');
  const messageArray = [];
  let x = 0;
  for (i = 1; i < tdArray.length; i += 2) {
    messageArray[x] = tdArray[i].innerHTML;
    x++;
  }

  inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputText = document.querySelector('input');
    for (i = 0; i < messageArray.length; i++) {
      if (
        messageArray[i].toLowerCase().includes(inputText.value.toLowerCase())
      ) {
        const highlightedRow = document.querySelectorAll('tr');
        highlightedRow[i + 1].style.backgroundColor = 'gold';
      } else {
        const tableRow = document.querySelectorAll('tr');
        tableRow[i + 1].style.backgroundColor = '';
      }
    }
  });
});
