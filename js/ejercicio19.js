/*
(function(){
    var doc = document,
    elem = doc.createElement("p"),
    contenido = doc.createTextNode("Nuevo párrafo creado dinámicamente"),
    pTres = doc.getElementById("tres");
    
    
    elem.appendChild(contenido);
    elem.id = "conAppendChild";
    pTres.parentNode.appendChild(elem)

}());
*/


(function(){
    var doc = document,
    elem = doc.createElement("p"),
    contenido = doc.createTextNode("Nuevo párrafo creado dinámicamente"),
    pTres = doc.getElementById("cuerpo");
    
    
    elem.appendChild(contenido);
    elem.id = "conAppendChild";
    pTres.parentNode.appendChild(elem);

}());
