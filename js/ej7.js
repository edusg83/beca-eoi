var pieza1={
    peso:20
}

var pieza2={
    peso:'20'
}

if(pieza1.peso==pieza2.peso){
    console.log("Pesan lo mismo");
}else{
    console.log("No pesan lo mismo")
}

if(pieza1.peso===pieza2.peso){
    console.log("Es lo mismo");
}else{
    console.log("No es lo mismo")
}

if(pieza1.peso==20){
    console.log(pieza1.peso+pieza2.peso);
}else{
    console.log(pieza1.peso*pieza2.peso);
}