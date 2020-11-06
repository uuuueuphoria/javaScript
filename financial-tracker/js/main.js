window.addEventListener('load', function () {
  let debitAmount = 0;
  let creditAmount = 0;
  const transactions = document.querySelectorAll('.frm-control');
  const addButton = transactions[3];
  const displayArea = document.querySelector('tbody');
  const debitDisplay = document.querySelector('.debits');
  const creditDisplay = document.querySelector('.credits');
  var timeOutHandle = window.setTimeout(alert, 120000);
  addButton.addEventListener('click', AddTransaction);

  function alert(e) {
    window.alert('Due to inactivity, the page will be reload');
    location.reload();
  }

  function AddTransaction(e) {
    e.preventDefault();
    let descriptionField = transactions[0].value.trim();
    let typeChoice = transactions[1].value;
    let amount = Number.parseFloat(transactions[2].value).toFixed(2);
    ValidateInput(typeChoice, amount, descriptionField);
    transactions[0].value = '';
    transactions[1].value = '';
    transactions[2].value = '';
    window.clearTimeout(timeOutHandle);
    timeOutHandle = window.setTimeout(alert, 120000);
  }

  function ValidateInput(typeChoice, amount, descriptionField) {
    const errorDisplay = document.querySelector('.error');
    if (typeChoice == '') {
      errorDisplay.textContent = 'You need to choose transaction type';
    } else if (amount <= 0 || amount == 'NaN') {
      errorDisplay.textContent = 'You need to enter a positive amount';
    } else {
      errorDisplay.textContent = '';
      BeginTransaction(descriptionField, typeChoice, amount);
    }
  }

  function BeginTransaction(descriptionField, typeChoice, amount) {
    if (typeChoice == 'debit') {
      debitAmount = Number.parseFloat(debitAmount) + Number.parseFloat(amount);
      debitDisplay.textContent =
        '$' + Number.parseFloat(debitAmount).toFixed(2);
    } else {
      creditAmount =
        Number.parseFloat(creditAmount) + Number.parseFloat(amount);
      creditDisplay.textContent =
        '$' + Number.parseFloat(creditAmount).toFixed(2);
    }
    let templateLiteral = `<tr class="${typeChoice}" id="${amount}">
                          <td>${descriptionField}</td>
                           <td>${typeChoice}</td>
                        <td class="amount">${amount}</td>
                           <td class="tools">
	                        <i class="delete fa fa-trash-o"></i>
                            </td></tr>`;
    var range = document.createRange();
    range.selectNode(document.getElementsByTagName('tr').item(0));
    let documentFragment = range.createContextualFragment(templateLiteral);
    const trashCan = documentFragment.querySelector('i');
    trashCan.addEventListener('click', RemoveTransaction);
    displayArea.appendChild(documentFragment);
  }

  function RemoveTransaction(e) {
    if (e.currentTarget.parentNode.parentNode.classList.contains('credit')) {
      minusAmount = e.currentTarget.parentNode.parentNode.id;
      creditAmount = creditAmount - minusAmount;
      creditDisplay.textContent =
        '$' + Number.parseFloat(creditAmount).toFixed(2);
    } else {
      minusAmount = e.currentTarget.parentNode.parentNode.id;
      debitAmount = debitAmount - minusAmount;
      debitDisplay.textContent =
        '$' + Number.parseFloat(debitAmount).toFixed(2);
    }
    displayArea.removeChild(e.currentTarget.parentNode.parentNode);
    window.clearTimeout(timeOutHandle);
    timeOutHandle = window.setTimeout(alert, 120000);
  }
});
