// alert('Hola')


//objeto literal
// const producto = {
//     nombre: 'Tablet',
//     precio: 500,

// }


//objeto constructor
function producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new producto("Monitor curvo 50 pulgadas", 800);
console.log(producto2);


// console.log(producto2);





