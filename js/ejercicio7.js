pieza1={
    peso:20
};

pieza2={
    peso:'20'
};

if(pieza1.peso==pieza2.peso){
    alert("Son iguales.")
}else{
    alert("No son iguales.")
}

if(pieza1.peso===pieza2.peso){
    alert("Son iguales.")
}else{
    alert("No son iguales.")
}

pieza1.peso == '20' ? (alert(pieza1.peso+pieza2.peso)):(alert(pieza1.peso*pieza2.peso));