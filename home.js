const validPin = 1234;

// Function to get input values with number

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

// Function to get input values without number

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;

  return inputFieldValue;
}

// Function to get innerText

function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// Function to set innerText

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// Function to toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// --- Add money Feature ----
document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // getting the value of the input field

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const addAmount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");

    // getting the total amount

    const availableBalance = getInnerText("available-balance");

    // adding the total number

    const totalNewAvailableBalance = addAmount + availableBalance;

    //   validating account-number

    if (accountNumber.length < 11) {
      alert("please provide valid account number.");
      return;
    }

    // validating pin-number

    if (pin !== validPin) {
      alert("please enter the correct pin number");
      return;
    }

    // updating the available balance

    setInnerText(totalNewAvailableBalance);

    // clear the input field after every add money click

    document.getElementById("bank").value = "";
    document.getElementById("account-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin").value = "";
  });

// ---- withdraw feature -----

document
  .getElementById("btn-withdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // getting the input value

    const agentNumber = getInputValue("withdraw-agent-number");
    const withdrawAmount = getInputValueNumber("withdraw-amount");
    const pin = getInputValueNumber("withdraw-pin");

    // getting the total amount

    const availableBalance = getInnerText("available-balance");

    // withdrawing form the total amount

    const totalNewAvailableBalance = availableBalance - withdrawAmount;

    // validating agent-number and Pin

    if (agentNumber.length < 11) {
      alert("please provide valid agent number.");
      return;
    }

    if (pin !== validPin) {
      alert("Invalid pin number!!");
      return;
    }

    // updating the available balance

    setInnerText(totalNewAvailableBalance);

    //   clearing the input field
    document.getElementById("withdraw-agent-number").value = "";
    document.getElementById("withdraw-amount").value = "";
    document.getElementById("withdraw-pin").value = "";
  });

// --------- Transfer Amount Feature ------

document
  .getElementById("btn-transfer")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // getting the value of the input field

    const agentNumber = getInputValue("transfer-user-number");
    const transferAmount = getInputValueNumber("transfer-amount");
    const pin = getInputValueNumber("transfer-pin");

    // getting the total amount

    const availableBalance = getInnerText("available-balance");

    // withdrawing form the total amount

    const totalNewAvailableBalance = availableBalance - transferAmount;

    //   validating account-number

    if (agentNumber.length < 11) {
      alert("please provide valid agent number.");
      return;
    }

    // validating pin-number

    if (pin !== validPin) {
      alert("Invalid pin number!!");
      return;
    }

    // updating the available balance

    setInnerText(totalNewAvailableBalance);

    // clear the input field after every add money click

    document.getElementById("transfer-user-number").value = "";
    document.getElementById("transfer-amount").value = "";
    document.getElementById("transfer-pin").value = "";
  });

// ---- toggling feature -----

// for add-money
document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
});

// for withdraw money
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
  });

// for transfer money

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
  });
