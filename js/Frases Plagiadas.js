function detectarPlagio(base, frasesEstudiante) {
    function normalizar(frase) {
        return frase
            .trim()
            .toLowerCase()
            .replace(/[.!?]$/, '');
    }

    const baseNormalizada = base.map(normalizar);

    const plagiadas = frasesEstudiante.filter(frase => {
        return baseNormalizada.includes(normalizar(frase));
    });

    return plagiadas;
}

// Pedir al usuario la base de frases sospechosas
const baseInput = prompt("Ingresa las frases base:\nEj: El conocimiento es poder.|Aprender nunca es una pérdida de tiempo!|Programar es divertido");
const frasesEstudianteInput = prompt("Ingresa las frases del estudiante :\nEj: el conocimiento es poder| Aprender nunca es una pérdida de tiempo |programar es divertido.");



// Ejecutar función
const resultado = detectarPlagio(base, frasesEstudiante);

// Mostrar resultados
if (resultado.length === 0) {
    alert("✅ No se detectaron frases plagiadas.");
} else {
    alert("⚠️ Frases plagiadas:\n\n" + resultado.join("\n"));
    console.log("Frases plagiadas:", resultado);
}
