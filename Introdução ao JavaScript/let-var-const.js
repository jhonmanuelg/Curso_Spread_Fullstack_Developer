// Variáveis e Tipos let, var e const

// var
function returnCar() {

    var car = 'Land Rover';

    if (car === 'Land Rover') {

        var car = 'Ferrari';

        console.log('Dentro do if: ' + car);

    }

    console.log('Fora do if: ' + car);

}

returnCar();

// let
function returnCar() {

    let car = 'Land Rover';

    if (car === 'Land Rover') {

        let car = 'Ferrari';

        console.log('Dentro do if: ' + car);

    }

    console.log('Fora do if: ' + car);

}

// const

const IP = '127.0.0.1';

// IP = '192.168.0.1'; NÃO SE PODE REDECLARAR

console.log(IP);