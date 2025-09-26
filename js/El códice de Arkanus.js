function decodeSpell(s) {
    const v = { '☽': 1, '☾': 5, '♁': 10, '⚕': 50, '⚡': 100 };
    let t = 0;
    for (let i = 0; i < s.length; i++) {
        const cv = v[s[i]];
        if (cv === undefined) return NaN;
        const nv = v[s[i + 1]];
        t += nv && nv > cv ? -cv : cv;
    }
    return t;
}

console.log(decodeSpell('☽☽☽'));
console.log(decodeSpell('☽☾'));
console.log(decodeSpell('☾☽'));

let s = prompt("Iconos del conjuro:");
let r = decodeSpell(s);
let m = isNaN(r) ? "Conjuro inválido" : `Valor: ${r}`;
alert(m);
console.log(m);