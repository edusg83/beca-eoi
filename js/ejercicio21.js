(function(){
    cuerpo = document.getElementById("cuerpo");
    
    newP = document.createElement("p"),
    contenido = document.createTextNode("Párrafo 1"),
    
    newP.appendChild(contenido);
    newP.id = "p1";

    cuerpo.appendChild(newP);
}());


(function(){
    parrafo1 = document.getElementById("p1");
    
    newButton = document.createElement("button"),
    contenido = document.createTextNode("Aplicar estilo a párrafo"),
    
    newButton.appendChild(contenido);
    newButton.id = "boton1";
    newButton.setAttribute("onclick", "asignarOnclick()")

    parrafo1.appendChild(newButton);
}());



function asignarOnclick(){
    parrafo1 = document.getElementById("p1");

    atributoParrafo1 = parrafo1.getAttribute("class");
    if (atributoParrafo1 != "parrafo"){
        parrafo1.setAttribute("class", "parrafo");
        boton1.setAttribute("class", "aplicado");
        boton1.innerText = "Quitar estilo a párrafo";
        
    } else if (atributoParrafo1 == "parrafo"){
        parrafo1.setAttribute("class", "");
        boton1.setAttribute("class", "");
        boton1.innerText = "Aplicar estilo a párrafo";
    }
}
