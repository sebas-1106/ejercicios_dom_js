/*2.1 Inserta dinamicamente en un html un div vacio con javascript.
*/
const newDiv = document.createElement('div');
console.log(newDiv)
/*
2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
*/
const body = document.querySelector('body');
const newP = document.createElement('p');
body.appendChild(newDiv)
newDiv.appendChild(newP);

/*
2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.
*/

const newDiv2 = document.createElement('div');
body.appendChild(newDiv2);
console.log(newDiv2)
const newP2 = document.createElement('p');
for (let index = 0; index < 6; index++) {
	newDiv2.appendChild(newP2.cloneNode(true));
}
/*
2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.
*/
const newP3 = document.createElement('p');
newP3.textContent = 'Soy dinámico!';
body.appendChild(newP3);
/*
2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
*/
const h2 = document.querySelector('h2')
h2.textContent='Wubba Lubba dub dub';
/*
2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul')
const li = document.createElement('li')
body.appendChild(ul);
for (let element = 0; element < apps.length ; element++) {
	const newLi = li.cloneNode(true);
	ul.appendChild(newLi);
	newLi.textContent = apps[element];
}
/*
2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
*/
const remove_me = document.querySelectorAll('.fn-remove-me');
for (let index = 0; index < remove_me.length; index++) {
	remove_me[index].remove();

}
/*
2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.
*/
const newP4 = document.createElement('p');
newP4.textContent = 'Voy en medio!';
newDiv.parentNode.insertBefore(newP4, newDiv.nextSibling);
/*
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */
const div_insert = document.querySelectorAll('.fn-insert-here');
const newP5 = document.createElement('p');
body.appendChild(div_insert.appendChild(newP5));
newP5.textContent='Voy dentro!';	