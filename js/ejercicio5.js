var array1 = [1, 2, 3, 4];
var resultado ="";

for(var i= 0; i < array1.length; i++){
    switch(array1[i]){
        case 1:
            resultado ="1"; break;
        case 2:
            resultado ="2"; break;
        case 3:
            resultado ="3"; break;
        case 4:
            resultado ="4"; break;
        default:
            resultado ="No existen más valores";
    }
}
console.log(resultado);

array1.push(3);
console.log(array1);

console.log(array1.splice(-3));
console.log(array1);