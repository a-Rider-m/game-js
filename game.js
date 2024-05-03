const canvas = document.querySelector('#game');

//canvas necesita que le especifiquemos un contexto, este será 2d o 3d
const game = canvas.getContext('2d');

//Load espera a que la página se carge para ejecutar nuestrafunción
window.addEventListener('load', startGame);

function startGame() {

    //Definimos donde iniciará nuestro trazo (x, y, medidaW, medidaH)
    //game.fillRect(0, 0, 100, 100);

    //Tamaño de nuestro "borrador" (x, y, medidaW, medidaH)
    //game.clearRect(0, 0, 50, 50);

    //Podemos cambiar el tamaño de la fuente y el estilo (tamaño, fuente)
    game.font = '25px Verdana';

    //Podemos agregarle un estilo
    game.fillStyle = 'Purple';

    //podemos alinear el texto, teniendo en cuenta la posición inicial y final que le dimos
    game.textAlign = 'left';

    //Podemos agregar texto (texto, posiciónX, posiciónY)
    game.fillText('Hola!', 50, 50);
};