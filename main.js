// ESERCIZIO 1 : Creare un paragrafo interamente in javascript attraverso il dom e collegarlo ad un contenitore genitore. 

let div = document.querySelector(`#padre`);
let paragraf = document.createElement(`p`)
paragraf.innerHTML = "Sono un tag p figlio di div row"
div.appendChild(paragraf)

console.dir(paragraf)



// ESERCIZIO 2 Creare 3 paragrafi in HTML e 3 bottoni. 
// Il primo bottone dovra’ nascondere i 3 paragrafi e farli ricomparire,
// il secondo bottone dovra’ cambiare i colore dei paragrafi, 
// il terzo bottone dovra’ renderli in grassetto e farli tornare come prima.

// let div1 = document.querySelectorAll(`#div-padre`)
// let btn1 = document.querySelector("#uno")
// let checked = false

// btn1.addEventListener(`click`, ()=>{
//     div1.forEach((div) => {
//         if(checked == false){
//             div.classList.add("d-none");
//             checked = true;
//         }else{
//             div.classList.remove("d-none");
//         checked = false;}
        
//     })
// });

// let btn2 = document.querySelector("#due")

// btn2.addEventListener(`click`, ()=>{
//     div1.forEach((div) => {
//         if(checked == false){
//             div.classList.add("text-white", "bg-danger");
//             checked = true;
//         }else{
//             div.classList.remove("text-white", "bg-danger");
//         checked = false;}
        
//     })
// })

// let btn3 = document.querySelector("#tre")

// btn3.addEventListener(`click`, ()=>{
//     div1.forEach((div) => {
//         if(checked == false){
//             div.classList.add("fw-bold");
//             checked = true;
//         }else{
//             div.classList.remove("fw-bold");
//         checked = false;}
        
//     })
// })


