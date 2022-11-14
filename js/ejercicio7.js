var pieza1 = {
    peso:20
};
var pieza2 = {
    peso:"20"
};

if(pieza1.peso == pieza2.peso){
    console.log("Correcto con ==")
}else{
    console.log("Incorrecto con ==")
}

if(pieza1.peso === pieza2.peso){
    console.log("Correcto con ===")
}else{
    console.log("Incorrecto con ===")
}

var d = (pieza1.peso === "20") ? (pieza1.peso + pieza2.peso): (pieza1.peso * pieza2.peso);
console.log(d);