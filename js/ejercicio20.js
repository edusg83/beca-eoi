(function(){
    var doc = document,
    elem = doc.createElement("p"),
    pTres = doc.getElementById("tres");

elem.innerHTML = "<strong>Nuevo parrafo creado dinamicamente</strong>";
elem.id ="conInner";

pTres.parentNode.replaceChild(elem, pTres);

//Cambio del id
pTres.setAttribute("id", "parrafo1");
console.log(pTres.getAttribute("id"));
}());

