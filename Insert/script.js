//insertAdjacentElement example
function insertElement(){
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin',h1);
}
insertElement();

//insertAjacentText Example
function insertText(){
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('afterend','insertAdjacentText');
}
insertText();

//insertAdjacentHTML Example
function insertHTML(){
  const clearbtn = document.querySelector('#clear');
  clearbtn.insertAdjacentHTML('afterend','<h2>insertAdjacentHTML</h2>');
}

insertHTML();