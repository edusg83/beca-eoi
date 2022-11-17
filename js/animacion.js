(function(){
   var velocidad = 10,
   mueveCaja = function(pasos){
    var el = document.getElementById("caja"),
    izq=el.offsetLeft;

    if((pasos>0&&izq>399) || (pasos<0&&izq<51)){
        clearTimeout(timer);
        timer = setInterval(function() {
            mueveCaja(pasos * -1);
        }, velocidad);
    }

    el.style.left = izq + pasos + "px";
   };

   var timer = setInterval(function () {
    mueveCaja(3);
   }, velocidad);
}());

