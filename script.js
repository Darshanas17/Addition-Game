let n1 = document.getElementById("firstNumber");
let n2 = document.getElementById("secondNumber");
let inputValue = document.getElementById("userInput");
let gameRes = document.getElementById("gameResult");

function restart() {
    let randN1 = Math.ceil(Math.random() * 100);
    let randN2 = Math.ceil(Math.random() * 100);
    n1.textContent = randN1;
    n2.textContent = randN2;
    gameRes.textContent = "";
    inputValue.value = "";
}
restart();

function check() {
    let randomN1 = parseInt(n1.textContent);
    let randomN2 = parseInt(n2.textContent);
    let randomResult = randomN1 + randomN2;
    if (parseInt(inputValue.value) === randomResult) {
        gameRes.classList.remove("game-blue");
        gameRes.classList.add("game-green");
        gameRes.textContent = "Congratulations! You got it right.";
    } else {
        gameRes.classList.remove("game-green");
        gameRes.classList.add("game-blue");
        gameRes.textContent = "Please Try Again!";
    }
}
