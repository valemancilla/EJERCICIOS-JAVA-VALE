function frutaEmpacadaCorrectamente(e, s) {
    if (e.length !== s.length) return false;
    let p = [], i = 0, j = 0;
    while (j < s.length) {
        if (!p.length || p[p.length - 1] !== s[j]) {
            if (i >= e.length) return false;
            p.push(e[i++]);
        } else {
            p.pop();
            j++;
        }
    }
    return true;
}

console.log(frutaEmpacadaCorrectamente(['manzana', 'banana', 'kiwi'], ['kiwi', 'banana', 'manzana']));
console.log(frutaEmpacadaCorrectamente(['manzana', 'banana', 'kiwi'], ['banana', 'kiwi', 'manzana']));

let e = prompt("Frutas que entran:");
let s = prompt("Frutas que salen:");
if (e && s) {
    let arrE = e.split(',').map(f => f.trim());
    let arrS = s.split(',').map(f => f.trim());
    let r = frutaEmpacadaCorrectamente(arrE, arrS);
    console.log(`Entran: [${arrE.join(', ')}]`);
    console.log(`Salen: [${arrS.join(', ')}]`);
    console.log(`Se puede: ${r ? 'SÍ' : 'NO'}`);
    alert(r ? "SÍ se puede" : "NO se puede");
}
