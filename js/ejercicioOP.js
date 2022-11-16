(function(){
    var doc = document,
    element = doc.createElement("p"),
    contenido = doc.createTextNode("<strong>Nuevo párrafo creado dinámicamente</strong>"),
    pTres = doc.getElementById("tres");

    element.appendChild(contenido);
    element.id = "conAppendChild";

    pTres.parentNode.appendChild(element);
}());

(function(){
    var 
    doc = document,
    elem = doc.createElement("p"),
    pTres = doc.getElementById("tres");

    elem.innerHTML = "<strong>Nuevo párrafo creado dinámicamente</strong>";
    elem.id = "conInner";

    pTres.parentNode.replaceChild(elem, pTres);
}());