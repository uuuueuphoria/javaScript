# CPSC1520 Client Side JavaScript

## Employyee manager application completed inclass

## Data Objects And The DOM API

One of the most common task you will have to perform with cliend side JavaScript is to create markup from objects. The objects are structured so that each object has the same properties. If a property has no value it may be assigned null or undefined for values.  
In the example below the data array contains two objects. The objects both have the same properties firstName and lastName. Using the DOM API we can create an ul element. Using the forEach method of the Array object we can loop throught the array of objects. The item paramater will be a signle data object and we can use this object to create a list element with the firstName and lastName properties.

```javascript
const dataArray = [
  { firstName: "Lorem", lastName: "Pipsum" },
  { firstName: "Gypsim", lastName: "Skipsum" },
];
let table = document.createElement("table");
let tableBody = document.createElement("tbody");
table.appendChild(tableBody);

// loop throught the data objects
dataArray.forEach(function (item, index) {
  const newRow = document.createElement("tr");
  newRow.setAttribute("data-index", index);
  const firstName = document.createElement("td");
  const lastName = document.createElement("td");
  firstName.textContent = item.firstName;
  lastName.textContent = item.lastName;
  newRow.appendChild(firstName);
  newRow.appendChild(lastName);
  tableBody.appendChild(newRow);
});

console.log(table);
```

<br/>
<br/>

## Data Objects And Template Literals Method One
Use this method when your building DOM content that doesn't require any event listeners. First you can create your table and table body elements then inside the forEach loop where you access each of the data objects you can use your template  markup and add the data from the objects. Then using the insertAdjacentHTML() method to add the new tr to the table body element. 

```javascript
const dataArray = [
  { firstName: "Lorem", lastName: "Pipsum" },
  { firstName: "Gypsim", lastName: "Skipsum" },
];
let table = document.createElement("table");
let tableBody = document.createElement("tbody");
table.appendChild(tableBody);
// loop through the data array and access each data object
dataArray.forEach(function (item, index) {
  let template = `
  <tr data-index="${index}">
  <td>${item.firstName}</td>
  <td>${item.lastName}</td>
</tr>`;
  tableBody.insertAdjacentHTML("afterbegin", template);
});

console.log(table);
```

## Data Objects And Template Literals Method Two
Use this method when your building DOM content that requires you to add event listeners to some part of your template. First you can create your table and table body elements as you did before. Then inside the forEach loop where you access each of the data objects you can use your template  markup and add the data from the objects. Now you have to create a document fragment add the template to the document fragment and read back out your tr. The reason the template has a table and table body element is that the document fragment can't understand what a tr element is on its own.  A tr element must be used inside a table body or table head. 

```javascript
const dataArray = [{firstName:"Lorem",lastName:"Pipsum"}, {firstName:"Gypsim", lastName:"Skipsum"}]
let table  = document.createElement('table')
let tableBody = document.createElement('tbody')
table.appendChild(tableBody)
dataArray.forEach(function(item,index){
    let template =`
    <table>
    <tbody>
    <tr data-index="${index}">
    <td>${item.firstName}</td>
    <td>${item.lastName}</td>
    </tbody>
  </tr>
  <table>
  `
  let documentFragment = document.createRange().createContextualFragment(template);
  let elementNode = documentFragment.querySelector('tbody tr')
  tableBody.appendChild(elementNode)
 })
 
 console.log(table)
```

## Templating And The Template Element
You can also create your template using the template element. Select the template element by default the template element is a document fragment. Using the for each loop create a new clone of the template. Seed the template with the data using the DOM API methods of your choice.

```javascript
const dataArray = [{firstName:"Lorem",lastName:"Pipsum"}, {firstName:"Gypsim", lastName:"Skipsum"}]
let table  = document.createElement('table')
let tableBody = document.createElement('tbody')
table.appendChild(tableBody)
var templateElement = document.querySelector("template").content.firstElementChild;
 
dataArray.forEach(function(item,index){
   const newRow = templateElement.cloneNode(true)
   newRow.dataset.index = index;
   const firstName = newRow.firstElementChild
   const lastName = newRow.lastElementChild
   firstName.textContent = item.firstName
   lastName.textContent = item.lastName
  
   tableBody.append(newRow)
  
 })

 console.log(table)
 
```

## Resources
- The Template Element [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- Document Fragment [MDN](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
- The Node Interface [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)
