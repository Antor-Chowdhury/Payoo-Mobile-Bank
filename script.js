// Login button functionality

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("login button clicked");
    console.log(event);
  });
