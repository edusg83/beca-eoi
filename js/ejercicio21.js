function boton1(){
    var elmentoP = document.getElementById("p1");
    var buttonOne = document.getElementById("boton1");

    if(elmentoP.className == ""){
        elmentoP.className = "Parrafo";
        buttonOne.innerText = "Quitar estilo a párrafo";
        buttonOne.className = "aplicado";
    } else {
        elmentoP.className = "";
        buttonOne.innerText = "Aplicar estilo a párrafo";
        buttonOne.className = "";
    }
}