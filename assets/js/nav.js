
//
// // const el = document.querySelector('nav');
//
// var h = document.getElementById("nav");
// var stuck = false;
// var stickPoint = getDistance();
//
// function getDistance() {
//   var topDist = h.offsetTop;
//   return topDist;
// }
//
// window.onscroll = function(e) {
//
//   console.log("scrolling");
//
//   var distance = getDistance() - window.pageYOffset;
//   var offset = window.pageYOffset;
//   readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
//   if ( (distance <= 0) && !stuck) {
//     h.style.position = 'fixed';
//     h.style.top = '0px';
//     stuck = true;
//   } else if (stuck && (offset <= stickPoint)){
//     h.style.position = 'static';
//     stuck = false;
//   }
// }
