function detectarPlagio(b, f) {
    const limpiar = s => s.toLowerCase().trim().replace(/[.!?]$/, '');
    return f.filter(frase => 
        b.some(baseFrase => limpiar(frase) === limpiar(baseFrase))
    );
}

let base = ['El conocimiento es poder.', 'Aprender nunca es una pérdida de tiempo!', 'Programar es divertido'];
let frasesEstudiante = ['el conocimiento es poder', ' Aprender nunca es una pérdida de tiempo', 'programar es divertido.', 'La práctica hace al maestro'];

console.log(detectarPlagio(base, frasesEstudiante));

let b = prompt("Frase 1 (separadas por ;):");
let f = prompt("Frase 2 (separadas por ;):");

if (b && f) {
    let arrB = b.split(';').map(f => f.trim());
    let arrF = f.split(';').map(f => f.trim());
    let r = detectarPlagio(arrB, arrF);
    console.log(`Frases plagiadas: [${r.join(', ')}]`);
    alert(`Frases plagiadas: ${r.join(', ')}`);
}
