let grid_width = 64;
let colour_mode = "black";

initialise();

function initialise() {
    setColourMode();
    setGridSize();
    populateGrid();
    setColour();
    displayGridSize();
    clearGrid();
}

function setColourMode() {
    const black = document.getElementById('black');
    const darken = document.getElementById('darken');
    const random = document.getElementById('random');

    black.addEventListener('click', () => {
        colour_mode = "black"
    })
    darken.addEventListener('click', () => {
        colour_mode = "darken"
    })
    random.addEventListener('click', () => {
        colour_mode = "random"
    })
}

function populateGrid() {
    let grid = document.getElementById("grid_container");
    let row_height = 600/grid_width + "px";

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

function setColour() {
    const grid_container = document.getElementById("grid_container");
    const grid_elements = Array.from(document.getElementsByClassName("grid_element"));
    let controller = new AbortController;
    
    grid_container.addEventListener('mousedown', (e) => {
    e.target.style.backgroundColor = 'black';
    console.log(e.target);
    e.preventDefault();
    grid_elements.forEach((element) => {
        element.addEventListener('mouseenter', (e) => { 
            if(colour_mode == "black") {
                e.target.style.backgroundColor = 'black';
            }
            else if(colour_mode == "darken") {
               
            }
            else if(colour_mode == "random") {
                let random_colour = getRandomColour();
                element.style.backgroundColor = random_colour;
            }
        }, { signal: controller.signal });
    }, );
    });
    grid_container.addEventListener('mouseup', () => {
        controller.abort();
        controller = new AbortController;
    });
}

function clearGrid() {
    const clear = document.getElementById("clear");
    clear.addEventListener("click", (e) => {
        updateGrid();
    })
}

function getRandomColour() {
    let red = getRandomInt(0, 255);
    let green = getRandomInt(0, 255);
    let blue = getRandomInt(0, 255);
    let random_colour = `rgb(${red}, ${green}, ${blue})`;
    return random_colour;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// setColourDarken() store an array of 10 shades of black. (#fff, #999 #888, ... #000) loopm 10 times. assign a new colour each loop to match the array index

function displayGridSize() {
    let slider = document.getElementById("slider");
    let sliderOutput = document.getElementById("sliderOutput");
    sliderOutput.textContent = "Grid size: " + slider.value + " x " + slider.value;
    slider.addEventListener("input", (e) => {
        sliderOutput.textContent = "Grid size: " + e.target.value + " x " + e.target.value;
    });
}

function setGridSize() {
    let slider = document.getElementById("slider");
    slider.addEventListener("mouseup", (e) => {
        grid_width = e.target.value;
        updateGrid();
    });
}

function updateGrid() {
    const grid = document.getElementById("grid_container");
    grid.replaceChildren();
    populateGrid();
    setColour();
}