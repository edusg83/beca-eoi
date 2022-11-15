/*(function(num){
    var counter=0;

    function viaAlert() {alert("Valor: "+(++num)); };
    function viaConsole() {console.log("Valor: "+(num--));};

    viaAlert();
    viaConsole();
    counter++;
    console.log("Valor num: "+num);
})(3);*/

/*var color="Azul";

function experimento(){
    var color="Amarillo";
    console.log(color);
}

experimento();

var color="Verde";

experimento();

console.log(color);*/

var obj={
    counter:0,
    inc: function(value){
        this.counter+=typeof value==='number' ? value: 1;

    },
};

obj.inc();
console.log(obj.counter);

obj.inc(2);
console.log(obj.counter);