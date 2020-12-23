window.addEventListener('load', function (e) {
  //select the home button
  const homeButton = document.querySelector('.pure-menu-item.home a');

  //select the friends button
  const friendsButton = document.querySelector('.pure-menu-item.friends a');

  //select the friends list div
  const friendsDiv = document.querySelector(
    '.pure-menu.custom-restricted-width'
  );

  //clear the friends display area
  friendsDiv.classList.add('hide');

  //select the friends list display container
  const friendsContainer = document.querySelector(
    '.pure-menu.custom-restricted-width .pure-menu-list'
  );

  //select the individual display div
  const individualDiv = document.querySelector('.friend');

  //add function to home button, clear all display
  homeButton.addEventListener('click', clearDisplay);

  function clearDisplay(e) {
    //clear all the display, hide the friends div
    friendsContainer.textContent = '';
    friendsDiv.classList.add('hide');
    individualDiv.textContent = '';
  }

  //add function to friends button
  friendsButton.addEventListener('click', displayFriendList);

  let store = [];
  let individualstore = [];
  function displayFriendList(e) {
    //clear the display data, show the display area

    individualDiv.textContent = '';
    friendsContainer.textContent = '';
    friendsDiv.classList.remove('hide');

    //get data from json file and append data by document fragment
    fetch('./friends/friends.json')
      .then((response) => response.json())
      .then((data) => {
        store = [...data];
        createMarkUp();
      });
  }

  function createMarkUp() {
    store.forEach(function (value, index) {
      //create template
      let template = `<li class="pure-menu-item"><a href="#" class="pure-menu-link" data-id="${value.id}">${value.firstName} ${value.lastName}</a></li>`;
      const documentFragement = document
        .createRange()
        .createContextualFragment(template);
      const element = documentFragement.querySelector('li');
      //add event to the list
      element.addEventListener('click', updateData);
      //append documentFragement to the container
      friendsContainer.appendChild(element);
    });
  }

  function updateData(e) {
    //clear the display in friends container
    friendsContainer.removeChild(friendsContainer.childNodes[0]);
    //hide the friends div
    friendsDiv.classList.add('hide');
    //get selected data id
    let dataid = e.currentTarget.firstElementChild.getAttribute('data-id');

    //get the json path
    let path = `./friends/${dataid}.json`;

    //update the json file
    const friend = fetch(path).then((response) => response.json());
    friend.then((data) => {
      individualstore = [...data];
      DisplayDetails();
    });

    //append data by document fragment
    function DisplayDetails() {
      {
        //create template
        let template = `<div class="identity">
        <img src="img/${individualstore[0].avatar}" class="photo" />
        <h2 class="name">${individualstore[0].firstName} ${individualstore[0].lastName}</h2>
        <ul>
            <li><span class="label">email:</span> ${individualstore[0].email}</li>
            <li><span class="label">hometown:</span> ${individualstore[0].hometown}</li>
        </ul>
    </div>
    <p class="bio">
        ${individualstore[0].bio}
    </p>`;
        const documentFragement = document
          .createRange()
          .createContextualFragment(template);
        //attach the contact part to the div
        const contact = documentFragement.querySelector('div');
        individualDiv.appendChild(contact);
        //attach the bio part to the div
        const description = documentFragement.querySelector('p');
        individualDiv.appendChild(description);
      }
    }
  }
});
