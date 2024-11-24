document.getElementById("submitButton").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    const correctPassword = "19"; // Set your password here

    if (password === correctPassword) {
        window.location.href = "https://app.sane.fyi/public/40ee85a0-aa64-11ef-98ae-eb9acba15ab2?utm_source=share-menu&utm_medium=web"; // Redirect URL
    } else {
        alert("Jawaban salah. Please try again.");
    }
});
