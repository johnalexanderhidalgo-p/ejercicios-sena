const personas = [];

function agregarPersona() {
    if (personas.length >= 6) {
        alert("Se alcanzó el límite de personas encuestadas (6).");
        return;
    }

    const persona = {};

    persona.nombre = prompt("Ingrese el nombre de la persona:");
    persona.cedula = prompt("Ingrese el número de cédula:");
    persona.fechaNacimiento = prompt("Ingrese la fecha de nacimiento (DD/MM/AAAA):");
    persona.correo = prompt("Ingrese el correo electrónico:");
    persona.ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    persona.ciudadOrigen = prompt("Ingrese la ciudad de origen:");

    persona.cancionesFavoritas = [];
    for (let i = 0; i < 3; i++) {
        const artista = prompt(`Ingrese el nombre del artista de la canción favorita ${i + 1}:`);
        const titulo = prompt(`Ingrese el título de la canción favorita ${i + 1}:`);
        persona.cancionesFavoritas.push({ artista, titulo });
    }

    personas.push(persona);
    alert("Persona agregada exitosamente.");
}

function mostrarPersona() {
    if (personas.length === 0) {
        alert("No hay personas registradas.");
        return;
    }

    const posicion = parseInt(prompt(`Ingrese la posición de la persona (1 a ${personas.length}):`), 10);

    if (isNaN(posicion) || posicion < 1 || posicion > personas.length) {
        alert("Posición inválida.");
        return;
    }

    const persona = personas[posicion - 1];

    let mensaje = `Información de la persona en posición ${posicion}:\n`;
    mensaje += `Nombre: ${persona.nombre}\n`;
    mensaje += `Cédula: ${persona.cedula}\n`;
    mensaje += `Fecha de nacimiento: ${persona.fechaNacimiento}\n`;
    mensaje += `Correo electrónico: ${persona.correo}\n`;
    mensaje += `Ciudad de residencia: ${persona.ciudadResidencia}\n`;
    mensaje += `Ciudad de origen: ${persona.ciudadOrigen}\n`;
    mensaje += `Canciones favoritas:\n`;

    persona.cancionesFavoritas.forEach((cancion, index) => {
        mensaje += `  ${index + 1}. Artista: ${cancion.artista}, Título: ${cancion.titulo}\n`;
    });

    alert(mensaje);
}

function menu() {
    let opcion;

    do {
        opcion = prompt(
            "Menú Principal:\n" +
            "1. Agregar una persona\n" +
            "2. Mostrar información de una persona por posición\n" +
            "3. Salir\n" +
            "Ingrese su opción:"
        );

        switch (opcion) {
            case "1":
                agregarPersona();
                break;
            case "2":
                mostrarPersona();
                break;
            case "3":
                alert("Gracias por usar el programa.");
                break;
            default:
                alert("Opción inválida, intente nuevamente.");
        }
    } while (opcion !== "3");
}

menu();
