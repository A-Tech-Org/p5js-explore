const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 1024;

// Posición inicial de nuestro tablero 
let x0 = 100;
let y0 = 100;
// Tamaño de una celda
let sizeCell = 20
// Numero de celdas 
let numCellsX = 8;
let numCellsY = 8;
// Color de la celda (iniciamos en 0 - Negro)
let cellColor = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function flipColor(value) {
  if (value === 0) { return 255; }
  else { return 0; }
}

function drawChessRow(X0, Y0, firstCellColor) {
  // Dibuja 8 cuadrados
  for (let cellX = 0; cellX < numCellsX; cellX += 1) {
   fill(firstCellColor); // Relleno (negro/blanco)
   /*
   Utiliza el valor del bucle for para desplazar el cuadrado a la derecha
   Y0 se mantiene constante durante todo el bucle
   */
   rect(X0 + sizeCell*cellX , Y0, sizeCell, sizeCell)
   firstCellColor = flipColor(firstCellColor) // Cambio el color para el siguiente cuadrado
  }  
}

function draw() {
 // Dibuja 8 filas
 for (let rowY = 0; rowY < numCellsY; rowY++) {
   // En cada iteración, desplaza la posición inicial de la fila en sizeCell pixeles.
   drawChessRow(x0, y0 + sizeCell * rowY, cellColor);
   // En cada iteración, cambia el color con el que comienza.
   cellColor = flipColor(cellColor);
 }
 sizeCell = mouseX / width * 100;
}