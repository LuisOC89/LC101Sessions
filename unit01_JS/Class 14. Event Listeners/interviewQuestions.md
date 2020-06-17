# Interview Questions
0. Review:  
The DOM has several elements which we can access using DOM methods. Those methods are triggered by events and handled. That's the reason Javascript is named an event driven programming language. To be able to recognize that an event happened, there are event listeners.

1. What is the difference between dynamic and static web pages?  
- **Static**: The page that appears the same each time it loads.
- **Dynamic**: Web pages that can change after loading in the browser.  

2. What does **DOM** stand for?  
**D**ocument **O**bject **M**odel

3. Triggering and handling events.  
**Triggering** an event is the act of causing an event to be sent.   
**Handling** an event is receiving the event and performing an action in response.

4. WHat is another name of event handlers?  
Listeners  

5. What is **Bubbling**?  
**Bubbling** refers to an event being propagated to ancestor elements, when an event is triggered on an element that has parent elements. When the element is inside a parent element. Ex: Button inside toolbar inside document. If you click one of them, the three of them (button, toolbar, document) will get the click event (if they have an event listener each).

6. How to stop bubbling?
We can use `event.stopPropagation()` to stop events from being sent to ancestor elements.

7. When is `load event` triggered?  
When the window, elements, and resources have been loaded by the browser.  

7.1 Difference between `querySelector` and `querySelectorAll`?  
- `querySelector` returns first item.  
- `querySelectorAll` returns all items.  

7.2 Important: The style property is an object that allows you to *read* and *update* the INLINE style properties of the element. The *style* property does NOT *read* or *update* styles defined in a `<style>` tag or an external CSS file linked with a `<link>` tag.

7.3 Important: The DOM defines *numerous* events. Each element type does NOT support every event type. The kinds of events that each element supports relate to how the element is used.

8. Shortcuts for DEV TOOLS in Chrome:
- Windows: `Ctrl + Shift + C`
- Mac: `Cmd + Option + C`  

9. To debug:  
In DEV TOOLS: Go to `sources` and put breakpoints. Then trigger your events or check the console. In sources you can set what you want to see in the WATCH panel. Show an example. Take advantage and show `Sources`, `Elements` and `Console` tabs.  

10. When getting an element by **id** that exists returns null, because the script runs before the DOM has been loaded. To solve it, there are two options:  
- Place your code in the `window.onload` function, like so:
```javascript
function init() {
    alert(document.getElementById("abc"));
};
window.onload = init;
```
- Place `script` after element has been declared, and before the `</body>` tag.
```html
<html>
<head> 
    <title>blah</title>    
</head> 
<body>
    <div id="abc">
    </div>
    <script type="text/javascript">
        alert(document.getElementById("abc"));
    </script>
</body>
</html>
``` 
Explanation [here](https://stackoverflow.com/questions/5371047/getelementbyid-returns-null-even-though-the-element-exists)
