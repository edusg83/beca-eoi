function suma (param1,param2){
    var resultado = param1+param2
    return console.log(resultado);
}

(function (param1,param2){
    suma(param1,param2);
}(5,5))
