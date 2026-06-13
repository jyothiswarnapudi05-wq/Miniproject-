function submitForm() {
    // Input బాక్సుల నుండి డేటాను తీసుకోవడం
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var messagePara = document.getElementById("message");

    // ఖాళీగా ఉందో లేదో చెక్ చేయడం
    if (name === "" || email === "") {
        messagePara.style.color = "red";
        messagePara.innerHTML = "Please fill all the fields!";
    } else {
        messagePara.style.color = "green";
        messagePara.innerHTML = "Registration Successful! Welcome, " + name + " 🎉";
        
        // బాక్సులను ఖాళీ చేయడం
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    }
}