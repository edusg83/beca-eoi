//let nombre:string='EEE';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let nombre = 'Néstor';
let edad = 27;
let estudio = true;
let formacion = ['RPA', 'Angular', 'JAVA', 'Bootstrap'];
let [v1, v2, ...v3] = formacion;
console.log(v1, v2, v3);
let direc;
direc = ['Capitan Segarra', 18];
var Cursos;
(function (Cursos) {
    Cursos[Cursos["Tecnico"] = 0] = "Tecnico";
    Cursos[Cursos["Programador"] = 1] = "Programador";
    Cursos[Cursos["Junior"] = 2] = "Junior";
})(Cursos || (Cursos = {}));
;
let cursos = Cursos.Tecnico;
let unknown;
unknown = 'EXTRAÑO';
let place = {
    ubi: 'Rojales',
    cerca: 'Murcia',
    km: 20,
    mascerca: 'Guardamar'
};
let { cerca, ubi } = place, resto = __rest(place, ["cerca", "ubi"]);
console.log(cerca, ubi, resto);
console.log(nombre);
console.log(edad);
console.log(estudio);
console.log(formacion);
console.log(direc[0]);
console.log(cursos);
console.log(unknown);
console.log(place);
