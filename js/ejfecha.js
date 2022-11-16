function TresMeses(fecha){

    var e = new Date(fecha)
    e.setMonth(e.getMonth() + 3);

    document.getElementById("resultado").innerHTML = ("Fecha: "+e.getFullYear() +"-"+ (e.getMonth()+1) +"-"+ e.getDate());
}