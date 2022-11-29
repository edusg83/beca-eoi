interface funciones<T,U>{
    (p1: T, p2: U):T;
};

let mayor:funciones<number,number>=(p1:number, p2:number)=>{
    return p1>p2?p1:p2;
}

export default mayor;

