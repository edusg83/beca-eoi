(function(){
    var doc = document,
    element = doc.createElement("p"),
    contenido = doc.createTextNode("<strong>Este texto está añadido dinámicamente</strong>"),
    pTres = doc.getElementById("tres");

    element.appendChild(contenido);
    elem.id = "conAppendChild";

    pTres.parentNode.appendChild(element);
}());