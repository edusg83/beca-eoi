let animales:Array<string> = ["Perro", "Gato"]

let animal = new Map();
animal.set('raza','MASTIN');
animal.set('peso','100');

let aviones = new Set();
aviones.add("Boeing 747")
aviones.add("Falcon")



animales.forEach(item =>{
    console.log(item);
})

for (let ani of animal){
    console.log(ani);  
}


