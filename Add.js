// const ID = document.getElementById("ID");
// const fName = document.getElementById("fname");
// const lName = document.getElementById("lname");
// const Phone = document.getElementById("phone");
// const Email = document.getElementById("email");
// const Level = document.getElementById("Level");
// const Gpa = document.getElementById("GPA");
// const Gender = document.getElementById("Gender");
// const Date = document.getElementById("date");
// const Department = document.getElementById("Department");
// const Status = document.getElementById("Status");

// const btnAdd = document.getElementById("btnAdd");

// window.onclick = function() {
// localStorage.setItem("ID1", ID.value);
// localStorage.setItem("fname1", fName.value);
// localStorage.setItem("lname1", lName.value);
// localStorage.setItem("phone1", Phone.value);
// localStorage.setItem("email1", Email.value);
// localStorage.setItem("level1", Level.value);
// localStorage.setItem("Gpa1", Gpa.value);
// localStorage.setItem("Gender1", Gender.value);
// localStorage.setItem("Date1", Date.value);
// localStorage.setItem("Department1", Department.value);
// localStorage.setItem("Status1", Status.value);
//     console.log(localStorage);
// }


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the Add button element
    const addButton = document.querySelector('#btnAdd');

    // Add click event listener to the Add button
    addButton.addEventListener('click', function () {

        // Get the input field values
        const id = document.querySelector('#ID').value;
        const firstName = document.querySelector('#fname').value;
        const lastName = document.querySelector('#lname').value;
        const phone = document.querySelector('#phone').value;
        const email = document.querySelector('#email').value;
        const level = document.querySelector('input[name="Level"]:checked').value;
        const gpa = document.querySelector('#GPA').value;
        const dob = document.querySelector('#date').value;
        const gender = document.querySelector('input[name="Gender"]:checked').value;
        const department = document.querySelector('input[name="Departement"]:checked').value;
        const status = document.querySelector('input[name="Status"]:checked').value;

        // Validate the input fields
        if (id === '' || firstName === '' || lastName === '' || phone === '' || email === '' || level === '' || gpa === '' || dob === '' || gender === '' || department === '' || status === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Send the data to the server-side script for processing
        localStorage.setItem("ID1", id);
        localStorage.setItem("fname1", firstName);
        localStorage.setItem("lname1", lastName);
        localStorage.setItem("phone1", phone);
        localStorage.setItem("email1", email);
        localStorage.setItem("level1", level);
        localStorage.setItem("Gpa1", gpa);
        localStorage.setItem("Gender1", gender);
        localStorage.setItem("Date1", dob);
        localStorage.setItem("Department1", department);
        localStorage.setItem("Status1", status);
        // will romove this
        console.log(`ID: ${id}, First Name: ${firstName}, Last Name: ${lastName}, Phone: ${phone}, Email: ${email}, Level: ${level}, GPA: ${gpa}, DOB: ${dob}, Gender: ${gender}, Department: ${department}, Status: ${status}`);
    });
});
