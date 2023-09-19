let grid_width = 64;
let row_height = 600/grid_width + "px";

function populateGrid() {
    let grid = document.getElementById("grid_container");

    for (let index = 0; index < grid_width; index++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.height = row_height;
        grid.appendChild(row);
        for (let index = 0; index < grid_width; index++) {
            const grid_element = document.createElement("div");
            grid_element.classList.add("grid_element");
            row.appendChild(grid_element);
        }

    }
}

function setColourBlack() {
    const grid_elements = Array.from(document.getElementsByClassName("grid_element"));
    console.log(grid_elements);

    grid_elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.classList.add("black");
        });
    });
}

// event listener blak button click - call setColourBlack function
// event listener random button click - call setColourRandom function
// event listener darken button click - call setColourDarken function

// setColourRandom() use js to randomly select a colour and set css to match that colour. remove class of black


// setColourDarken() store an array of 10 shades of black. (#fff, #999 #888, ... #000) loopm 10 times. assign a new colour each loop to match the array index


// event listener for moving the slider. 
// run updateGridSize function
// run setGridSize function

function displayGridSize() {
    let slider = document.getElementById("slider");
    let sliderOutput = document.getElementById("sliderOutput");

    sliderOutput.textContent = "Grid size: " + slider.value + " x " + slider.value;

    // change silderOutput to show the new value
}

// function setGridSize() {
    // set grid_width to default value. call populateGrid function
// }


// function clearGrid() {
    // set grid squares to white - remove class black
// }



populateGrid();
setColourBlack();
displayGridSize();