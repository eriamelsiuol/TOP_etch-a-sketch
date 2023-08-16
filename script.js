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

  // Create grid items and add them to the container
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      //gridItem.textContent = `Row ${row + 1}, Col ${col + 1}`;
      gridContainer.appendChild(gridItem);

      gridItem.addEventListener('mouseenter', () => {
        gridItem.classList.add('hovered');
      });
    }
  }
