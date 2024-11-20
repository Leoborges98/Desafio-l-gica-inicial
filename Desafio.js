let nomeHeroi = "Leonardo"
let quantidadeXP = 1500

if (quantidadeXP < 1000) {

    console.log(nomeHeroi + "está no nivel de: ferro  "  )

} else if (quantidadeXP > 1000 || quantidadeXP < 2000) {
   
    console.log(nomeHeroi + "está no nivel de: Bronze  " )

} else if (quantidadeXP > 2001 || quantidadeXP < 5000) {

    console.log(nomeHeroi + "está no nivel de: Prata " )

}else if (quantidadeXP > 5001 || quantidadeXP < 7000) {

    console.log(nomeHeroi + "está no nivel de: Ouro ")

}else if (quantidadeXP > 7001 || quantidadeXP < 8000) {

    console.log(nomeHeroi + "está no nivel de:  Platina  ")

} else if (quantidadeXP > 8001 || quantidadeXP < 9000) {

    console.log(nomeHeroi + "está no nivel de: Ascendente ")

} else if (quantidadeXP > 9001 || quantidadeXP < 10000) {

    console.log(nomeHeroi + "está no nivel de: Imortal  " )

}else if (quantidadeXP >= 10001) {

    console.log(nomeHeroi + "está no nivel de: Radiante  " )

} else 

    console.log("XP não encontrado")





