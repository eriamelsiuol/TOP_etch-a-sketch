// create global variables
// need starting num of squares (width x height)

// initialize the container with grid divs, starts with 16x16
// can probably use grid with rows and cols equal to width and height
// should be 960px wide 
// use js - const div = document.createElement('div')


// css will have the class, whcih gets applied once you hover

// prompt will get the grid width & height from the user

// add the buttons - one does random rgb
// the second does gradient b/w

const gridContainer = document.getElementById('gridContainer');

// Define the number of rows and columns in the grid
const numRows = 16;
const numCols = 16;
let etchMode = 'classic'; //mode can be classic, rainbow, or gradient

// Create grid items and add them to the container
function generateEtchASketch(rows, cols, mode) {
    //clear the old grid (because we will regenerate later
    let element = document.getElementById("gridContainer");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }    
    //set the grid parameters with CSS (template rows and columns)
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, calc(500px/${cols}))`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, calc(500px/${rows}))`;

    //now generate the grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            //gridItem.textContent = `Row ${row + 1}, Col ${col + 1}`;
            gridContainer.appendChild(gridItem);

            gridItem.addEventListener('mouseenter', () => {
                gridItem.classList.add(mode);
            });
        }
    }
}
generateEtchASketch(numRows, numCols, etchMode);

const sizeButton = document.getElementById('sizePicker');

sizeButton.addEventListener('click', () => {
    //need to check that the input is a number
    // and also that it stays below 128, otherwise the browser has trouble
    const size = prompt("Enter the grid size");
    generateEtchASketch(size, size, etchMode);
});
