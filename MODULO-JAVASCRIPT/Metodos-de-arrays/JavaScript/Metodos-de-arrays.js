
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
];

meses.forEach(function(mes){
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

const resultado = meses.includes('Marzo');
console.log(resultado);
        