let currentBalance = 1000;

function deposit() {
    const depositAmount = parseFloat(document.getElementById("deposit").value);

    if (!isNaN(depositAmount) && depositAmount > 0) {
        currentBalance += depositAmount;
        updateBalance();
        document.getElementById("deposit").value = "";
    } else {
        alert("Please enter a valid deposit amount.");
    }
}

function withdraw() {
    const withdrawalAmount = parseFloat(document.getElementById("withdraw").value);

    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) {
        if (withdrawalAmount <= currentBalance) {
            currentBalance -= withdrawalAmount;
            updateBalance();
            document.getElementById("withdraw").value = ""; 
        } else {
            alert(`Insufficient balance. Your current balance is $${currentBalance.toFixed(2)}.`);
        }
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
}

function updateBalance() {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = `Current Balance: $${currentBalance.toFixed(2)}`;
}
