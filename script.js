function getFormvalue() {
   var form = document.getElementById("myForm");

  // Get the values of the first name and last name fields by their IDs
  var firstName = form.elements["firstName"].value;
  var lastName = form.elements["lastName"].value;

  // Display the values using an alert
  alert("First Name: " + firstName + "\nLast Name: " + lastName);

}
