/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
*/
const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);
const li = document.createElement('li');
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
for (let element = 0; element < countries.length ; element++) {
	const newLi = li.cloneNode(true);
	ul.appendChild(newLi);
	newLi.textContent = countries[element];
}
/*
1.2 Elimina el elemento que tenga la clase .fn-remove-me.
*/
const elementRemove = document.querySelectorAll('.fn-remove-me');
for (const element of elementRemove) {
	element.remove()
}
/*

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
*/
const div = document.querySelector('[data-function="printHere"]')

const newUl = document.createElement('ul');
body.appendChild(div.appendChild(newUl));
const Li = document.createElement('li');
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
for (let element = 0; element < cars.length ; element++) {
	const newLI = Li.cloneNode(true);
	ul.appendChild(newLI);
	newLI.textContent = cars[element];
}
/*
1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
*/
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let index = 0; index < countries2.length; index++) {
		
	const newsDivs = document.createElement('div');
	body.appendChild(newsDivs)
	const newH4 = document.createElement('h4');
	const img = document.createElement('img');
	newsDivs.appendChild(newH4); 
	newsDivs.appendChild(img);
	newH4.textContent = countries2[index].title;
	img.src = countries2[index].imgUrl;
}
/*
1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.
*/
const button = document.createElement('button');
body.appendChild(button);
button.textContent = 'Eliminar último elemento';
button.onclick = function() {
    const allDivs = document.querySelectorAll('div'); // Selecciona todos los divs
    const lastDiv = allDivs[allDivs.length - 1]; // Obtiene el último div
    if (lastDiv) {
        lastDiv.remove(); // Elimina el último div
    }
    // eliminar el botón si no hay más divs
    if (allDivs.length <= 1) {
        button.remove();
    }
};
/*
1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.
*/
// Seleccionar todos los divs creados
const allDivs = document.querySelectorAll('div');

for (const div of allDivs) {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Borrar Div';
    botonEliminar.onclick = function() {
        div.remove();
    };
    div.appendChild(botonEliminar);
}

