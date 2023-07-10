const even = document.getElementById("Even")
const odd = document.getElementById("Odd")
let numberUser = 0
let numberCOM = 0
//let somma = 0

// Creo due pulsanti per far decidere all'utente se sceglie Pari o Dispari
//Pulsante per il pari
even.addEventListener("click", function () {
    //chiedo all'utente di inserire un numero e lo stampo sull'HTML
    numberUser = parseInt(prompt("scegli un numero da 1 a 5"))
    document.getElementById("User").innerHTML = `numero inserito dal player ${numberUser}`

    //Richiamo la funzione per randomNumber per generare un numero da 1 a 5 da far giocare al PC e lo stampo sull'HTML
    let randomCOM = randomNumber()
    numberCOM = randomCOM
    document.getElementById("COM").innerHTML = `numero inserito dal PC ${numberCOM}`

    //inserisco un ciclo affinchè l'utente inserisca un carattere valido
    while (numberUser < 0 || numberUser > 5 || isNaN(numberUser) || numberUser == "") {

        alert("Carattere non valido")
        numberUser = parseInt(prompt("scegli un numero da 1 a 5"))
    }

    // richiamo la funzione sumNumber e sommo i due numeri
    let somma = sumNumbers(numberUser, numberCOM)

    if (somma % 2 === 0) {
        document.getElementById("result").innerHTML = `${somma} Vince il player`
    }
    else {
        document.getElementById("result").innerHTML = `${somma} Vince il PC`

    }
    console.log(numberUser)
    console.log(numberCOM)
    console.log(somma)

})
//Pulsante per il dispari
odd.addEventListener("click", function () {
    //chiedo all'utente di inserire un numero e lo stampo sull'HTML
    numberUser = parseInt(prompt("scegli un numero da 1 a 5"))
    document.getElementById("User").innerHTML = `numero inserito dal player ${numberUser}`

    //Richiamo la funzione per randomNumber per generare un numero da 1 a 5 da far giocare al PC e lo stampo sull'HTML
    let randomCOM = randomNumber()
    numberCOM = randomCOM
    document.getElementById("COM").innerHTML = `numero inserito dal PC ${numberCOM}`

    //inserisco un ciclo affinchè l'utente inserisca un carattere valido
    while (numberUser < 0 || numberUser > 5 || isNaN(numberUser) || numberUser == "") {

        alert("Carattere non valido")
        numberUser = parseInt(prompt("scegli un numero da 1 a 5"))
    }

    // richiamo la funzione sumNumber e sommo i due numeri
    let somma = sumNumbers(numberUser, numberCOM)

    if (somma % 2 === 0) {
        document.getElementById("result").innerHTML = `${somma} Vince il pc`
    }
    else {
        document.getElementById("result").innerHTML = `${somma} Vince il player`

    }

    console.log(numberUser)
    console.log(numberCOM)
    console.log(somma)
})


/** Funzione creata per generare numeri random
 * 
 * @param {number} max 
 * @returns 
 */
function randomNumber(max) {
    max = 5
    const numRandom = Math.floor(Math.random() * max + 1)

    return numRandom

}


/** Funzione creata per sommare i due numeri inseriti
 *
 * @param {number} numberUser
 * @param {number} numberCOM
 * @returns
*/

function sumNumbers(numberUser, numberCOM) {
    const result = numberUser + numberCOM;

    return result
}



/*if (user === document.getElementById("Even").value) {
    
    numberUser = parseInt(prompt("scegli un numero da 1 a 5"))
    numberCOM = Math.floor(Math.random() * 5 + 1)
    
    console.log(numberUser)
    console.log(numberCOM)
    
    while (numberUser < 0 || numberUser > 5 || isNaN(numberUser) || numberUser == "") {
        
        alert("Carattere non valido")
        numberUser = parseInt(prompt("scegli un numero da 1 a 5"))
    }
    
    
    
}*/
