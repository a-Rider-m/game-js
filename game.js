const canvas = document.querySelector('#game');

//canvas necesita que le especifiquemos un contexto, este será 2d o 3d
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

const playerPosition = {
    x: undefined,
    y: undefined
};

//Load espera a que la página se carge para ejecutar nuestrafunción
window.addEventListener('load', setCavasSize);

//Resize escucha cuando se cambia el tamaño de pantalla
window.addEventListener('resize', setCavasSize);

function setCavasSize() {

    //con InnerWidth y InnerHeight podemos saber el tamaño de la pantalla 
    if(window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    //con setAttribute cambiamos el valor del atributo del canvas en el html
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;

    startGame();
};

function startGame() {

    //Podemos agregarle un estilo
    //game.fillStyle = 'red';

    //Podemos cambiar el tamaño de la fuente y el estilo (tamaño, fuente)
    game.font = elementsSize * 0.8 + 'px verdana';

     //podemos alinear el texto, teniendo en cuenta la posición inicial y final que le dimos
     game.textAlign = 'end';

    const map = maps[2];

    //Con trim limpiamos los espacios en blanco que tengamos al principio o al final de un string
    //split nos permite crear arrays a partir de strings
    const mapRows = map.trim().split('\n')

    //map nos ayuda a crear arreglos a partir de otros arreglos
    //debido a que en este caso nos retoran cada elemento y estos son textos, ya podemos usar trim y split
    const mapRowCol = mapRows.map(row => row.trim().split(''))
    
    //Bloque para refactorizar
    for (let row = 1; row <= 10; row++) {
    
        for(let col = 1; col <= 10; col++) {

            //Podemos agregar texto (texto, posiciónX, posiciónY)
            game.fillText(emojis[mapRowCol[row - 1][col - 1]], elementsSize * col, elementsSize * row);

        };
    };


    //Definimos donde iniciará nuestro trazo (x, y, medidaW, medidaH)
    //game.fillRect(0, 0, 100, 100);

    //Tamaño de nuestro "borrador" (x, y, medidaW, medidaH)
    //game.clearRect(0, 0, 50, 50);
};