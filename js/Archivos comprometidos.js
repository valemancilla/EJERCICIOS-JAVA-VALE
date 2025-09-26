function getCompromisedFiles(t, logs) {
    return [...new Set(logs.filter(l => l[1] > t).map(l => l[0]))].sort((a, b) => a - b);
}

console.log(getCompromisedFiles(1670000000, [
    [42, 1670000500],
    [13, 1670000000],
    [8, 1670000700],
    [8, 1670000001],
    [99, 1669999999]
]));

let t = prompt("Tiempo seguro:");
let l = prompt("Logs (archivo,tiempo;archivo2,tiempo2):");

if (t && l) {
    let arrL = l.split(';').map(l => l.split(',').map(Number));
    let r = getCompromisedFiles(Number(t), arrL);
    console.log(`Archivos comprometidos: [${r.join(', ')}]`);
    alert(`Archivos comprometidos: ${r.join(', ')}`);
}