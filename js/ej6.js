var array1 = [1,2,3,4];

for(var a in array1){
    switch(array1[a]){
        case 1:console.log("UNO");break;
        case 2:console.log("DOS");break;
        case 3:console.log("TRES");break;
        case 4:console.log("CUATRO");break;
        default: console.error("ERROR");
    }
}