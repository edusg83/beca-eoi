(function () {
    var 
        doc = document,
        elem = doc.createElement("p"),
        contenido = doc.createTextNode("<strong>Nuevo párrafo creado dinámicamente</strong>"),
        pTres = doc.getElementById("tres");

    elem.appendChild(contenido);
    elem.id = "conAppendChild";

    pTres.parentNode.appendChild(elem);
}());

(function () {
var
    doc = document,
    elem = doc.createElement("p"),
    pTres = doc.getElementById("tres");

    elem.innerHTML = "<strong>Nuevo párrafo reemplazado dinámicamente</strong>";
    elem.id = "conInner";

    pTres.parentNode.replaceChild(elem,pTres);
}());

(function () {
    

}())