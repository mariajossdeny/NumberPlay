console.log("hola carambola")

const numberSecret = Math.floor(Math.random() * 100 + 1); 

console.log(numberSecret)

const numberPlayer = parseInt(prompt('Adivina el numero del 1 al 100'));

console.log(`Este es tu numero ${numberPlayer}`)

if(numberSecret===numberPlayer){
    console.log('ohh ganaste Felicidades!!!')
} else {
    console.log('Lo Siento ese no es el numero :( ')
}