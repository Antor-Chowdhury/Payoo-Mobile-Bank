const validPin = 1234;
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
