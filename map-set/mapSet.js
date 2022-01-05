function getAdmins(map) {
    let newArray = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            newArray.push(key)
        }
    }
    return newArray;
}

const usuarios = new Map();
usuarios.set('Rafael', 'User');
usuarios.set('Paulo', 'Admin');
usuarios.set('Maria', 'User');
usuarios.set('Joana', 'Admin');
usuarios.set('Gustavo', 'Admin');
usuarios.set('Debora', 'User');

console.log(getAdmins(`${usuarios}\n`))
console.log(`Utilizando consulta no set [has('Rafael')] = ${usuarios.has('Rafael')} \n`)
//--------------------------

const meuArray = [30,30,40,5,223,2049,3034,5]

function unicos(arr) {
    const setters = new Set(arr);
    return [...setters];
}

console.log(unicos(meuArray))



// set.has()//consultar valor no set
// set.add()//adicionar valor no set
// Map.set()//adicionar valor no map
// Map.get()//consultar valor no map