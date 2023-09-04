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
let numRows = 16;
let numCols = 16;
let etchMode = 'classic'; //mode can be classic, rainbow, or gradient

// grid sizing listener
const sizeButton = document.getElementById('sizePicker');
sizeButton.addEventListener('click', () => {
    //need to check that the input is a number
    // and also that it stays below 128, otherwise the browser has trouble
    const size = prompt("Enter the grid size");
    numRows = size;
    numCols = size;
    generateEtchASketch(size, size, etchMode);
});

//reset listener
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    generateEtchASketch(numRows, numCols, etchMode);
});

//listener for rainbow mode
const rainbowButton = document.getElementById('rainbowSketch');
rainbowButton.addEventListener('click', () => {
    etchMode = 'rainbow';
});

//listener for classic mode
const classicButton = document.getElementById('classic');
classicButton.addEventListener('click', () => {
    etchMode = 'classic';
});

//listener for darken
const darkenButton = document.getElementById('darken');
darkenButton.addEventListener('click', () => {
    etchMode = 'darken';
});

// Function to generate a random color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to darken a gray grid item by a specified percentage
function darkenGridItem(item, percentage) {
    const currentColor = window.getComputedStyle(item).backgroundColor;
    const rgbValues = currentColor.match(/\d+/g); // Extract RGB values
    const newColor = `rgb(${Math.max(rgbValues[0] - 255 * percentage, 0)}, ${Math.max(rgbValues[1] - 255 * percentage, 0)}, ${Math.max(rgbValues[2] - 255 * percentage, 0)})`;
    item.style.backgroundColor = newColor;
}

// Create grid items and add them to the container
function generateEtchASketch(rows, cols, mode) {
    //clear the old grid (because we will regenerate later)
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
                switch (etchMode) {
                    case 'classic':
                        //this adds the hover effect via a class
                        gridItem.style.backgroundColor = 'darkslategray';
                        break;
                    case 'rainbow':
                        //rainbow mode
                        const randomColor = generateRandomColor();
                        gridItem.style.backgroundColor = randomColor;
                        break;
                    case 'darken':
                        //darkening mode
                        darkenGridItem(gridItem, 0.1); // Darken by 10%
                        break;
                }
            
            });
        }
    }
}
generateEtchASketch(numRows, numCols, etchMode);



