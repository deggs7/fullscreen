
(function() {
  var body = document.getElementsByTagName('body')[0];
  // var ow = window.outerWidth;
  // var oh = window.outerHeight;

  function printScreenSize() {
    // console.log('body width:' + bw);
    // console.log('body height:' + bh);
    // console.log('window inner w:' + iw);
    // console.log('window inner h:' + ih);
    // console.log('window outer w:' + ow);
    // console.log('window outer h:' + oh);
  };
  printScreenSize();
  window.addEventListener('resize', resize);

  function resize() {
    console.log('haha');
    fullscreen();
  };

  function fullscreen() {
    var bw = body.offsetWidth;
    var bh = body.offsetHeight;
    var iw = window.innerWidth;
    var ih = window.innerHeight;

    var kx = iw / bw;
    var ky = ih / bh;

    var ox = (iw - bw) / 2;
    var oy = (ih - bh) / 2;

    var array = [
      'translate(' + ox + 'px' + ',' + oy + 'px' + ')',
      'scale(' + kx + ',' + ky + ')'
    ];
    var s = array.join(' ');

    body.style.transform = s;
    body.style.overflow = 'hidden';

  };

  resize();
})();
