//Metodos de propiedad

const reproductor = {

    //objetos
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el ID ${id}`);
    },

    pausar: function(){
        console.log('Pausando...')
    },

    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist ${nombre}`)
    },

    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }


}

//objetos
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}

//llamamos a los metodos
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');





