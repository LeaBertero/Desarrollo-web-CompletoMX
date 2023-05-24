//Ejemplo de prototypes

const producto = {
    nombre: "Tablet",
    precio: 500,
}

function producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new producto('Monitor curvo 49 pulgadas', 800);
const producto3 = new producto('Laptop', 300);

function formatearProducto(producto){
    return `${producto}`;
}

console.log(producto2);
console.log(producto3);