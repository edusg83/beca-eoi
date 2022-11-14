//apartado A
var pieza1 = {
    peso:20
};
var pieza2 = {
    peso:"20"
};
console.log(pieza1);
console.log(pieza2);

//apartado B
if(pieza1.peso == pieza2.peso){
    console.log("Correcto con ==")
}else{
    console.log("Incorrecto con ==")
}

//apartado C
if(pieza1.peso === pieza2.peso){
    console.log("Correcto con ===")
}else{
    console.log("Incorrecto con ===")
}

//apartado D
var d = (pieza1.peso === "20") ? (pieza1.peso + pieza2.peso): (pieza1.peso * pieza2.peso);
console.log(d);