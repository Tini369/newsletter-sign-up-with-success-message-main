function myFunction() {
  var userEmail = document.getElementById("email").value;
  if (userEmail.length === 0) {
    alert("Email field is mandatory!");
    return;
  }

  //This toggles bettwen the success message and the main page
  document.getElementById("main").classList.toggle("hide");
  document.getElementById("success-msg").classList.toggle("show");
  //This puts the user input into a span
  document.getElementById("user-email").innerHTML = userEmail;
}

function subBtn() {
  var userEmail = document.getElementById("email").value;
  if (userEmail.length === 0) {
    document.getElementById("sub-btn").disabled = true;
  } else {
    document.getElementById("sub-btn").disabled = false;
  }
}
