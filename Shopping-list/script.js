const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');

function onInput(e) {
  console.log(e.target.value);
}

function onChecked(e) {
  console.log(e.target.checked);
}
function onFocus() {
  console.log('input has focus');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}
function onBlur() {
  console.log('input has lost focus');
  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

const form = document.getElementById('item-form');

//Method 1
function onSubmit(e) {
  e.preventDefault();
  //console.log('Form submitted');
  const item = itemInput.value;
  const priority = priorityInput.value;
  const isImportant = checkbox.checked;
  if (item === '' || priority === '0') {
    alert('Please enter valid item and priority');
    return;
  }
  console.log(item, priority, isImportant);
}
//form.addEventListener('submit', onSubmit);

//Method 2
function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const item = formData.get('item');
  const priority = formData.get('priority');
  console.log(item, priority);
}
form.addEventListener('submit', onSubmit2);
