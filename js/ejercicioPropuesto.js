function myFunction(fecha, meses){
let fechaConvertida = fecha.split(['-']);

suma(Number(fechaConvertida[0]),Number(fechaConvertida[1]),Number(fechaConvertida[2]));


function suma(anyo, mes, dia, meses){
    let mesesTotal= meses+mes;
    let anyoTotal = anyo;
    while(mesesTotal>12){
        anyoTotal=anyoTotal+1
        mesesTotal=mesesTotal-12;
    }

    devolverFecha(anyoTotal,mesesTotal,dia);
}

function devolverFecha(anyo,mes,dia){
    document.getElementById("fecha").innerHTML = anyo+"/"+mes+"/"+dia;
}



}

