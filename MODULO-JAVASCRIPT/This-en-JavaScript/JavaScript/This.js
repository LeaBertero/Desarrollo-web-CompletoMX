// alert('Hola mundo');
//Ejemplo de This en JavaScript


//objeto = object literal
//template string ${ espacio donde se puede conbonar variables con strings }

const reservacion = {
    nombre: 'Leandro',
    apellido: 'Bertero',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre}, reservó y su cantidad a pagar es de ${this.total}`);
    }
}


const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Bertero',
    total: 5000,
    pagado: false,
    informacion2: function(){
        console.log(`El cliente ${this.nombre}, reservó y su cantidad a pagar es de ${this.total}`);
    }
}



console.log( reservacion.informacion() );
console.log( reservacion2.informacion2() );
    
       
