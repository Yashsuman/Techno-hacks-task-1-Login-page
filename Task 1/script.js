document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Validate the username and password
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // You can redirect the user to another page here
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  