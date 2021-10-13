const button = document.getElementById('generate_button');
const password = document.getElementById('password');
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

document.getElementById('nbr').value = 5;

function generate_password(length, characters) {

    let password = "";

    for (let i = 0; i < length; i++) {

        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

function displayAlert(target, message) {
    
    target = document.getElementById(target);

    target.innerText = message;

    target.classList.add('on');
    
}

button.addEventListener('click',  () => {

    let password_length = document.getElementById('nbr').value;
    
    if (password_length == 0) {

        displayAlert('alert', "Vous n'avez pas défini de longueur");

    } else if (password_length < 5) {

        displayAlert('alert', "Mot de passe trop court");

    } else {

        let characters = alpha;
        incNumbers.checked ? (characters += numbers) : "";
        incSymbols.checked ? (characters += symbols) : "";
        password.value = generate_password(password_length, characters);
    }
});
password.addEventListener('click', () => {
    password.select();
    document.execCommand("copy");
    alert("Mot de passe copié");
})
