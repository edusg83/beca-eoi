// function test(){
//     try {
//         throw new EvalError(["Se ha producido un error", "ejercicio13.js", "100"]);
//       } catch (error) {
//         console.log(error);
//       }
// }

function sumaFecha() {
    //creo la fecha con sus parametros
    var year1 = document.getElementById("year").innerHTML;
    var day1 = document.getElementById("day").innerHTML;
    var month1 = document.getElementById("month").innerHTML;
    var n1 = document.getElementById("n1").innerHTML;
    var fecha = new Date(year1, day1, month1);
    //hago la operacion
    fecha.setMonth(fecha.getMonth()+ n1);
    //lo inyecto en div en html
    document.getElementById("div1").innerHTML = fecha;
}