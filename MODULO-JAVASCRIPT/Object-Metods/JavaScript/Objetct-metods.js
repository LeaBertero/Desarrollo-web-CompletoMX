//Object Metods

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //no permite agregar modificar o borrar ninguna de las propiedades del objeto

producto.imagen = 'imagen.jpg';

console.log(producto);