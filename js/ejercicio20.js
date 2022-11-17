(function(){
    var doc = document,
    elem = doc.createElement("p"),
    pTres = doc.getElementById("tres");

elem.innerHTML = "Nuevo parrafo creado dinamicamente";
elem.setAttribute("id", "parrafo1");

pTres.parentNode.appendChild(elem);

//imprimo tambien todo el parrafo
console.log(doc.getElementById("parrafo1"));
}());

