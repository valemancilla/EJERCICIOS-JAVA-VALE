function getCompromisedFiles(lastSafeDownload, droneLogs) {
    // Usamos un Set para evitar IDs repetidos automáticamente
    const compromised = new Set();

    // Recorrer todos los logs
    for (let [fileId, timestamp] of droneLogs) {
        if (timestamp > lastSafeDownload) {
            compromised.add(fileId); // Solo si fue modificado después
        }
    }

    // Convertimos el Set a Array, lo ordenamos numéricamente y lo devolvemos
    return Array.from(compromised).sort((a, b) => a - b);
}

// --- Pedimos datos al usuario (opcional) ---
const lastSafeDownload = Number(prompt("Ingresa el timestamp de la última descarga segura:"));

const droneLogsInput = prompt("Ingresa los logs de drones en el formato: [id,timestamp],[id,timestamp],...");
// Convertimos el input en array de arrays numéricos
const droneLogs = droneLogsInput
    .split("],")
    .map(log => log.replace(/\[|\]/g, '').split(',').map(Number));

const result = getCompromisedFiles(lastSafeDownload, droneLogs);

// Mostramos el resultado
if (result.length === 0) {
    alert("No hay archivos comprometidos.");
} else {
    alert("Archivos comprometidos (ordenados): " + result.join(", "));
}
