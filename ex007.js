/*function parimpar(n) {
    if (n %2 ==0){
        return 'par'
    }else{
        return 'impar'
    }
}
function soma(n1=0, n2=0) {
    return n1 + n2
}
//fazendo a funcao dentro da variavel
let mult = function (n1, n2) {
    return n1 * n2
}
function fatorial(n){
    let fat = 1
    for (let con = n;con>1;con -=1){
        fat *= con
    }
    return fat
}
let multiplicar = mult(4, 7)
let somar = soma(9, 6)
let res = parimpar(5)
let fatorialres = fatorial(5)

console.log(res)
console.log(somar)
console.log(multiplicar)
console.log(fatorialres)*/

let arr = [5, 7, 3, 8, 2]
const num = 9
if (arr.indexOf(num) != -1){
    console.log("o valor ja existe");
    
}else{
    arr.push(num)
    console.log(arr)
}
