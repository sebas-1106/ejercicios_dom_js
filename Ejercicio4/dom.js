/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click
*/
const body = document.body;

// 1.1: Botón con evento click
const button = document.createElement('button');
button.id = "btnToClick";
button.textContent = "Haz clic en mí";
body.appendChild(button);
button.addEventListener('click', function(event) {
    console.log(event);
});



/*
1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
*/
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', function(event) {
    console.log( event.target.value );
});


/*
1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */
// 1.3: Evento input para el input con clase 'focus'
inputFocus.addEventListener('input', function(event) {
    console.log(event.target.value);
});

/* Ejercicio 5
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.

 */
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
const body1 = document.body
const newUl = document.createElement('ul');
body1.appendChild(newUl);
const Li = document.createElement('li');
for (let element = 0; element < albums.length ; element++) {
	const newLI = Li.cloneNode(true);
	newUl.appendChild(newLI);
	newLI.textContent = albums[element];
}