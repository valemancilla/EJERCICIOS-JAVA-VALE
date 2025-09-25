function decodeSpell(spell) {
    const values = {
        '☽': 1,
        '☾': 5,
        '♁': 10,
        '⚕': 50,
        '⚡': 100
    };

    

    let total = 0;

    for (let i = 0; i < spell.length; i++) {
        const currentSymbol = spell[i];
        const currentValue = values[currentSymbol];

        if (currentValue === undefined) {
            return NaN;
        }

        const nextValue = values[spell[i + 1]];

        if (nextValue > currentValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }

    return total;
}

// Pide al usuario los iconos
let spell = prompt("Ingresa los iconos del conjuro:");
let result = decodeSpell(spell);

// Muestra el resultado en consola o en alerta
if (isNaN(result)) {
    alert("Conjuro inválido. Hay símbolos desconocidos.");
} else {
    alert(`El valor del conjuro es: ${result}`);
    console.log(`El valor del conjuro es: ${result}`);
}

// Ejemplos de uso
console.log(decodeSpell('☽☽☽')) // 3
console.log(decodeSpell('☽☾')) // 4 (5 - 1)
console.log(decodeSpell('☾☽')) // 6 (5 + 1)
console.log(decodeSpell('☾☽☽☽')) // 8 (5 + 3)
console.log(decodeSpell('☽☽☽⚡')) // 101 (1 + 1 + (100 - 1))
console.log(decodeSpell('☽⚕')) // 49 (50 - 1)
console.log(decodeSpell('☽☽☾')) // 5 (1 + (5 - 1))
console.log(decodeSpell('☽☽☾⚡')) // 95 (1 + (-1 + (100 - 5)))
console.log(decodeSpell('☽⚕⚡')) // 49 (-1 - 50 + 100)
console.log(decodeSpell('⚡⚡⚡')) // 300
console.log(decodeSpell('⚕⚡')) // 50
console.log(decodeSpell('⚕.♒')) // NaN (símbolos desconocidos)