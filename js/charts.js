var url = location.href; 
console.log(url);//file:///C:/Users/Eduardo/Downloads/BECA/beca-eoi-1/charts.html?name=Eduardo&edad=39
var variables=url.split('?');//[0]=file:///C:/Users/Eduardo/Downloads/BECA/beca-eoi-1/charts.html
//[1]=name=Eduardo&edad=39
console.log(variables);
var cadenas=variables[1].split('&');
console.log(cadenas);
var nombre=cadenas[0].split('=');
var edad=cadenas[1].split('=');
console.log("Nombre: "+nombre[1]+" - Edad: "+edad[1]);