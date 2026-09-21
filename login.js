mkdir -p js
cat > js/login.js <<'EOF'
function loginUser() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const demoEmail = "admin@aureus.com";
    const demoPassword = "123456";

    if (email === demoEmail && password === demoPassword) {

        localStorage.setItem("aureusLoggedIn", "true");
        localStorage.setItem("aureusUser", email);

        alert("Login successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid demo credentials.");

    }
}
EOF
