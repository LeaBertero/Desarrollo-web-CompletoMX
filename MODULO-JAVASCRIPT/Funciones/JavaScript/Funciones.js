//Funciones en JavaScript

//Declaracion de funcion
function sumar() {
    console.log(10+10);
}

//llamar la funcion
sumar();

const sumar2 = function(){
    console.log(3 + 3);
}

sumar2();


//iffe //se mandan a llamar ellas mismas
(function(){
    console.log('Esto es una funcion');
})();



