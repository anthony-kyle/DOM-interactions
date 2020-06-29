// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen);
    dots[i].addEventListener('click', makeBlue);
    dots[i].addEventListener('dblclick', hide);
  }
}


// Set color to green on right click
function makeGreen (evt) {
  evt.preventDefault();
  evt.target.classList.toggle('green');
  updateCounts();
}

// CREATE FUNCTION makeBlue HERE
// Set color to blue on left click
function makeBlue (evt) {
  evt.target.classList.toggle('blue');
  updateCounts();
}
// CREATE FUNCTION hide HERE
// Hide element on double click
function hide (evt) {
  evt.target.classList.toggle('invisible');
  updateCounts();
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
  var greenCount = document.getElementsByClassName("green");
  totals.green = greenCount.length;
  var blueCount = document.getElementsByClassName("blue");
  totals.blue = blueCount.length;
  var invisibleCount = document.getElementsByClassName("invisible");
  totals.invisible = invisibleCount.length;

  // Once you've done the counting, this function will update the display
  displayTotals(totals);
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key];
  }
}
