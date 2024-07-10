 function removeClearButton(){
  const rembtn = document.querySelector('#clear');
  rembtn.remove();
 }
 removeClearButton();

 function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
 }
 //removeFirstItem();

 function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];
    
    ul.removeChild(li);
}

//removeItem(1);

function removeItem2(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

removeItem2(2);