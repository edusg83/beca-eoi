






function operaciones (){
    let fecha = document.getElementById('fecha').innerHTML;
    let mesesExtra = Number(document.getElementById('meses').innerHTML);

    let fechaSplit = fecha.split("-");
    let ano = Number(fechaSplit[0]);
    let mes = Number(fechaSplit[1]);
    let dia = Number(fechaSplit[2]);

    
    let mesesTotales = mes + mesesExtra;

    while (mesesTotales > 12){
        ano++;
        mesesTotales = mesesTotales - 12;
    }

    let cadena = dia + "/" + mesesTotales + "/" + ano;  
    document.getElementById("resultado").innerHTML = cadena;
}





















































































/*
try{
    eval = la"S;
} catch (EvalError){
    throw new EvalError("Error de sintaxis","fichero.js",100);
}
*/