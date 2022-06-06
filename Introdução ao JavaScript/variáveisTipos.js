var firstNome = 'joão'; //scope global muito perigroço ter este tipo de variable pela seguraça
let lastNome = 'souza';

if(firstNome === 'joão'){
    // let lastNome = 'silvaalde' já fue declarado não pode declarar de novo
    var firstNome = 'pedro';
    let lastNome =  'rodriquez'; // scope de if-block

    lastNome = 'silva';
    console.log(lastNome)
}


console.log(firstNome, lastNome)

