const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  //class name
  //text.className = 'card dark'

  //class list
  // text.classList.add('dark');
  //text.classList.remove('card');

  // text.classList.toggle('dark');
  text.classList.toggle('hidden');
  //text.classList.replace('card', 'dark');

  //change style
  itemList.style.lineHeight = '7';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;
