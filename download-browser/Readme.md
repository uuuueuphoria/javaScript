# Browser Download 
__View Demo__  
[Crackcode on Netlify](https://crackcode-browser-download.netlify.app) 
</br></br> 

__Challenge__    
In this challenge your going to write a script that runs when the select element change event fires. You need to update the anchor element download href and text content so that the correct browser is download.

```html
<select id="browserTypes" class="browsers-types">
  <option value="opera" data-runtime="v8" data-version="71">opera</option>
  <option value="safari" data-runtime="javascript core" data-version="14">
    safari
  </option>
  <option value="firefox" data-runtime="spider monkey" data-version="83">
    firefox
  </option>
  <option value="edge" data-runtime="v8" data-version="85">edge</option>
  <option value="explorer" data-runtime="chakra" data-version="11">
    explorer
  </option>
  <option value="chrome" data-runtime="v8" data-version="88">chrome</option>
</select>
```

The markup of the browser icon container

```html
<div class="icon-container">
  <img class="browser-icon" src="img/icons/browsers/opera.svg" alt="opera" />

  <div class="download-link-container">
    <a class="download-link" href="downloads/opera.zip" download="opera"
      >download opera browser</a
    >
    <ul class="additional-info">
      <li>js engine: carakan</li>
      <li>version: 15</li>
    </ul>
  </div>
</div>
```

__JavaScript Code Help__  
The javascript snippet below gives you boiler plate code to perform the following tasks:  
- add change event listener.
- access the value of the selected option.
- access the currently selected option element.
- access data attribute

```javascript
selectElement.addEventListener("change", function (e) {
  // get the value of the selected item
  e.currentTarget.value;
  // get the current selected option
  const currentOption = e.currentTarget.options[e.currentTarget.selectedIndex];
  // access the data attribures
  currentOption.dataset.version
});
```

## Resources
- Form Element List [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Select Element [MDN Docs ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
