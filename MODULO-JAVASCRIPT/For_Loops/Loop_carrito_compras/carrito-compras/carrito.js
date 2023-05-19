//loop ejemplo de carrito de compras 

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Laptop', precio: 800}    
];

for (let incremento =0; incremento < carrito.length; incremento++){
    console.log(carrito[incremento]);
}