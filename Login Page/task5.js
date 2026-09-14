
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.querySelector(".loginbtn");
const message = document.getElementById("message");


if (!localStorage.getItem("user")) {
    const user = {
        email: "khushi@gmail.com",
        password: "12345678"
    };

    localStorage.setItem("user", JSON.stringify(user));
}


loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const enteredEmail = email.value.trim();
    const enteredPassword = password.value;


    if (enteredEmail === "" || enteredPassword === "") {
        message.innerText = "Please fill all fields!";
        message.style.color = "yellow";
        return;
    }

    
    const user = JSON.parse(localStorage.getItem("user"));

  
    if (
        enteredEmail === user.email &&
        enteredPassword === user.password
    ) {
        message.innerText = "Login Successful!";
        message.style.color = "lightgreen";

        
        localStorage.setItem("isLoggedIn", "true");

       
        setTimeout(() => {
            window.location.href = "task5.html";
        }, 1000);

    } else {
        message.innerText = "Invalid Email or Password!";
        message.style.color = "white";
    }
});