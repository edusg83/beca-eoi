function fecha() {
    var fecha = document.getElementById("fecha").innerHTML;
    var meses = document.getElementById("meses").innerHTML;

    var fechaActual = fecha.split("-");

    var suma = (Number(fechaActual[1]) + Number(meses));

    sumarmeses(suma,fechaActual);
}

function sumarmeses(suma,fechaActual) {
 
    while(suma > 12) {
        fechaActual[0] = Number(fechaActual[0]) + 1;
        suma = Number(suma) - 12;
    };
    fechaActual[1] = suma;
    
    mensaje(fechaActual);
}

function mensaje(fechaActual) {
    if (fechaActual[1] < 10) {fechaActual[1] = '0'+String(fechaActual[1])};
    if (fechaActual[2] < 10) {fechaActual[2] = '0'+fechaActual[2]};

    var updateFecha = fechaActual[0] + "/" + fechaActual[1] + "/" + fechaActual[2];
    document.getElementById("resultado").innerHTML=updateFecha;
}