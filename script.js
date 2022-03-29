const loginArea = document.getElementById("login-area");
const submit = document.getElementById("submit");
const colour1 = document.getElementById("colour-1");
const colour2 = document.getElementById("colour-2");
const colour3 = document.getElementById("colour-3");

// deposit
const depositBtn = document.getElementById("deposit-btn");

const abc = document.getElementById("deposit-amount").value;
// const depositNumber = parseFloat(abc);


const cuurentDeposit = document.getElementById("current-deposit").innerText;
const currentNumber = parseFloat(cuurentDeposit);


const withdrawBtn = document.getElementById("withdraw-btn");
const withdrawAmount = document.getElementById("withdraw-amount");

submit.addEventListener("click", function(){
    loginArea.style.display = "none";
    colour1.style.zIndex = "-1";
    colour2.style.zIndex = "-1";
    colour3.style.zIndex = "-1";
})

depositBtn.addEventListener("click", function(){
    console.log("thank you");
    // const total = depositNumber + currentNumber; 
    // document.getElementById("current-deposit").innerText = total;
})


