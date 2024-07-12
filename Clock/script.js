function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  function addLeadingZero(num) {
    return (num < 10 ? '0' : '') + num;
  }
  hours = addLeadingZero(hours);
  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  var clockElement = document.getElementById('clock');

  clockElement.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

  var color = 'hsl(' + seconds * 10 + ', 100%, 50%)';
  clockElement.style.color = color;

  setTimeout(updateClock, 1000);
}

updateClock();
