interface objetoCliente<T,U>{
    cliente:T;
    estado:U;
};

enum CLIENTES {codigo,estado};

let cliente1 : objetoCliente<string,string>={cliente:'ANTONIO',estado:'ACTIVO'};
console.log(cliente1);

let cliente2 : objetoCliente<number,number>={cliente:12,estado:1};
console.log(cliente2);

let cliente3 : objetoCliente<number,number>={cliente:CLIENTES.codigo,estado:CLIENTES.estado};
console.log(cliente3);

export default cliente1; cliente2; cliente3;