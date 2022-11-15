function sumarmeses(year, mes, meses, dia) {
    var totalMeses = mes+meses

    while(totalMeses > 12) {
        year = year + 1;
        totalMeses = totalMeses - 12;
    };
    
    var updateFecha = year + "/" + totalMeses + "/" + dia;
    document.getElementById("resultado").innerHTML=updateFecha;
}

function fecha() {
    var fecha = document.getElementById("fecha").innerHTML;
    var meses = document.getElementById("meses").innerHTML;

    var year = fecha.substring(0,4);
    var mes = fecha.substring(5,7);
    var dia = fecha.substring(8,10);

    sumarmeses(Number(year),Number(mes),Number(meses),Number(dia));
}