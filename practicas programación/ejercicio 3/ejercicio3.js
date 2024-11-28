function leerVector(nombreVector) {
    const vector = [];
    let numero;

    for (let i = 0; i < 5; i++) {
        do {
            numero = parseInt(prompt(`Ingrese el elemento ${i + 1} del vector ${nombreVector} (debe ser mayor que el anterior):`), 10);
            if (isNaN(numero)) {
                alert("Debe ingresar un número válido.");
            } else if (i > 0 && numero <= vector[i - 1]) {
                alert("El número debe ser mayor que el anterior para mantener el orden ascendente.");
            }
        } while (isNaN(numero) || (i > 0 && numero <= vector[i - 1]));

        vector.push(numero);
    }

    return vector;
}

function mezclarVectores(vector1, vector2) {
    return [...vector1, ...vector2].sort((a, b) => a - b);
}

function programaPrincipal() {
    alert("Ingrese los elementos del primer vector:");
    const vector1 = leerVector("1");
    alert("Ingrese los elementos del segundo vector:");
    const vector2 = leerVector("2");

    const vectorMezclado = mezclarVectores(vector1, vector2);


    alert(
        `Resultados:\n` +
        `Vector 1: ${vector1.join(", ")}\n` +
        `Vector 2: ${vector2.join(", ")}\n` +
        `Vector mezclado y ordenado: ${vectorMezclado.join(", ")}`
    );
}

programaPrincipal();
