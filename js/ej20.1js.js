var velocidad = 2000,
    i = 0;

miFuncion = function () {
    console.log("batman vuelve " + i++);
    if (i < 10) {
        setTimeout(miFuncion, velocidad);
    }
};
setTimeout(miFuncion,velocidad);

miFuncion2 = function() {
    console.log("batman vuelve " + i++);
    if(i > 9) {
        clearInterval(timer);
    }
};
var timer = setInterval(miFuncion2,velocidad);

