//array metods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

meses.forEach(function(mes){
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});


//Includes
const resultado = meses.includes('Diciembre');
// const resultado2 = carrito.includes('Celular');
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular'  
})

// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio
// },0)

resultado = carrito.reduce((total,producto) => total + producto.precio,0);

//some = ideal para arreglos de objetos
console.log(resultado); 


        