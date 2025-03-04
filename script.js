function signUp() {
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    if (!fullname || !email || !password || !terms) {
        document.getElementById("result").innerHTML = "Please fill out all required fields";
        return;
    }

    document.getElementById("result").innerHTML = "Welcome " + fullname + " your account creation has been successful!";
}