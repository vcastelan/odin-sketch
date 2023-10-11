//add a button that will open popup(prompt) asking user for size of new grid.
// add a grid continaer to select grid size.
const change = document.querySelector('#change');
const clear = document.querySelector('#clear')
const gridContainer = document.querySelector('.grid-container');

// use a button on html then javascript to add click event.
// upon load grid container default.
change.addEventListener('click', changeSize);
clear.addEventListener('click', eraseAllColor);
window.addEventListener('load', setDefaultGrid);

// function to make grid
//i: rows and columns int
//o: grid element chiled node appended to parent node
function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for(let i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    gridContainer.appendChild(cell).className = 'grid-element';
  }
}

// function to set default grid upon load window page
function setDefaultGrid() {
  makeRows(16,16);
}

// function to change size of grid
//o: call back function to invoke change size and clear size to delete child nodes.
function changeSize() {
  let newSize = prompt("Enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-64 range");
      changeSize();
    } else {
      clearGrid();
      makeRows(newSize, newSize);
    }
  } else if(newSize === null) {
    clearGrid();
    setDefaultGrid();
  }
}

// clear function to erase current child grid elemenent nodes.
function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}

// add a hover effect using a hover on DOM grid elements
//change the div class to a new div and then change the color of that div opposite original color
// function to clear/erase color divs when set while using hover.
function eraseAllColor() {
  var gridPixels = document.querySelectorAll('.color');
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ededed');
}