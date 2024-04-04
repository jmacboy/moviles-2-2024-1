console.log("Hola mundo desde TypeScript");
var a = 10;
var b = 30;
var hola = 'Hola mundo';
console.log(hola);
function suma(a, b) {
    return a + b;
}
console.log('Resultado', suma(a, b));
var nombres = ['Juan', 'Pedro', 'Luis'];
console.log("Nombre:", nombres[0]);
var apellidos = ['Perez', 'Gomez', 'Lopez'];
console.log("Apellido:", apellidos[0]);
console.log("Nombres");
nombres.forEach(function (nombre) {
    console.log(nombre);
});
console.log("Apellidos");
for (var apellido in apellidos) {
    console.log(apellido);
}
console.log("Nombres completos");
for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i] + ' ' + apellidos[i]);
}
var Animales;
(function (Animales) {
    Animales[Animales["PERRO"] = 0] = "PERRO";
    Animales[Animales["GATO"] = 1] = "GATO";
    Animales[Animales["PEZ"] = 2] = "PEZ";
    Animales[Animales["CAPIBARA"] = 3] = "CAPIBARA";
})(Animales || (Animales = {}));
console.log(Animales[Animales.CAPIBARA]);
var tipoMascota = Animales.CAPIBARA;
console.log(tipoMascota);
var objJuan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    mascota: Animales.PERRO
};
var objPedro = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    edad: 25
};
console.log(objJuan);
var PersonaClase = /** @class */ (function () {
    function PersonaClase(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    PersonaClase.prototype.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    };
    return PersonaClase;
}());
var objMaria = new PersonaClase('Maria', 'Lopez', 28);
console.log(objMaria.nombreCompleto());
var objPablo = {
    nombre: 'Pablo',
    apellido: 'Gomez',
    edad: 20
};
var personaArray = [objJuan, objPedro, objPablo];
var personasMayores = personaArray.filter(function (persona) {
    return persona.edad > 25;
});
console.log("Mayores de 25", personasMayores);
console.log("Lista de personas", personaArray);
var personasSimples = personaArray.map(function (persona) {
    return {
        nombre: persona.nombre,
        apellido: persona.apellido
    };
});
console.log("Personas simples", personasSimples);
