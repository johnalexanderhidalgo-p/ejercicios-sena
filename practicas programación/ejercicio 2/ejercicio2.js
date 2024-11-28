const edades = [];
let menoresEdad = 0;
let mayoresEdad = 0;
let adultosMayores = 0;
let sumaEdades = 0;


for(let i = 0; i < 10; i++){
    let edad;
    do {
        edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1} (entre 1 y 120):`), 10);
        if (isNaN(edad) || edad < 1 || edad > 120) {
            alert("Valor inválido. Ingrese una edad válida entre 1 y 120.");
        }
    } while (isNaN(edad) || edad < 1 || edad > 120);

    edades.push(edad);

}

document.write("las edades de las personas son: " + edades + "<br>");

let edadMinima = Math.min(...edades);
let edadMaxima = Math.max(...edades);

for (const edad of edades) {
    sumaEdades += edad;

    if (edad < 18) {
        menoresEdad++;
    } else if (edad >= 60) {
        adultosMayores++;
    } else {
        mayoresEdad++;
    }
}
const promedioEdades = sumaEdades / edades.length;

alert(
    `Resultados:\n` +
    `Edades ingresadas: ${edades.join(", ")}\n` +
    `Menores de edad: ${menoresEdad}\n` +
    `Mayores de edad: ${mayoresEdad}\n` +
    `Adultos mayores: ${adultosMayores}\n` +
    `Edad más baja: ${edadMinima}\n` +
    `Edad más alta: ${edadMaxima}\n` +
    `Promedio de edades: ${promedioEdades.toFixed(2)}`
)