let array1 = [1,2,3,4];
let result = "";

console.log(array1);


for(let a in array1) {

    switch(array1[a]){
        case 1:
            result = "UNO";
            break;
    
        case 2:
            result = "DOS";
            break;
    
        case 3:
            result = "TRES";
            break;
            
        case 4:
            result = "CUATRO";
            break;
    }

}
console.log(result);

console.log(array1.push(3));

console.log(array1);

console.log(array1.splice(-3));
console.log(array1);

