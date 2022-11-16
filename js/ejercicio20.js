
/*
(function(){
    var doc = document,
    elem = doc.createElement("p"),
    contenido = doc.createTextNode("Nuevo párrafo creado dinámicamente"),
    pTres = doc.getElementById("tres");
    
    
    elem.appendChild(contenido);
    elem.id = "conAppendChild";
    pTres.parentNode.appendChild(elem);

}());
*/




(function(){
    var doc = document,
    pTres = doc.getElementById("tres");
    
    pTres.setAttribute("id", "parrafo1")
   

}());
