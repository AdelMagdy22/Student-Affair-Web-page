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
        window.location.reload(); 
    });
});
