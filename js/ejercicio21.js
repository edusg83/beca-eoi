(function(){
    var doc = document,
        body = doc.getElementById("body"),
        newP = doc.createElement("p"),
        contenido = doc.createTextNode("Párrafo 1");
    
    newP.appendChild(contenido);
    newP.id = "p1";
    body.appendChild(newP);
}());

(function(){
    var doc = document,
        boton = doc.createElement("button"),
        pbody = doc.getElementById("p1");
        contenido = doc.createTextNode("Aplicar estilo a parrafo");

    boton.appendChild(contenido);
    boton.id = "boton1";
    boton.setAttribute("onclick", "asignarEstilo()");

    pbody.appendChild(boton);
}());

function asignarEstilo() {
    var doc = document,
        p = doc.getElementById("p1"),
        atributoP = p.getAttribute("class");
    
    if(atributoP != "parrafo"){
        p.setAttribute("class", "parrafo");
        boton1.setAttribute("class", "aplicado");
        boton1.innerText = "Quitar estilo a parrafo";
    } else if (atributoP == "parrafo") {
        p.setAttribute("class", "");
        boton1.setAttribute("class", "");
        boton1.innerText = "Aplicar estilo a parrafo";
    }
}
