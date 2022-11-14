let array1 = [1,2,3,4];
    for(let i=0;i<array1.length;i++){
    switch(array1[i]){
        case 1: console.log(array1[i]);
        break;
        case 2: console.log(array1[i]);
        break;
        case 3: console.log(array1[i]);
        break;
        case 4: console.log(array1[i]);
        break;
    }
}

array1.push(3);
console.log(array1);
array1.splice(-3);
console.log(array1);