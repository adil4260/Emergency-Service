# Emergency Service Directory

## Questions & Answers

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?
* **`getElementById`**: Selects a single HTML element matching the unique ID provided. It returns an `Element` object.
* **`getElementsByClassName`**: Selects all HTML elements with the specified class name. It returns a dynamic `HTMLCollection` (array-like object).
* **`querySelector`**: Selects the **first** element that matches a specified CSS selector (e.g., `#id`, `.class`, or `tag`).
* **`querySelectorAll`**: Selects **all** elements that match a specified CSS selector and returns a static `NodeList`.

---

### 2. How do you create and insert a new element into the DOM?
To create and insert a new DOM element in JavaScript:
1. **Create the element:** Use `document.createElement('tagName')`.
2. **Add content or attributes:** Use `innerText`, `innerHTML`, or `classList.add()`.
3. **Insert into DOM:** Use `appendChild()`, `prepend()`, or `insertBefore()` on a parent element.

**Example:**
```javascript
const newDiv = document.createElement('div');
newDiv.innerText = 'Hello World';
document.body.appendChild(newDiv);




3. What is Event Bubbling and how does it work?
Event Bubbling is a mechanism in DOM event propagation where an event triggered on a deeply nested target element "bubbles up" through its ancestor elements in the DOM tree (from child to parent, all the way up to document and window).

If both a button and its parent div have click event listeners, clicking the button triggers the button's event first, followed by the parent div's event.




4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where instead of attaching event listeners to multiple child elements individually, a single event listener is attached to a common parent element. It leverages Event Bubbling to handle events triggered by child elements.

Why it is useful:

Memory Efficient: Uses fewer event listeners in memory.

Dynamic Elements: Automatically handles events for newly added or dynamic DOM elements without re-attaching listeners.



5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): Prevents the browser's default action associated with an event (e.g., stopping a form from submitting/refreshing or stopping an <a> link from navigating). It does not stop the event from bubbling.

stopPropagation(): Prevents the event from traveling (bubbling) up or capturing down the DOM tree, ensuring parent elements don't receive the event.