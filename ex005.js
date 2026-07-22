let num = [9, 6, 4, 3, 5]
num[3] = 8
num.push(7)
num.sort()
console.log(`o vetor tem ${num.length}`)
console.log(`a posicao 3 do vetor tem o valor: ${num[3]}`)

console.log(num)
console.log(`a array tem os valores: ${num}`)

console.log("valores formatado")
//forma tradicional
for (let pos = 0;pos < num.length;pos +=1){
    console.log(num[pos])
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
//forma mais simples
for (let posicao in num){
    console.log(num[posicao])
}
console.log('--------')
//procurando vetores
const pos1 = num.indexOf(5)
console.log(pos1)