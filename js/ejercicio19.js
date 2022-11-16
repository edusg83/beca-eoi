

/*
PRIMERA FORMA

miElemento = document.createElement("p");
contenido = document.createTextNode("<b>Este texto esta añadido dinamicamente.</b>");
miElemento.appendChild(contenido);

document.getElementById("cuerpo").appendChild(miElemento);
*/



miElemento = document.createElement("p");
miElemento2 = document.createElement("b")
contenido = document.createTextNode("Este texto esta añadido dinamicamente.");
miElemento2.appendChild(contenido);
miElemento.appendChild(miElemento2);

document.getElementById("cuerpo").appendChild(miElemento);