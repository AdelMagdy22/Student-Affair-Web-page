let Students;
//if there is a data in localStorage put it in students else create an empty array
if (localStorage.Students != null) {
    Students = JSON.parse(localStorage.Students);
}else{
    Students = []; 
}

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
        //create object an assign the values to it.
        let Student ={
            id: id,
            firstName : firstName,
            lastName : lastName,
            phone : phone,
            email : email,
            level : level,
            gpa : gpa,
            dob : dob,
            gender : gender,
            department : department,
            status : status,
        }
        Students.push(Student);
        localStorage.setItem("Students",JSON.stringify(Students));

        // DisplayTable();
        // const students = JSON.parse(localStorage.getItem("students")) || [];

        // students.push({
        //     id,
        //     firstName,
        //     lastName,
        //     phone,
        //     email,
        //     level,
        //     gpa,
        //     dob,
        //     gender,
        //     department,
        //     status,
        // });

        // localStorage.setItem("students", JSON.stringify(students));

        // return { id,fname, lname,phone,email,level,gpa,dob,gender,department,status };
        

    });
});


// function DisplayTable(){
//     let table = '';
//     for(let i = 0 ; i < Students.length ; i++){
//         table += `
//         <tr>
//             <td>${Students[i].firstName}</td>
//             <td>${Students[i].lastName}</td>
//             <td>${Students[i].id}</td>
//             <td>${Students[i].level}</td>
//             <td>${Students[i].gpa}</td>
//             <td>${Students[i].gender}</td>
//             <td>${Students[i].dob}</td>
//             <td>${Students[i].phone}</td>
//             <td>${Students[i].status}</td>
//             <td>${Students[i].department}</td>
//         </tr>
//         `;
//     }
//     document.getElementById('TBody').innerHTML = table;
// }

// DisplayTable();
