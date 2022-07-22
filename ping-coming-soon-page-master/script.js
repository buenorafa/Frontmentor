const emailInput = document.getElementById("email-input");
const errorMsg = document.getElementById("error-msg");
const submitBtn = document.getElementById("submit-btn");

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validation(){
    let email = emailInput.value;
    if(email === ""){
        errorMsg.innerText = "Whoops! It looks like you forgot to add your email";
        errorMsg.style.display = "block";
        emailInput.style.borderColor = "var(--light-red)";
    }
    else if(!email.match(validRegex)){
        errorMsg.innerText = "Please provide a valid email address";
        errorMsg.style.display = "block";
        emailInput.style.borderColor = "var(--light-red)";
    }
}

submitBtn.addEventListener("click", validation);
