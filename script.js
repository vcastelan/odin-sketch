//add a button that will open popup(prompt) asking user for size of new grid.
// add a grid continaer to select grid size.
const change = document.querySelector('#change');
const clear = document.querySelector('#clear')
const black = document.querySelector('#color-mode');
const rainbow = document.querySelector('#rainbow');
const gridContainer = document.querySelector('.grid-container');

// use a button on html then javascript to add click event.
// upon load grid container default.
change.addEventListener('click', changeSize);
clear.addEventListener('click', eraseAllColor);

// to set black button on or rainbow button
let blackBtn = false;
black.addEventListener('click', () => {
  blackBtn = true;
});
rainbow.addEventListener('click', () => {
  blackBtn = false;
})

// to start adding in color change with holding mousedown
// target the whole body to make selection click wherever.
let mouseDown = false;
document.body.onmousedown = function() {
  mouseDown = true;
};
document.body.onmouseup = function() {
  mouseDown = false;
};


// window load calls setDafaultGrid.
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
  hover(16,16);
}

// function to change size of grid
//o: call back function to invoke change size and clear size to delete child nodes.
function changeSize() {
  let newSize = prompt("Enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-100 range");
      changeSize();
    } else {
      clearGrid();
      makeRows(newSize, newSize);
      hover(newSize, newSize);
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

// add a function to change the color of the grid when hovering
function hover(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for(let i = 0; i < rows * cols; i++) {
    let color = document.querySelector('.grid-element');
    color.addEventListener('mousedown', colorChange);
    color.addEventListener('mouseover', colorChange);
    gridContainer.appendChild(color);
  }
}

// add a hover effect using a hover on DOM grid elements
//change the div class to a new div and then change the color of that div opposite original color
function colorChange(ele) {
  if(mouseDown) {
    if(blackBtn === false) {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      ele.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else {
      ele.target.style.backgroundColor = 'black';
    }
  }
}

// function to clear/erase color divs when set while using hover.
function eraseAllColor() {
  let gridPixels = document.querySelectorAll('.grid-element');
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffffd1');
}