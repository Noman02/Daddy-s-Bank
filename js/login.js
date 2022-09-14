document.getElementById("submit-btn").addEventListener("click", function () {
    const userEmail = document.getElementById("user-eamil");
    const email = userEmail.value;

    const userPassword = document.getElementById("user-password");
    const passWord = userPassword.value;


    // WE SHOULD NOT USE THIS !!!!
    if (email === "noman@mahib.gmail.com" && passWord === "kochukhet") {
        window.location.href = "bank.html";
    }
    else {
        alert("Sorry we couldn't find it")
    }
})