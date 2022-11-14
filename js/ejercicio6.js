var array1 = [1, 2, 3, 4];
var numero = undefined;

for(var i in array1) {
    switch(array1[i]){
        case 1:
         numero ="1"; break;
        case 2:
         numero ="2"; break;
        case 3:
         numero ="3"; break;
        case 4:
         numero ="4"; break;
        default:
         numero ="No existen más valores";
    }
console.log (numero);    
}

array1.push(3);
console.log(array1);

console.log(array1.splice(-3));
console.log(array1);