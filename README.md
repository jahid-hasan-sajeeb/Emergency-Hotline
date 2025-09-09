<h3>The difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll</h3>


<li>getElementById: It is used to find an element by using its ID. It is very fast because IDs are unique.</li>


<li>getElementsByClassName: It is used to find all the elements that have the specified class. It returns a collection of elements, not just one like ID.</li>


<li>querySelector: It is used to find the first element that matches a CSS selector.</li>


<li>querySelectorAll: It is a larger version of querySelector. It is used to find all elements that match a CSS selector.</li>


<h3>How to create and insert a new element into the DOM</h3>

 We can create and insert a new element in the DOM using two simple steps:


<li>Create the element: Using document.createElement(), we tell the computer which element we want to create, like a div or p.</li>

<li>Insert it: Then we use appendChild() or insertBefore() on a parent element.</li>


For example:
const parent = document.getElementById('myParent');
const newDiv = document.createElement("li");
parent.appendChild(newDiv);


<h3>What is Event Bubbling and how does it work?</h3>
 Event Bubbling means that when we create an event that happens on an element (like a click on a button), that event doesn’t just happen there and end. It "bubbles up" from the clicked element to its parent, then to its upper parent, and so on, all the way up to the document.<br>


<li>For example:
If we click a button inside a div, the click event is handled by the button.

The same event then "bubbles up" and is also available to be handled by the div.

It continues to bubble up to the body, then html, then document.


This is the default behavior of events in the browser.

<h3>What is Event Delegation in JavaScript? Why is it useful?</h3>
 Event Delegation is a technique that uses Event Bubbling. Instead of putting an event listener on every single child element, we put just one event listener on their common parent.


It’s useful because:
<li>Better Performance: We have one listener instead of many, which saves memory and makes our code run faster.</li>


<li>Handles Dynamic Elements: If we add new elements to the parent later, they automatically work with the existing event listener. We don’t have to add a new listener for each new element.</li>



<h3>What is the difference between preventDefault() and stopPropagation()?</h3>


<li>preventDefault(): This method stops the browser's default action for an event.</li>


Example: If the browser reloads automatically after an event, it prevents the browser from reloading.


<li>stopPropagation(): This method stops the bubbling of an event.</li>


Example: If we click a button inside a div and call event.stopPropagation() on the button’s event, the event will not bubble up to the div. The div’s click listener will not be triggered.





