const btnControl = document.getElementById("btn-control")


// bottone di controllo
btnControl.addEventListener("click", function () {


    //creo un array dove inserire le lettere del form
    let letters = []
    
    // creo la costante del form dove inserirò la parola
    const inputText = document.querySelector(".input-text").value
    console.log(inputText)
    
    //inizio un ciclo for quanto la lunghezza della parola inserita nel form
    for (let i = 0; i < inputText.length; i++) {
        
        // pusho ogni singola lettera della parola inserita nell'array creato
        letters.push(inputText[i])
    }
    console.log(letters)
    
    //creo variabile dove unisco le lettere dell'array
    let lettersJoin = letters.join("") 
    // creo una funzione per comprendere se la parola è palindroma    
    function palindWord() {
        
        //creo una variabile dove inverto e unisco gli elementi dell'array
        let invert = letters.reverse().join("");
        console.log(invert)
        
        //se la variabile invert è uguale a la variabile lettersJoin allora la parola è palindroma 
        if (invert === lettersJoin) {
            console.log("palindroma")
            document.getElementById("result").innerHTML = `La parola è palindroma`
        }
        // altrimenti non lo è
        else {
            console.log("non palindroma")
            document.getElementById("result").innerHTML = `La parola non è palindroma`
        }
        return invert
    }
    
    console.log(lettersJoin)
    console.log(palindWord())
    




})