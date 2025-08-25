// Login button functionality

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNumber = 12345678901;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number"); // this value will be in string

    const mobileNumberValueConverted = parseInt(mobileNumberValue.value); // converted the value to int for comparing with mobileNumber value.

    const pinNumberValue = document.getElementById("pin-number");
    const pinNumberValueConverted = parseInt(pinNumberValue.value);

    if (
      mobileNumberValueConverted === mobileNumber &&
      pinNumberValueConverted === pinNumber
    ) {
      window.location.href = "./home.html";
    } else {
      alert("Invalid credential!");
    }

    // clears the input value each time
    mobileNumberValue.value = "";
    pinNumberValue.value = "";
  });
