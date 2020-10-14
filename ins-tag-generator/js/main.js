// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.

window.addEventListener('load', function () {
  userForm = document.querySelector('.feature.frm');
  userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let frm = e.target;
    let tag = frm.elements.tags;
    let error = document.querySelector('p.feature.error');
    if (tag.value.trim() != '') {
      document.querySelector('p.feature.tags').innerHTML +=
        '#' + tag.value + ' ';
      tag.value = '';
      error.classList.add('hidden');
    } else {
      error.classList.remove('hidden');
      error.textContent = 'input is empty';
    }
  });
});
