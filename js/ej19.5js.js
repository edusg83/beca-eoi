(function () {
    var 
        doc = document,
        elem = doc.createElement("p"),
        pTres = doc.getElementById("tres");
    
    elem.innerHTML = "Este texto está añadido dinámicamente";

    pTres.parentNode.appendChild(elem);
}());