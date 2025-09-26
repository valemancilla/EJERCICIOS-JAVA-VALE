function esAnagrama(a, b) {
    return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('');
}

// Pruebas de la función
console.log(esAnagrama('cinema', 'iceman')); // true
console.log(esAnagrama('hello', 'world')); // false
console.log(esAnagrama('Listen', 'Silent')); // true
console.log(esAnagrama('evil', 'vile')); // true


let a = prompt("Primera palabra:");
let b = prompt("Segunda palabra:");
if (a && b) {
    let r = esAnagrama(a, b);
    console.log(`"${a}" y "${b}" son anagramas: ${r ? 'SÍ' : 'NO'}`);
    alert(r ? `SÍ, "${a}" y "${b}" son anagramas` : `NO, "${a}" y "${b}" no son anagramas`);
}
