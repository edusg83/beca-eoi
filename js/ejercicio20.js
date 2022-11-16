miElemento = document.createElement("p");
miElemento.setAttribute("id","parrafo1");
contenido = document.createTextNode("<b>Este texto esta añadido dinamicamente.</b>");
miElemento.appendChild(contenido);

document.getElementById("cuerpo").appendChild(miElemento);