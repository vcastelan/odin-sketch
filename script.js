// create 16x16 divs on the parent div container
const gridContainer = document.querySelector('.grid-container');

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for(let i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    gridContainer.appendChild(cell).className = 'grid-element';
  }
}

function setDefaultGrid() {
  makeRows(32,32);
  // setGridSize(32);
  // fillGrid(32);
}

function changeSize() {
  let newSize = prompt("Enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-64 range");
      changeSize();
    } else {
      makeRows(newSize, newSize);
      // setGridSize(newSize);
      // fillGrid(newSize);
    }
  } else if(newSize === null) {
    setDefaultGrid();
  }
}

// setDefaultGrid();
changeSize();

// add a hover effect using a hover on DOM grid elements
//change the div class to a new div and then change the color of that div opposite original color

//add a button that will open popup(prompt) asking user for size of new grid.
// use a button on html then javascript to add click event.


// function setGridSize(size) {
//   // gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//   for (let i = 0; i < size * size; i++) {
//     const gridElement = document.createElement("div");
//     gridElement.classList = "grid-element";
//     // gridElement.addEventListener("mouseover", changeColor);
//     gridContainer.appendChild(gridElement);
//   }
// }

// function fillGrid(size) {
//   for (let i = 0; i < size * size; i++) {
//     const gridElement = document.createElement("div");
//     gridElement.classList = "grid-element";
//     // gridElement.addEventListener("mouseover", changeColor);
//     gridContainer.appendChild(gridElement);
//   }
// }
