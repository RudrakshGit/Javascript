let output;

const parent = document.querySelector('.parent');

//console.log(parent);

output = parent.children;
output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

//changing content
parent.children[1].innerText = 'Child Two'
//Adding styles
parent.children[1].style.color = 'red';

//first and last element child
parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText= 'Child Three'

// Get parent elements from a child
 const child = document.querySelector('.child');
 output = child.parentElement;
 child.parentElement.style.border = '1px solid #ccc';
 child.parentElement.style.padding = '10px';


console.log(output);