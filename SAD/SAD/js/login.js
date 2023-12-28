 
window.aspectLogin = "";

 /*這裡可以一直加username*/
 let data = {
    "TestOutlet": "12345",
    "TestSupplier": "12345",
    "TestBrand": "12345",
};

function login(event) {
    let usernameInput = document.querySelector("input[name='username']");
    let passwordInput = document.querySelector("input[name='pass']");

    let username = usernameInput.value;
    let password = passwordInput.value;

    if (data[username] != undefined) {
        if (data[username] == password) {
            window.alert("Success");
            window.aspectLogin = document.getElementById("aspectLogin").value;
            window.location.href = aspectLogin;
        } else {
            window.alert("Login failed. Password Failure.");
            // Clear the input values
            passwordInput.value = "";
        }
    } else {
        window.alert("Login failed. Username error or does not exist");
        // Clear the input values
        usernameInput.value = "";
        passwordInput.value = "";
    }
    event.preventDefault();


}

document.querySelector(".login100-form-btn").addEventListener("click", login);
