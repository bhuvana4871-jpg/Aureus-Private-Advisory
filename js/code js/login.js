function loginUser() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    if (email && password) {

        localStorage.setItem(
            "aureusLoggedIn",
            "true"
        );

        window.location.href =
            "dashboard.html";

    } else {

        alert("Please enter your email and password.");

    }

}
