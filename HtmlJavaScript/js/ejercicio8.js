function suma (a, b){
    return a+b
}

(function (a, b){
    return a+b
}(12, 12))


console.log(suma(12, 12))






var obj = {
counter : 0,
inc: function (value){
    this.counter += typeof value == "number" ? value : 1;
},
}

obj.inc();
console.log("Valor del contador: " + obj.counter)

obj.inc(2);
console.log("Valor del contador: " + obj.counter)