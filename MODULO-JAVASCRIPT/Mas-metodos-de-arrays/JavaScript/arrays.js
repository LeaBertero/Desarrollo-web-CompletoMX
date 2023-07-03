alert('Bienvendo');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'bocinas', precio: 500},
    {nombre: 'Laptop', precio: 500},
];

//foreach

meses.forEach(function(mes){
    // console.log(mes);
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    } 
});

//Inlcludes
const resultado = meses.includes('Marzo');
console.log(resultado);