function candidatosCompatibles(o, c) {
    let min = Math.floor(o.length * 0.7);
    return c.filter(cand => 
        cand.skills.filter(s => 
            o.some(so => s.toLowerCase() === so.toLowerCase())
        ).length >= min
    ).map(cand => cand.id).sort();
}

console.log(candidatosCompatibles(['JavaScript', 'React', 'Node', 'CSS', 'Git'], [
    { id: 'juan', skills: ['JavaScript', 'React', 'Node', 'Git'] },
    { id: 'ana', skills: ['JavaScript', 'CSS', 'React', 'Node', 'Git'] },
    { id: 'leo', skills: ['HTML', 'CSS'] },
    { id: 'lu', skills: ['JavaScript', 'Node'] }
]));

let o = prompt("Que sabe hacer el trabajo:");
let c = prompt("Personas (nombre,lo que sabe;nombre2,lo que sabe):");

if (o && c) {
    let arrO = o.split(',').map(s => s.trim());
    let arrC = c.split(';').map(cand => {
        let p = cand.split(',');
        return { id: p[0].trim(), skills: p.slice(1).map(s => s.trim()) };
    });
    let r = candidatosCompatibles(arrO, arrC);
    console.log(`Trabajo necesita: [${arrO.join(', ')}]`);
    console.log(`Personas que sirven: [${r.join(', ')}]`);
    alert(`Personas que sirven: ${r.join(', ')}`);
}
