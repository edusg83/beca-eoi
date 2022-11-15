function suma (param1,param2){
    var resultado = param1+param2;
    document.getElementById("resultado").innerHTML=(param1+param2);
    return console.log(resultado);
}

(function (param1,param2){
    var resultado = param1+param2;
    return console.log(resultado)
}(12,12))