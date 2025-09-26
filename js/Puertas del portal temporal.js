function portalFueraDeFase(p) {
    let c = {};
    for (let l of p) c[l] = (c[l] || 0) + 1;
    for (let i = 0; i < p.length; i++) {
        if (c[p[i]] === 1) return i;
    }
    return -1;
}

// Pruebas
console.log(portalFueraDeFase('xyxyxy')); // -1 (todas se repiten)
console.log(portalFueraDeFase('quasar')); // 0 (q es única)
console.log(portalFueraDeFase('aabbccddeeffg')); // 12 (g es única)

let p = prompt("Escribe las letras de los portales:");
if (p) {
    let r = portalFueraDeFase(p);
    console.log("Portales: " + p);
    console.log("Resultado: " + r);
    alert(r === -1 ? "Todos se repiten" : `Primera letra única: ${p[r]} en posición ${r}`);
}
