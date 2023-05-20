//Ejemplo de forEach

const carrito = [

    {nombre: 'Monitor 20 pulagas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifnos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}

];

//ForEach

carrito.forEach(function(producto){
    console.log(producto);
});
