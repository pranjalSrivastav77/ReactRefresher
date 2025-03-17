'use strict'

const acc1 = {
    name: 'a',
    moves: [1100,-200,398,-500,700,-18,36],
    rate: 1.1,
    pin: 1111
}
const acc2 = {
    name: 'b',
    moves: [8100,-2200,398,-500,1700,-180,36],
    rate: 1.2,
    pin: 2222
}
const acc3 = {
    name: 'c',
    moves: [9100,-1200,398,-500,700,-18,36],
    rate: 1.3,
    pin: 3333
}
const acc4 = {
    name: 'd',
    moves: [1100,-200,398,-500,700,-18,36],
    rate: 1.4,
    pin: 4444
}
const acc5 = {
    name: 'a',
    moves: [1800,-1200,1398,-50,700,-18,36],
    rate: 1.5,
    pin: 5555
}
const acc6 = {
    name: 'f',
    moves: [100,-20,398,-500,700,-18,36],
    rate: 1.6,
    pin: 6666
}
const acc7 = {
    name: 'g',
    moves: [1700,-100,38,-200,1700,-18,36],
    rate: 1.7,
    pin: 7777
}

const accounts = [acc1, acc2, acc3, acc4, acc5, acc6, acc7]

// const containerMovement = document.querySelector('.movements')
// console.log(accounts);

const displayMoves = (moves) => {
    moves.forEach((elem, i) => {
        const type = elem > 0 ? 'deposit' : 'withdraw'
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${elem}€</div>
      </div>`
    });
}
displayMoves(acc1.moves)

const checkDogs = (dj, dt) => {
    const djc = dj.slice() //create a shallowe copy
    djc.splice(0,1)  //remove first element
    djc.splice(-2)   //remove first and second last element

    const dogs = djc.concat(dt)
    console.log(dogs);
    dogs.forEach((dog, i) => {
        if (dog >= 3){
            console.log(`Dos number ${i+1} is an adult and is ${dog} years old`);
        }
        else{
            console.log(`Dos number ${i+1} is a puppy and is ${dog} years old`);
        }
    })
    console.log(djc);
    
}
checkDogs([3,5,2,12,7], [4,1,15,8,3])