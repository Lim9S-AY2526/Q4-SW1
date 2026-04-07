// declare variables
var u = "UserAdmin";
var p = "admin123";

function loginNow() {

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    // test using if-then-else
    if (usernameInput === "" || passwordInput === "") {
        alert("Please fill in all fields.");
    }
    else if (usernameInput === u && passwordInput === p) {
        alert("Welcome " + usernameInput + "!");
    }
    else {
        alert("Incorrect username and/or password.");
    }
}
