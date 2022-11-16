(function(){
    var doc = document,
    element = doc.createElement("p"),
    pTres = doc.getElementById("tres");

    element.innerHTML = "Este texto está añadido dinamicamente";
    element.setAttribute("id", "parrafo1");

    pTres.parentNode.appendChild(element);
    console.log(doc.getElementById("parrafo1"));
}());