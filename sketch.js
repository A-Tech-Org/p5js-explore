const colorBlanco = 255;
const colorNegro = 0;

const tamanoCelda = 40;
const numeroDeCeldas =8;
const celdaInicial = 0;

var colorInicial = colorBlanco;

function filaTablero(posicionY, colorPrimeraCasilla) {
  var colorPincel = colorPrimeraCasilla;
  for(casillaX = celdaInicial; casillaX < numeroDeCeldas; casillaX += 1) {
    fill(colorPincel)
    rect(20 + tamanoCelda*casillaX, posicionY,  tamanoCelda, tamanoCelda)    
    colorPincel = seleccionaColorPincel(colorPincel)
  }
}
// seleccionaColorPincel(colorBlanco) ---> colorNegro
// seleccionaColorPincel(colorNegro) ---> colorBlanco
function seleccionaColorPincel(colorActual) {
  var colorNuevo;
  // En cada ciclo copruebo el color del pincel y 
    // voy intercambiandolo
    if (colorActual === colorBlanco) { 
      // Asigna color negro al color del pincel
      colorNuevo = colorNegro; 
    }
    else { 
      // Asigna color blanco al color del pincel
      colorNuevo = colorBlanco; 
    }
  return colorNuevo;
}

function setup() {
  createCanvas(1000, 1000);
}
      // i++ => i + 1 | i-- => i - 1
      // quad
function draw() {
  var colorInicial = colorBlanco;
  for(filaY = 0; filaY < numeroDeCeldas; filaY++) {
    filaTablero(20 + tamanoCelda*filaY, colorInicial);
    colorInicial = seleccionaColorPincel(colorInicial)
  }  
}