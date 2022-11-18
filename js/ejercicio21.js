
elemento1 = document.getElementsByClassName("parrafo");
elemento1.setAttribute("style","color:red; text-decoration:underline; font-size:2em;");

elemento2 = document.getElementsByClassName("aplicado");
elemento2.setAttribute("style", "background-color: yellow;");

elemento3 = document.createElement("p");
elemento3.setAttribute("id","p1");
contenido1 = document.createTextNode("Parrafo1");
elemento3.appendChild(contenido1);

elemento4 = document.createElement("button");
elemento4.setAttribute("id","boton1");
contenido2 = document.createTextNode("Aplicar estilo al parrafo.");
elemento4.appendChild(contenido2);
elemento3.appendChild(elemento4);

var botonClick = function(){
    var ele1= document.getElementById("p1");
    var ele2= document.getElementById("boton1");

    if(ele1.className==""){
        ele1.
    }


}
