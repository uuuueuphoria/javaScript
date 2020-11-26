window.addEventListener('load', function (e) {
  /* 
             Create A Data Array - hold new employees
               ---> external call to get JSON data
               ----> array of objects

             Create an new Employee object with firstname lastname email properties
             Add the new employeee object to the DataArray.
    
    */
  const dataArray = [];
  const newEmployeeForm = document.forms.newEmployee;
  const imageUpload = newEmployeeForm.elements.profileImage;
  imageUpload.addEventListener('change', function (e) {
    const imagePath = getImagePath(e.currentTarget.value);
    e.currentTarget.parentElement.firstElementChild.src = imagePath;
  });

  newEmployeeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Form Field Values Required to Create the Data Object
    const id = uuidv4().substr(0, 8);
    const firstName = e.currentTarget.elements.firstName.value;
    const lastName = e.currentTarget.elements.lastName.value;
    const emailAddress = e.currentTarget.elements.emailAddress.value;
    const imagePath = getImagePath(e.currentTarget.elements.profileImage.value);
    const salary = e.currentTarget.elements.salary.value;
    const deductions = e.currentTarget.elements.deductions.value;
    const department = getDepartment();

    // data object
    const employee = {
      id,
      firstName,
      lastName,
      emailAddress,
      imagePath,
      salary,
      deductions,
      department,
    };

    // Add Employee Data Object To the Data Array
    addNewEmployee(employee);
    UpdateDisplay();
  });

  // Replace Image Placeholder
  function getImagePath(path) {
    return path.replace('C:\\fakepath\\', 'img/employees/');
  }

  // Get The Department
  function getDepartment() {
    const departments = document.querySelectorAll('.departments input');
    let department = '';
    departments.forEach(function (item, index) {
      if (item.checked) {
        department = item.value;
      }
    });
    return department;
  }

  // Add New Employee To the DOM
  function addNewEmployee(employee) {
    const newEmployees = document.querySelector('.employees');
    const template = `
    <aside class="employee">
    <img class="employee-placeholder-image"
      src="img/employees/placeholder.png"
      alt="new employee silohute"
    />
  <ul class="details">
     <li><span>full name:</span><span>  ${employee.firstName} ${employee.lastName}</span></li>
    <li><span>employee id: </span><span> ${employee.id}  </span></li>
    <li><span>department:</span><span>${employee.department}</span></li>
    <li><span>email address:</span><span>${employee.emailAddress}</span></li>
    <li><span>salary: </span><span>${employee.salary}</span></li>
    <li><span>deductions:</span><span>${employee.deductions}</span></li>
  </ul>
  <button class="remove-user" data-key="${employee.id}">delete</button>
</aside> 
    `;
    const docFragment = document
      .createRange()
      .createContextualFragment(template);
    const newEmployee = docFragment.querySelector('aside');
    const removeButton = newEmployee.querySelector('.remove-user');
    dataArray.push(employee);

    removeButton.addEventListener('click', function (e) {
      // remove from the array
      const removeItem = dataArray.find(function (item, index) {
        if (item.id === e.currentTarget.dataset.key) {
          item.index = index;
          return item;
        }
      });
      // item to remove have to remove from the data array and the DOM
      // data array
      dataArray.splice(removeItem.index, 1);
      UpdateDisplay();
      // remove from the dom
      newEmployees.removeChild(newEmployees.children[removeItem.index]);
    });
    newEmployees.appendChild(newEmployee);
  }

  function UpdateDisplay(e) {
    // const totalSalary = dataArray.reduce(function (calc, person) {
    //   calc += parseInt(person.salary);
    //   console.log(calc);
    //   return calc;
    // }, 0);

    // const totalDeduction = dataArray.reduce(function (calc, person) {
    //   calc += parseInt(person.deductions);
    //   console.log(calc);
    //   return calc;
    // }, 0);

    // const totalNet = dataArray.reduce(function (calc, person) {
    //   calc += parseInt(person.salary) - parseInt(person.deductions);
    //   console.log(calc);
    //   return calc;
    // }, 0);

    const obj = dataArray.reduce(
      function (obj, employee) {
        obj.totalSalary += parseInt(employee.salary);
        obj.totalDeduction += parseInt(employee.deductions);
        obj.totalNet +=
          parseInt(employee.salary) - parseInt(employee.deductions);
        return obj;
      },
      {
        totalSalary: 0,
        totalDeduction: 0,
        totalNet: 0,
      }
    );

    document.querySelector(
      '.salaries-display'
    ).firstElementChild.firstElementChild.nextElementSibling.textContent =
      '$' + obj.totalSalary + '.00';
    document.querySelector(
      '.salaries-display'
    ).firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent =
      '$' + obj.totalDeduction + '.00';
    document.querySelector(
      '.salaries-display'
    ).firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent =
      '$' + obj.totalNet + '.00';
  }
});
