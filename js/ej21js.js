(function () {
    var elem = document.createElement("p"),
        text = document.createTextNode("Párrafo 1"),
        pend = document.getElementById("body");
    
        elem.setAttribute("id","p1");
        elem.appendChild(text);
    
        pend.parentNode.appendChild(elem);
}());

(function () {
    var elem = document.createElement("button"),
        text = document.createTextNode("Aplicar estilo a párrafo"),
        pend = document.getElementById("p1");

        elem.setAttribute("id","boton1");
        elem.appendChild(text);

        pend.parentNode.appendChild(elem);
}());

(function (){
var boton = document.getElementById("boton1"),
    par1 = document.getElementById("p1");

boton.onclick = function () {
        if(par1.className==""){
            par1.classList.add("parrafo","aplicado");
            boton.innerHTML="Quitar estilo a párrafo";
        } else {
            par1.classList.remove("parrafo","aplicado");
            boton.innerHTML="Aplicar estilo a párrafo";
        };
    }
}());