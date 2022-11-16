(function () {
    var 
        doc = document,
        elem = doc.createElement("p"),
        pTres = doc.getElementById("tres");
    
    elem.innerHTML = "Este texto está añadido dinámicamente";
    elem.setAttribute("id","parrafo1");

    pTres.parentNode.appendChild(elem);
    console.log(doc.getElementById("parrafo1"));
}());

