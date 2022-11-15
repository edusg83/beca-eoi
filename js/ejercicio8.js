function suma(param1,param2){
    alert(param1+param2);
    return console.log(param1+param2);
}

console.log(suma(12,12));

(function (param1, param2){
    console.log(param1+param2);
}(12,12))