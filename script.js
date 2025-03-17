// let a = 'Jai Shree Krishna'
// console.log(a);

// const arr = [100, 76, 654,99, 213, 50]

// const arrays = [[1, 2], [3, 4], [5]];


// const result = arrays.reduce((acc, curr) => acc.concat(curr), [])
// console.log(result);

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

const userName = accounts.map(user => `${user.name}, pin is ${user.pin}, double rate is ${(user.rate)*2}, and its first move is ${user.moves[0]}`)
// console.log(userName);

const s = 'Jai Shree Krishna'
const userNameString = (s) =>{
    const user =  s.toLocaleLowerCase().split(' ').map(n => n[0]).join('')
    // console.log(user);
    
}
userNameString('Radhe Krishna')

const filterMoves = accounts.filter(a => a.moves)
// console.log(filterMoves);



