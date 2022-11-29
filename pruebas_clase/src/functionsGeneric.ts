function generica<U>(parametro:U):U {
    return parametro;
}


let resultadoCadena = generica<string>('HOLA MUNDO');

let num = generica<number>(50);

let arraNum= generica([33,22,50,09]);

let arrayCadenas= generica<Array<string>>(['Néstor','Hector','Victor']);

export default generica;