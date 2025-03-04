// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío y no sea un número
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (!isNaN(nombre)) {
        alert("Por favor, ingresa un nombre válido (no números).");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista visual en la página
    actualizarListaAmigos();

    // Limpiar el resultado del sorteo anterior
    document.getElementById('resultado').innerHTML = "";
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Limpiar la lista de amigos y reiniciar el juego
    amigos = [];
    actualizarListaAmigos();
}