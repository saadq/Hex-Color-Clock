(function() {
  'use strict';

  function hexClock() {
    var clock = new Date(),
        hours = clock.getHours(),
        mins = clock.getMinutes(),
        secs = clock.getSeconds();

    if(hours <= 9) hours = '0' + hours;
    if(mins <= 9) mins = '0' + mins;
    if(secs <= 9) secs = '0' + secs;

    var time = hours + ':' + mins + ':' + secs;
    var color = '#' + hours + mins + secs;
    document.body.style.background = color;
    document.getElementById('time').innerHTML = time;
    document.getElementById('hexColor').innerHTML = color;

    setTimeout(hexClock, 1000);
  }

  hexClock();
}());