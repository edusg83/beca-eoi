(function(){
    var doc = document,
    elem = doc.createElement("p"),
    contenido = doc.createTextNode("<strong>Nuevo parrafo creado dinamicamente</strong>"),
    pTres = doc.getElementById("tres");

elem.appendChild(contenido);
elem.id ="conAppendChild";

pTres.parentNode.appendChild(elem);
}());

(function(){
    var doc = document,
    elem = doc.createElement("p"),
    pTres = doc.getElementById("tres");

elem.innerHTML = "<strong>Nuevo parrafo creado dinamicamente</strong>";
elem.id ="conInner";

pTres.parentNode.replaceChild(elem, pTres);
}());