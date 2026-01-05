let randomNumber = Math.floor(Math.random() * 5) + 1;
let chances = 4;
function clickAction() {

    // Get input value and convert to number
    let userInput = Number(document.getElementById("textInput").value);
    console.log(userInput);
    console.log(typeof userInput);

    // Generate random number between 1 and 5
    console.log(randomNumber);
    console.log(typeof randomNumber);

    // Get elements once
    let textField = document.getElementById("txtField");
    let imgDiv = document.getElementById("img");
    let textChance = document.getElementById("txtFieldChances");
    let button = document.getElementById("btn");
    let textInput=document.getElementById("textInput")
    let resalt=document.getElementById("resalt")

    
    // Check user guess
    if (chances > 0) {
        if (userInput == randomNumber) {

            // Win message
            textField.innerText = "🎉 You Win!";
            console.log("You Win");

            // Win image
            imgDiv.innerHTML = `
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWxzcW4wN2Rwc2pleHIybzljMXo0NzAxZThzbHQ1aWQ5M2F0MWtybyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/amxLHEPgGDCKs/giphy.gif">
        `;
            textChance.innerText = `You Win it`;
            resalt.innerHTML=`<h6>${ randomNumber}=${userInput}</h6>`
            chances = 0;
            button.style.display = "none"
            textInput.style.display="none"
        } else {

            chances = chances - 1;
            // Lose message
            textField.innerText = "❌ Try Again";
            console.log("You Lose");

            // Lose image
            imgDiv.innerHTML = `
            <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YmVrdXV2anppazBod3U4czRwMjUzbG8wMjFhNXhzaG0xOW9yaGx5aSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/fZYsPE8NzWxdm/giphy.gif">
        `;
            textChance.innerText = `You Have ${chances+1} chancess`;
        }
    }else{
        textChance.innerText = ``;
        button.style.display = "none"
        textInput.style.display = "none"
        textField.innerText = "❌ Go home And Fly a Kite";
        imgDiv.innerHTML = `
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2dkb2tuenpleGpkZGdjcTRxZGp1ZDJid2hhMGxuc3dkZHRveHF6NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/M4C0jeAkK12DK/giphy.gif">
        ` ;
    }
    // Clear input after guess
    document.getElementById("textInput").value = "";
}
