function darFecha() {
    var fecha = document.getElementById("fecha").innerHTML;
    var meses = document.getElementById("meses").innerHTML;

    var year = fecha.substring(0,4);
    var mes = fecha.substring(5,7);
    var dia = fecha.substring(8,10);

    sumarMeses(Number(year), Number(mes), Number(meses), Number(dia));

}

function sumarMeses(year, mes, meses, dia){
    var totalMeses = mes+meses

    while(totalMeses > 12){
        year = year +1;
        totalMeses = totalMeses - 12;
    };

    message(year, totalMeses, dia);
}

function message(year, mes, dia){
    var updateFecha = year + "/" + mes + "/" + dia;
    document.getElementById("fechafinal").innerHTML = updateFecha;
}