const formu = document.getElementById("form");

formu.addEventListener('submit', function(e) {
    e.preventDefault();

    const formuData = new FormData(formu);

    var nombre = formuData.get("name");
    var email = formuData.get("email");
    var select = formuData.get("provincias");

    var nameInicial = nombre.startsWith("ANTONIO");
    var confi = [false, false, false];
    var result = "";

    if(nombre.length < 20 && nameInicial === true){
        result += "Nombre: " + nombre;
        confi[0] = true;
    } 

    if(email.length > 0){
        result += "<br>";
        result = "Email: " + email;
        result += "<br>";
        confi[1] = true;
    }

    result += "Provincia: " + select;

    if(verificado[0] === true && verificado[1] === true) {
        document.getElementById("resultado").innerHTML = result;
    } else {
        document.getElementById("resultado").innerHTML = "Los resultados obtenidos no son correctos";
    }
});

