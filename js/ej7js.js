var pieza1={peso:20}, 
    pieza2={peso:'20'}

console.log(pieza1['peso'] == pieza2['peso']);

console.log(pieza1['peso'] === pieza2['peso']);

var calculo = (pieza1['peso'] == '20') ? pieza1['peso']+Number(pieza2['peso']) : pieza1['peso']*Number(pieza1['peso']);
console.log(calculo);

function Test(op1,op2){

    return null;
}