var position = 1;
var maxPosition = 3;
function changepos(n) {
    fadeout("SF_"+position,100)
    console.log("position is "+position);
    position = (position + n - 1 + maxPosition) % maxPosition + 1;
    fadein("SF_"+position,100   )
  }
setInterval(function() {
    changepos(1,100);
    console.log("Position after increment:", position);
}, 5000);  

  function fadein(n, delay) {
    var element = document.getElementById(n);
  
    if (element) {
      element.style.opacity = 0;
      element.style.display = "flex";
  
      var step = 0.01;
  
      function fadeInStep() {
        element.style.opacity = parseFloat(element.style.opacity) + step;
  
        if (element.style.opacity < 1) {
          setTimeout(fadeInStep, delay / 100);
        }
      }
  
      setTimeout(fadeInStep, delay);
    }
  }
  
  function fadeout(n, delay) {
    var element = document.getElementById(n);
  
    if (element) {
      element.style.opacity = 1;
  
      var step = 0.01;
  
      function fadeOutStep() {
        element.style.opacity = parseFloat(element.style.opacity) - step;
  
        if (element.style.opacity > 0) {
          setTimeout(fadeOutStep, delay / 100);
        } else {
          element.style.display = "none";
        }
      }
  
      setTimeout(fadeOutStep, delay);
    }
  }
  
  // Example usage:
  fadein("F1", 1000); // Fade in with a 1000ms (1 second) delay
  fadeout("F1", 2000); // Fade out with a 2000ms (2 seconds) delay
  
var RightSvg = document.getElementById("RSSVG");
var LeftSvg = document.getElementById("LSSVG");
RightSvg.addEventListener("click", function() {
  changepos(1);
});
LeftSvg.addEventListener("click", function() {
  changepos(-1);
});