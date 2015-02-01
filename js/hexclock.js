(function() {
  'use strict';

  function displayHexClock() {
    var clock = new Date(),
        h = clock.getHours(),
        m = clock.getMinutes(),
        s = clock.getSeconds();

    if(h.toString().length < 2) { h = '0' + h; }
    if(m.toString().length < 2) { m = '0' + m; }
    if(s.toString().length < 2) { s = '0' + s; }

    var time = h + ':' + m + ':' + s;
    var color = '#' + h + m + s;

    document.body.style.background = color;
    document.getElementById('time').innerHTML = time;
    document.getElementById('hexColor').innerHTML = color;
  }

  window.onload = function() {
    displayHexClock();
    setInterval(displayHexClock, 1000);
  };
})();