

function error(){
try{
    throw error;
}catch(error){
    
    throw new EvalError ('Se ha producido un error.','ejercicio13.js',100);
}
}