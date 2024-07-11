//const clearBtn = document.querySelector('#clear');

//javascript event listeners
//clearBtn.onclick = () => alert('clear items?');

//addEventListeners()
//clearBtn.addEventListener('click', () => alert('clear items?'));
//clearBtn.addEventListener('click', () => console.log('clear items?'));

//function onClear(){
  //alert('clear items?');
//}
//clearBtn.addEventListener('click', onClear);

//setTimeout(() => clearBtn.removeEventListener('click',onClear),5000);

//setTimeout(() => clearBtn.click(), 5000);


//Mouse Events
const logo = document.querySelector('img');

const onDoubleClick = () => console.log('Double click event');
const onClick = () => {
  if(document.body.style.backgroundColor !== 'pink'){
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'white';
  }
  else{
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
const onRightClick = () => console.log('Right click event');
const onMouseDown = () => console.log('Mouse Down event');
const onMouseUp = () => console.log('Mouse up event');
const onMouseWheel = () => console.log('Mouse Wheel event');
const onMouseOver = () => console.log('Mouse Over event');
const onMouseOut = () => console.log('Mouse Out event');
const onDragStart = () => console.log('Drag start event');
const onDrag = () => console.log('Drag event');
const onDragEnd = () => console.log('Drag end event');

logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);




