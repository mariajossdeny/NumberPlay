console.log("hola carambola")

const numberPlay = document.querySelectorAll('.number');
const numberSecret = Math.floor(Math.random() * 30 + 1); //Funcion del numero secreto.
const result = document.createElement("p");


numberPlay.forEach((e, i) => {  //Funcion para recorrer cada opcion del juego. 
    //console.log(e)
    e.addEventListener('click', () =>{
        console.log('lo hizo')
        const clickNumber = `${i+1}`;
        //console.log(`${i+1}`)

        if(numberSecret.toString()===clickNumber.toString()){
            result.textContent = "🎉🎉🎉Ohh Congratulations Won 🥳🥳🥳"
            document.getElementById("results").appendChild(result)
            //console.log('ohh ganaste Felicidades!!!')
        } else {
            result.textContent = "😱😱😱Sorry this is not the number ☹️☹️☹️"
            document.getElementById("results").appendChild(result)
           // console.log('Lo Siento ese no es el numero :( ')
        } 
    })  
});



console.log(numberSecret)


