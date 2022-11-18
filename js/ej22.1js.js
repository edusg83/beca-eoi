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

    switch (fechaActual[1]) {
        case 1,3,5,7,8,10,12: if (fechaActual[2] > 31) {fechaActual[2] = 31}; break;
        case 4,6,9,11: if (fechaActual[2] > 30) {fechaActual[2] = 30}; break;
        case 2: if (esBisiesto(fechaActual[0])){
                    if (fechaActual[2] > 29) {fechaActual[2] = 29}
                } else {
                    if (fechaActual[2] > 28) {fechaActual[2] = 28}
                }; break;
    }

    if (fechaActual[1] < 10) {fechaActual[1] = '0'+String(fechaActual[1])};

    var updateFecha = fechaActual[0] + "/" + fechaActual[1] + "/" + fechaActual[2];
    document.getElementById("resultado").innerHTML=updateFecha;
}

function esBisiesto (year) {
    return (year % 400 === 0) ? true : 
                (year % 100 === 0) ? false : 
                    year % 4 === 0;
  };