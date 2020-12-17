# Sesión 1 - 15/12/2020

## ¿Que es p5js?

p5js es una librería en javascript que permite crear gráficos y experiencias interactivas, tomando como base los principios 
de funcionamiento de processing (framework en java).

## Editor

p5.js ofrece un editor online en `https://editor.p5js.org/`. Nos permite probar nuestros programas sin necesidad de instalar nada 
en nuestro equipo. Puedes asociarlo a tu cuenta de **Github** para guardar distintos programas (o sketch). En el caso de utilizarlo, 
no necesitaremos el fragmento mostrado abajo de `index.html`, sólo lo referente a `sketch.js`.

## Estructura básica de un script con p5js

Una aplicación en p5js se compone de una página html sobre la que se configura un canvas (lienzo) sobre el que aplicar operaciones 
de dibujo, animación e interacción.

En el fichero `index.html` se incluye la carga de la libería desde un cdn y el script sobre el que escribiremos nuestro programa.

```html
<!-- index.html -->
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5/lib/p5.js"></script>
    <!-- Si quieres utilizar una versión concreta: <script src="https://cdn.jsdelivr.net/npm/p5@[p5_version]/lib/p5.js"></script>-->
    <script src="sketch.js"></script>
  </head>
  <body>
    <main>
    </main>
  </body>
</html>
```

El fichero `sketch.js` contiene dos funciones encargadas de **configurar** el entorno y aplicar las operaciones de dibujo sobre el lienzo.

```js
// sketch.js
const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 200;

let draw_cycle = 0;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
}

function draw() {
    // ... a lot of fancy stuff ...
    draw_cycle = draw_cycle + 1;
}
```

En el fragmento de arriba podemos identificar varios elementos:

**Comentarios**  

Los comentarios son fragmentos de código que no son interpretados por nuestro programa, permiten añadir 
información que facilite la comprensión de las distintas partes del código.

Cuando son de una linea vienen precedido de `// `, cuando el comentario contiene multiples lineas se abre con `/*` y 
se cierra con `*/`

**Ejemplo**

```js
// Esto es un comentario de una linea

/* -------------------------
   Esto
   Es
   Un
   Comentario
   Multi-linea 
   ------------------------- */
```

**Constantes**

Las constantes (y variables) nos permiten asociar valores (numéricos, texto, lógicos) a nombres legibles, facilitando la reutilización 
y la legibilidad de nuestro código. 

- Cuando el valor no va a modificarse **durante** la ejecución del programa se denomina *constante* y 
  se utiliza de la forma `const nombreDeNuestraConstante = valor`. En nuestro ejemplo se definen como constantes el ancho y alto del lienzo.

- Cuando el valor *cambia* a lo largo de la **ejecución del programa** se denomina *variable* y se utiliza de la forma `let nombreDeNuestraVariable = valor` 
  para *inicializarla* y se le asignan nuevos valores mediante el operador de asignación `=`. En nuestro ejemplo se crea una variable `draw_cycle` y se incrementa en uno su valor con cada ciclo de dibujo.

> La principal diferencia entre setup y draw es que `setup` se ejecuta una vez al inicio del programa y `draw` se ejecuta N veces por segundo, 
> donde N es el **frameRate** (un parámetro de p5js) que por defecto vale 30. Tras 1 segundo de ejecución del programa la variable `draw_cycle` 
> valdrá `30`

**Métodos: Funciones (o procedimientos)**

Un métodos es un conjunto de operaciones que se agrupan bajo un nombre común, con el objetivo de facilitar su **reutilización** o su **parametrización**. 
Por ejemplo, la instrucción `rect` dibuja un rectangulo en nuestro lienzo y sus parámetros son `rect(posicionX, posicionY, ancho, largo)`.

Un método cualquiera se define de la siguiente forma:  

```js
function nombreDelMetodo(parametro1, parametro2/*, ... */) {
  // ...
  return parametro1 + parametro2
}
```

Un método puede devolver resultados utilizando la instrucción `return expresion`. Un método que devuelve resultado se denomína **función** y uno que 
no lo hace se denomína **procedimiento**. En el ejemplo de arriba la función devuelve la suma de los dos parametros que se le pasan.

```js
nombreDelMetodo(1, 3)
// Devuelve 4

nombreDelMetodo("hola ", "inutil")
// Devuelve "hola inutil". Si, el operador + concatena cadenas de caracteres
```

## Nuestro primer programa: Cuadrado.

```js
const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 200;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  rect(width/2 , height/2, 100, 100)
}
```

**¿Que hace esto?**

Crea un lienzo de 200 x 200 **pixeles** (setup) y dibuja un cuadrado en el centro del lienzo, con una dimensión de 100 x 100 pixeles.  
Para centrar el cuadrado se utilizan las **variables del sistema** width y height. 

> Prueba a transformarlo en un rectangulo o a cambiar la posición en la que se dibuja. 
> El eje x/y comienza en la esquina superior derecha x crece conforme te desplazas a la derecha e y hacia abajo.

**Animación: Cambio de color**

```js
const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 200;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  fill(0) // Indica al lienzo que todo lo que se dibuje se rellena en negro (intensidad = 0)
  rect(width/2 , height/2, 100, 100)
}
```

Para comprobar que la función draw se ejecuta 30 veces por segundo podemos modificar el código de arriba para que 
el color de relleno cambie a blanco.

```js
const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 200;

let COLOR_FILL = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  fill(COLOR_FILL) // La intensidad de color va de 0 a 255
  rect(width/2 , height/2, 100, 100)
  COLOR_FILL += 1
}
```

Si quisieramos que oscilara entre 2 estados (negro/blanco), necesitariamos cambiar el valor entre 0 y 255, 
en función del valor anterior. Para estos casos se utilizan los condicionales.

```js
const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 200;

let COLOR_FILL = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  fill(COLOR_FILL) // La intensidad de color va de 0 a 255
  rect(width/2 , height/2, 100, 100)
  if (COLOR_FILL === 0) { 
    COLOR_FILL = 255; 
  }
  else { 
    COLOR_FILL = 0; 
  }
}
```

El condicional utiliza las expresiones `if (condicion) { /*...accion ...*/ }`, `else if (otraCondicion) { /* otra acción */}` 
y `else { /*...*/ }`. Si se cumple la expresión entre parentesis se ejecuta el bloque de código entre corchetes.

En nuestro caso comprueba si el valor de COLOR_FILL es 0 y en caso afirmativo lo alterna a 255, con lo que en cada ciclo de dibujo 
el color con el que se rellena el cuadrado será distinto.

Para hacer facil su reutilización (y dejar mas legible el código) la transformamos en una función tal que:

```js
function flipColor(actualColor) {
  if (actualColor === 0) { return 255; }
  else { return 0; }
}
```

con lo que la función `draw` queda tal que:

```js
function draw() {
  fill(COLOR_FILL) // La intensidad de color va de 0 a 255
  rect(width/2 , height/2, 100, 100)
  COLOR_FILL = flipColor(COLOR_FILL)  
}
```

**Patrones: Tablero de ajedrez**  

Al igual que utilizamos las funciones para reutilizar funcionalidades creadas por nosotros, cuando se quieren aplicar 
operaciones repetidas en un mismo ciclo de dibujo se utiliza una estructura llamada **bucle**. El bucle se define con la 
instrucción `for` y se utiliza de la forma:  

```js
for (let contador = 0, contador < 4; contador++) {
  // ... lo que sea ...
}
```

El fragmento se lee tal que: "Empezando con contador = 0, **mientras** contador sea menor que 4, ejecuta el código 
entre las llaves y en cada iteración incrementa *contador* en 1. `contador++ <=> contador = contador + 1`.

**contador** es una variable que se puede utilizar dentro del bloque for. Si quisieramos pintar 4 cuadrados a 50 pixeles 
de distancia ...

```js
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

let COLOR_FILL = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function flipColor(value) {
  if (value === 0) { return 255; }
  else { return 0; }
}

function draw() {
  for (let ejeX = 0; ejeX < 4; ejeX += 1) {
   rect(width/2 + 50*ejeX , height/2, 20, 20) 
  }
}
```

> Prueba a modificarlo para que las pinte en vertical y en diagonal.  


Si probamos mezclando los dos ejemplos anteriores podemos dibujar un patrón de tablero de ajedrez mediante 
bucles y la función `flipColor`. El siguiente código dibuja un tablero de ajedrez con origen en (100, 100)

```js
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

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
}
```

**To enjoy:** 

> Al final de la función draw, justo despues del bucle for, añade esta linea:

```js
 sizeCell = mouseX / width * 100;
```
