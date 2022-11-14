pieza1 = {
    peso:20
};

pieza2 = {
    peso:'20'
};

console.log(pieza1);

console.log(pieza2);

if(pieza1.peso == pieza2.peso){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}


if(pieza1.peso === pieza2.peso){
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

pieza1.peso = '20' ? (alter(pieza1.peso+pieza2.peso)):(alter(pieza1.peso*pieza2.pes));