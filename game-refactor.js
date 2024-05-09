const canvas = document.querySelector('#game');

//canvas necesita que le especifiquemos un contexto, este será 2d o 3d
const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRigth = document.querySelector('#right');

let canvasSize;
let elementsSize;

//Posición de nuestro jugador
const playerPosition = {
    x: undefined,
    y: undefined
};

//Load espera a que la página se carge para ejecutar nuestrafunción
window.addEventListener('load', setCavasSize);

//Resize escucha cuando se cambia el tamaño de pantalla
window.addEventListener('resize', setCavasSize);

window.addEventListener('keydown', moveByKey);
btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);
btnLeft.addEventListener('click', moveLeft);
btnRigth.addEventListener('click', moveRigth);

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

    const map = maps[0];

    //Con trim limpiamos los espacios en blanco que tengamos al principio o al final de un string
    //split nos permite crear arrays a partir de strings
    const mapRows = map.trim().split('\n')

    //map nos ayuda a crear arreglos a partir de otros arreglos
    //debido a que en este caso nos retoran cada elemento y estos son textos, ya podemos usar trim y split
    const mapRowCol = mapRows.map(row => row.trim().split(''))

    game.clearRect(0, 0, canvasSize, canvasSize);

    //Bloque refactorizado (leer game.js para entender mejor el cambio)
    mapRowCol.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {

            const emoji = emojis[col];

            //le sumamos 1 porque canvas no acepta cordenada 0, que es la posición del primer elemento de nuestro array (cualquier numero multiplicado por 0 es 0)
            const positionX = elementsSize * (colIndex + 1);
            const positionY = elementsSize * (rowIndex + 1);

            if(col == 'O') {
                if(!playerPosition.x && !playerPosition.y) {
                    playerPosition.x = positionX;
                    playerPosition.y = positionY;
                    console.log(playerPosition)
                };
            };

            game.fillText(emoji, positionX, positionY);
        });
    });

    movePlayer();
};

function movePlayer() {
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
};

function moveUp() {
    console.log('Moviemiento hacia arriba');

    if((playerPosition.y - elementsSize) < 0) {
        console.log('Te saliste del mapa bro');
    } else {
        playerPosition.y -= elementsSize;
        startGame();
    }
};

function moveDown() {
    console.log('Moviemiento hacia abajo');
    if((playerPosition.y + elementsSize) > canvasSize + elementsSize) {
        console.log('Te saliste del mapa bro');
    } else {
        playerPosition.y += elementsSize;
        startGame();
    }
};

function moveLeft() {
    console.log('Moviemiento hacia izquierda');

    if((playerPosition.x - elementsSize) < 0) {
        console.log('Te saliste del mapa bro');
    } else {
        playerPosition.x -= elementsSize;
        startGame();
    }
};

function moveRigth() {
    console.log('Moviemiento hacia derecha');

    if((playerPosition.x + elementsSize) > canvasSize + elementsSize) {
        console.log('Te saliste del mapa bro');
    } else {
        playerPosition.x += elementsSize;
        startGame();
    }
};

function moveByKey(event) {
    let key = event.key;

    switch (key){
        case 'ArrowUp':
            moveUp();
            break;

        case 'ArrowDown':
            moveDown();
            break;

        case 'ArrowLeft':
            moveLeft();
            break;

        case 'ArrowRight':
            moveRigth();
            break;
    };
}