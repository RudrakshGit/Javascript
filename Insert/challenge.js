function insertAfter(newEl, existingEl){
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}
//new element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After';

//Existing Element to insert after
const firstItem = document.querySelector('li:first-child');

//our custom functionn
insertAfter(li, firstItem);