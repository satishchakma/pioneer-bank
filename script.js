const loginArea = document.getElementById("login-area");
const submit = document.getElementById("submit");
const colour1 = document.getElementById("colour-1");
const colour2 = document.getElementById("colour-2");
const colour3 = document.getElementById("colour-3");

submit.addEventListener("click", function(){
    loginArea.style.display = "none";
    colour1.style.zIndex = "-1";
    colour2.style.zIndex = "-1";
    colour3.style.zIndex = "-1";
})

// deposit




const depositBtn = document.getElementById("deposit-btn");

// function log() {
    
//         const depositAmount = document.getElementById("deposit-amount").value; 
//         const depositNumber = parseFloat(depositAmount);
//         const cuurentDeposit = document.getElementById("current-deposit").innerText;
//         const currentNumber = parseFloat(cuurentDeposit);
//         const total = depositNumber + currentNumber; 
//     document.getElementById("current-deposit").innerText = total;
//     document.getElementById("deposit-amount").value = "";
//     //  console.log(total);
//     }


depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-amount").value; 
    const depositNumber = parseFloat(depositAmount);
    const cuurentDeposit = document.getElementById("current-deposit").innerText;
    const currentNumber = parseFloat(cuurentDeposit);
    
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    
    const total = depositNumber + currentNumber; 
    document.getElementById("current-deposit").innerText = total;
    document.getElementById("deposit-amount").value = "";
    // console.log(depositNumber);

    const totalBalance = currentBalanceNumber + depositNumber;
    document.getElementById("current-balance").innerText = totalBalance;
    // document.getElementById("deposit-amount").value = "";

   
})


// withdraw
const withdrawBtn = document.getElementById("withdraw-btn");


withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    const cuurentWithdraw = document.getElementById("current-withdraw").innerText;
    const currentWithdrawNumber = parseFloat(cuurentWithdraw);
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;

    document.getElementById("current-withdraw").innerText = totalWithdraw;
    document.getElementById("withdraw-amount").value = "";
    console.log(currentBalanceNumber);


})

// balance



