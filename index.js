// create variable of type array to store characters
let characters = [
    "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z",
    "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F",
    "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"
]
// declare variable for password length
var passwordLength = document.querySelector(".output").value
// declare variables of textContent for password button
let passwordEl1 = document.querySelector(".pwBtn1")
let passwordEl2 = document.querySelector(".pwBtn2")
let passwordEl3 = document.querySelector(".pwBtn3")
let passwordEl4 = document.querySelector(".pwBtn4")

// Generate a random password
function generatePassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random()*characters.length)  // get random number
        password += characters[randomNumber]                           // pass that random number as index of array and return to new variable + append
    }
    return password
}

// changes password text color from placeholder to a more legible color
function changeTextColor() {
    window.getComputedStyle(document.documentElement).getPropertyValue("--text-color")
    document.querySelector(".generate-wrap").addEventListener("click", () => {
        document.documentElement.style.setProperty("--text-color", "#10B981")
    })
}

// populate password fields with password and change text color
function populate() {
    changeTextColor()
    passwordEl1.textContent = generatePassword()
    passwordEl2.textContent = generatePassword()
    passwordEl3.textContent = generatePassword()
    passwordEl4.textContent = generatePassword()
}

