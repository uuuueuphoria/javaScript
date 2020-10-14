#  Client Side JavaScript

## Challange 
This exercise will gain more of an insight into working with elements that perform a similar action. There are five color swatches. When you click on any of the swatchs the background color of the swatch is used to set the background color of the  div.display to the choosen color.  
  
Take a look at the markup for the color-options unordered list. The list has five list items. Each list items  a div with the class swatch and a class with the specific background color.

Your task is to figure out how to click the button get the color of the swatch and change the background style of the color-display div.  

You can checkout a working copy of the challange [@Netlify](https://crackcode-color-picker.netlify.app/)

```html
      <div class="contents">
              <!-- color-display container -->
            <div class="color-display"></div>
      </div>
        <!-- color options -->
      <ul class="color-options">
        <li class="color">
          <div class="swatch orange" data-color="#ff6347"></div>
        </li>
        <li class="color">
          <div class="swatch purple" data-color="#9c27b0"></div>
        </li>
        <li class="color">
          <div class="swatch pink" data-color="#e91f62"></div>
        </li>
        <li class="color">
          <div class="swatch blue" data-color="#2196f3"></div>
        </li>
        <li class="color">
          <div class="swatch yellow" data-color="#ffca26"></div>
        </li>
      </ul>
```

 ## Hints
 Note that each div within the list item has an attribute called data-color. The data attribute is used to pass custom attributes to your javascript code. Below you are provided a resource to the MDN documents exlaining the data attribute of elements.  
 
  The data-color attribute has the hex color value that you will read. Once you read the value you can assign it to the background color of the div elment with the class color-display
  ```html
<div class="contents">
      <div class="color-display"></div>
</div>
  ```
 
- The challange here is how do you get multiple elements with the same functionality to respond to a click event without haveing to write 5 seperate event listeners. 
- This example should only have one event listener attached to the  ul  element.  
- You need to access the individual data-color attribute from  each    div.swatch
- Add the single click event to the ul.color-options.
- The ul element click event recieves the event object. The event object has both the target and the currentTarget of the event. Log both these properties to the console.
- Can you find the div element?
- Once you have the div element you can access need to check to see if the element clicked has a data property. If it does then change the color of the div.color-display
```html
<div class="swatch yellow" data-color="#ffca26"></div>
```
```javascript
        /*  
        The html above contains a data attribure called data-color.  
        You can't ues the dash charachter in Javascript. So you can't access the data attribute using data-color.  
        The dash in javascript is a reserved keyword for the arithmentic operator subtraction.  
        To use a data attribute inside your javascript code use the dataset property with the element containing the data attribute.  
        Along with the dataset propert exchange the dash for a dot then use the second name. 
        */
            const divElement = document.querySelector('div.swacth');
            console.log(divElement.dataset.color)
 ```


## Resources
- Data Attributes [MDN How To Use Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) 