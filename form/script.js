angular.module('registrationApp', [])
  .controller("RegistrationController", function () {
    this.user = {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: "",
    };

    this.submitForm = function () {
      let password = this.user.password;
      let confirmPassword = this.user.confirmPassword;

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
      }
      if (password.length < 6 || password.length > 30) {
        alert("Password must be at least 6 characters");
        return false;
      }
      if (this.user.name.length < 2) {
        alert("Name must be at least 2 characters");
        return false;
      }
      if (this.user.email.length < 2) {
        alert("Email must be at least 2 characters");
        return false;
      }
      if (this.user.phone.length < 2 && this.user.phone.length > 30) {
        alert("Phone must be at least 2 characters");
        return false;
      }
      if (this.user.address.length < 2 && this.user.address.length > 30) {
        alert("Address must be at least 2 characters");
        return false;
      }
      
      // add more validation logic here
      
   
      window.location.href = "login.html";
      alert("Form submitted");
      return true;
    };
  });
