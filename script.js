function submitForm(event) {
    event.preventDefault();
  
    // Fetching input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Simple validation (you can add more complex validation as needed)
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Displaying input values
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
  
    // Redirecting to success page
    window.location.href = "/success.html"; // Change "success.html" to the URL of your success page
  }
  