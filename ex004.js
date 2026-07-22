let mult = 0
let cont = 0
for(let con = 1;con <= 20;con +=1){
    if (con %2 == 0){
        while(cont <= 4){
            mult = con * cont
            cont += 1
            console.log(`${con} x ${cont} = ${mult}`)
        }
    }
}