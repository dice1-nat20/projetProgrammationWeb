function enlist() {
    form = document.getElementById("enlistForm");
    let nom = document.getElementById("name").value;
    let prenom = document.getElementById("firstname").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    if (nom && prenom && date && email) {
        alert("Enlistment successful! For Super Earth!");
        window.location.href = "Acceuil.html";
        form.reset();
        return true
    }
    else {
        alert("You must specify all fields")
        return false
    }
}