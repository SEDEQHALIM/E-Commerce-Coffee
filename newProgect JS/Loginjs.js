function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

   
    if (username.trim() === "") {
       alert("Please enter a username.\n");
        return  false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
       alert("Please enter a valid email address.\n");
        return  false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.\n");
        return  false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.\n");
        return  false;
    }


    window.localStorage.setItem("username",username);
    return true; 
 
}


