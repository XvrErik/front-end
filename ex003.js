let soma = 0
for (let cont = 1;cont <= 100;cont += 1){
    if (cont %5 == 0 || cont %3 == 0){
        soma += cont
        console.log(soma)
    }
}