// var velocidad = 1000,
//     i = 0;
// miFuncion = function(){
//     console.log("Batman devuelve " + i);
//     i = i + 1;
//     if(i < 10) {
//         setTimeout (miFuncion, velocidad);
//     }
// };
// setTimeout(miFuncion, velocidad);

// var velocidad = 2000,
//     i = 0;
// miFuncion = function(){
//     console.log("Batman devuelve " + i);
//     i = i + 1;
//     if(i > 9) {
//         clearInterval (timer);
//     }
// };
// var timer = setInterval(miFuncion, velocidad);

(function() {
    var velocidad = 10,
        mueveCaja = function(pasos){
            var el = document.getElementById("caja"),
                izq = el.offsetLeft;
            
            if((pasos > 0 && izq > 399) || (pasos < 0 && izq < 51)) {
                clearTimeout(timer);
                timer = setInterval(function() {
                    mueveCaja(pasos * -1);
                }, velocidad);  
            }
            el.style.left = izq + pasos + "px";
        };
    var timer = setInterval(function() {
        mueveCaja(3);
    }, velocidad);
}());