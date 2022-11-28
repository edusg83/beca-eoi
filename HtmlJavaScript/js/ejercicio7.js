var pieza1 = {
    peso:20,
};

var pieza2 = {
    peso:"20",
};

console.log(pieza1.peso==pieza2.peso);
console.log(pieza1.peso===pieza2.peso);

value = (pieza1.peso="20") ? (pieza1.peso + pieza2.peso) : (pieza1.peso*pieza2.peso);
console.log(value);

