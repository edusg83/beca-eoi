(function(){
    var doc = document,
    elem = doc.createElement("p"),
    pbody = doc.getElementById("body");
elem.innerHTML = "Parrafo1";
elem.setAttribute("id", "p1");
pbody.parentNode.appendChild(elem);
}());

(function(){
    var doc = document,
    elem = doc.createElement("button"),
    pbody = doc.getElementById("p1");
elem.innerHTML = "Aplicar estilo a parrafo";
elem.setAttribute("id", "boton1");
pbody.parentNode.appendChild(elem);
}());

var el = document.getElementById("boton1");
el.onclick = function aplicarEstilo() {
    var parr = document.getElementById("p1")
    if(parr.style != parr.getAttribute) {
       parr.setAttribute("class", "parrafo");
       elem.innerHTML = "Quitar estilo a párrafo";
    }else if(parr.style == parr.getAttribute) {
        parr.setAttribute("class", "aplicado");
        elem.innerHTML = "Aplicar estilo a párrafo";
    }
};

