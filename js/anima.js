var velocidad = 2000,
i = 0;

miFuncion = function (){
    console.log("Batman vuelve " + i);
    i = i + 1;
    if(i < 10) {
        setTimeout(miFuncion, velocidad);
    }
};

setTimeout(miFuncion, velocidad);
