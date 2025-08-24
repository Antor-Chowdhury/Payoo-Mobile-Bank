const validPin = 1234;

// --- Add money Feature ----
document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // getting the value of the input field

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);

    // getting the total amount

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

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

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;

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

    const agentNumber = document.getElementById("withdraw-agent-number").value;
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const pin = parseInt(document.getElementById("withdraw-pin").value);

    // getting the total amount

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

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

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;

    //   clearing the input field
    document.getElementById("withdraw-agent-number").value = "";
    document.getElementById("withdraw-amount").value = "";
    document.getElementById("withdraw-pin").value = "";
  });

// ---- toggling feature -----
// for add-money
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none"; // hiding the cash-out form

  document.getElementById("add-money-parent").style.display = "block"; // showing the add-money form
});

// for withdraw money
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"; // hiding the add-money form

    document.getElementById("cash-out-parent").style.display = "block"; // showing the withdraw form
  });
