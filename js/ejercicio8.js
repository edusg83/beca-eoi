var param1 = 12;

var param2 = 12;

var result = param1 + param2;

function Sum(param1, param2) {
    alert(param1 + param2);
    document.getElementById("result").innerHTML=param1 + param2;
    return console.log(result);  
}

Sum(12,12);

console.log(result);

(function(param1, param2) {
    console.log(param1+param2);
}(12,12));