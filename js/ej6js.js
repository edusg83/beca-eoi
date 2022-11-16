var array1 = [1,2,3,4];

for (var index in array1 ) {
    switch (array1[index]) {
        case 1: console.log("UNO"); break;
        case 2: console.log("DOS"); break;
        case 3: console.log("TRES"); break;
        case 4: console.log("CUATRO"); break;
        default: console.log("Array vacia"); break;
    }
}

var index = 0;
do {
    switch (array1[index++]) {
        case 1: console.log("UNO"); break;
        case 2: console.log("DOS"); break;
        case 3: console.log("TRES"); break;
        case 4: console.log("CUATRO"); break;
        default: console.log("Array vacia"); break;
    }
}
while(index < array1.length);

array1.push(3);
console.log(array1);

array1.splice(-3);
console.log(array1);

