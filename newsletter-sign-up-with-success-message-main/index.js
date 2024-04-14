function myFunction(){
    //This enables and disables the button if there is or isnt an input
    var userEmail = document.getElementById('email').value;
    if ( userEmail.length === 0 ) {
        document.getElementById("sub-btn").disabled = true;
        alert("Refresh and enter your email");
    } else if (userEmail.length > 0) {
        document.getElementById("sub-btn").disabled = false;
    }
    //This toggles bettwen the success message and the main page
    document.getElementById("success-msg").classList.toggle("show");
    document.getElementById("main").classList.toggle("hide");
    //This puts the user input(their email) into a span
    document.getElementById("user-email").innerHTML = userEmail;
}
