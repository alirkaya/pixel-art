//Select color input
let color = document.getElementById("colorPicker");

//Select size input
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");

//When size is submitted by use, call makeGrid()
sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    //capture table element from document
    const table = document.getElementById("pixelCanvas");

    //before drawing new table, delete all existing rows
    //if no rows, then it will skip the for loop
    //code adopted from
    //https://www.tutorialspoint.com/javascript-get-row-count-of-an-html-table
    let num_rows = table.rows.length;
    for (let i=0; i < num_rows; i++) {
        table.deleteRow(0);
    }

    //generates a new table with the given parameters
    makeGrid(table, height.value, width.value);
});

/**
 * @desc create a grid of squares
 * @param <table> $table - the pixel grid to color
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */
function makeGrid(table, height, width) {
    //code is adapted from
    //https://stackoverflow.com/questions/74227992/adding-data-from-json-into-html-table-using-javascript
    for (let i=0; i < height; i++) {
        const row = document.createElement("tr");

        for (let j=0; j < width; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);

            //code adapted from
            //https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
            cell.addEventListener("click", function(event) {
                cell.style.backgroundColor = color.value;
            })
        }

        table.appendChild(row);
    }
}