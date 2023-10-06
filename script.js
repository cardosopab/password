const GREETING = "Welcome, to my Random Password Generator!";
let passwordDiv = document.querySelector('#passwordDiv');
let copyNotification = document.querySelector('#copyNotification');
passwordDiv.innerText = GREETING;

let copyButton = document.querySelector('#copyButton');
let randomButton = document.querySelector('#randomButton');

randomButton.addEventListener("click", handleRandom);
copyButton.addEventListener("click", handleCopy);


function handleRandom() {
    copyButton.style.display = 'inline-block';
    let stringBuffer = "";
    for (let i = 0; i < 18; i++) {
        const randAlpha = Math.floor(Math.random() * (26)) + 97;
        const randNum = Math.floor(Math.random() * 10);
        let char;
        if (i % 6 == 0) {
            char = String.fromCharCode(randAlpha - 32);
        } else if (i % 6 == 5) {
            char = i == 17 ? randNum.toString() : randNum + '-';
        } else {
            char = String.fromCharCode(randAlpha);
        }
        stringBuffer += char;
    }
    passwordDiv.innerText = stringBuffer;
}

function handleCopy() {
    navigator.clipboard.writeText(passwordDiv.innerText)
        .then(() => {
            console.log("Text " + passwordDiv.innerText + " copied to clipboard");
            copyNotification.style.display = 'block';
            setTimeout(() => {
                copyNotification.style.display = 'none';
            }, 2000);
        })
        .catch((error) => {
            console.error("Failed to copy text:", error);
        });
}

