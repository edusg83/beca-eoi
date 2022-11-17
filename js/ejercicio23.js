const formu = document.getElementById("form");

formu.addEventListener('submit', function(e) {
    e.preventDefault();

    const formuData = new FormData(formu);

    var nombre = formuData.get("name");
    if(nombre.length >= 20){
        window.alert("Su nombre es demasiado largo");
        return false;
    } else {
        return true;
    }
});

