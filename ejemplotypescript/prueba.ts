console.log("Hola mundo desde TypeScript");
let a: number = 10;
let b: number = 30;

let hola: string = 'Hola mundo';
console.log(hola);
function suma(a: number, b: number): number {
    return a + b;
}
console.log('Resultado', suma(a, b));

let nombres: string[] = ['Juan', 'Pedro', 'Luis'];
console.log("Nombre:", nombres[0]);

let apellidos: Array<string> = ['Perez', 'Gomez', 'Lopez'];
console.log("Apellido:", apellidos[0]);

console.log("Nombres");
nombres.forEach((nombre) => {
    console.log(nombre);
});
console.log("Apellidos");
for (const apellido in apellidos) {
    console.log(apellido);
}
console.log("Nombres completos");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i] + ' ' + apellidos[i]);
}

enum Animales {
    PERRO,
    GATO,
    PEZ,
    CAPIBARA
}
console.log(Animales[Animales.CAPIBARA]);

let tipoMascota: Animales = Animales.CAPIBARA;
console.log(tipoMascota);

interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    mascota?: Animales;
}
let objJuan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    mascota: Animales.PERRO
};

let objPedro: Persona = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    edad: 25
};
console.log(objJuan);
class PersonaClase {
    nombre: string;
    apellido: string;
    edad: number;
    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    nombreCompleto(): string {
        return this.nombre + ' ' + this.apellido;
    }
}
const objMaria = new PersonaClase('Maria', 'Lopez', 28);
console.log(objMaria.nombreCompleto());
const objPablo: Persona = {
    nombre: 'Pablo',
    apellido: 'Gomez',
    edad: 20
};
let personaArray: Persona[] = [objJuan, objPedro, objPablo];

const personasMayores = personaArray.filter((persona) => {
    return persona.edad > 25;
});
console.log("Mayores de 25", personasMayores);

console.log("Lista de personas",personaArray);

const personasSimples = personaArray.map((persona) => {
    return {
        nombre: persona.nombre,
        apellido: persona.apellido
    };
});
console.log("Personas simples", personasSimples);