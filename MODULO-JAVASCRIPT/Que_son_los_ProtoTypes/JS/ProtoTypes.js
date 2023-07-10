//poo

const producto = {
    nombre: "tablet",
    precio: 500
}

function producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new producto('Monitor curvo 49 pulgadas', 800);
const producto3 = new producto('Laptop', 300);

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}