// Regisztráció JavaScript kódja
// Példa: Űrlap validáció és visszajelzés
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Űrlap elemek lekérése
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const birthDate = document.getElementById("birthDate").value;

        // Űrlap validáció
        if (password !== confirmPassword) {
            alert("A jelszavak nem egyeznek meg!");
            return;
        }

        // Regisztrációs visszajelzés
        const confirmationMessage = `Kedves ${fullName}!\n\nRegisztrációja sikeresen megtörtént az alábbi adatokkal:\n\nFelhasználónév: ${username}\nE-mail: ${email}\nSzületési dátum: ${birthDate}\n\nÜdv,\nAláírás`;

        alert(confirmationMessage);
    });
});
