// Wait for the document to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    let Students;
//if there is a data in localStorage put it in students else create an empty array
if (localStorage.Students != null) {
    Students = JSON.parse(localStorage.Students);
}else{
    Students = []; 
}

    function DisplayTable(){
    let table = '';
    for(let i = 0 ; i < Students.length ; i++){
        table += `
        <tr>
            <td>${Students[i].firstName}</td>
            <td>${Students[i].lastName}</td>
            <td>${Students[i].id}</td>
            <td>${Students[i].level}</td>
            <td>${Students[i].gpa}</td>
            <td>${Students[i].gender}</td>
            <td>${Students[i].dob}</td>
            <td>${Students[i].phone}</td>
            <td>${Students[i].status}</td>
            <td>${Students[i].department}</td>
        </tr>
        `
    }
    document.getElementById('TBody').innerHTML = table;
}

DisplayTable();


    // Select the drop-down element
    var selectStatue = document.querySelector('#selectStatue');

    // Attach an event listener to the drop-down element
    selectStatue.addEventListener('change', function () {

        // Select all the rows in the table body
        var rows = document.querySelectorAll('tbody tr');

        // If "All Students" is selected, show all rows
        if (selectStatue.value === 'All Students') {
            for (var i = 0; i < rows.length; i++) {
                rows[i].style.display = '';
            }
        }
        // If "Active" is selected, show only rows with "active" status
        else if (selectStatue.value === 'Active') {
            for (var i = 0; i < rows.length; i++) {
                var status = rows[i].querySelector('td:nth-child(9)').textContent;
                if (status.toLowerCase() === 'active') {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }
        // If "Inactive" is selected, show only rows with "inactive" status
        else if (selectStatue.value === 'InActive') {
            for (var i = 0; i < rows.length; i++) {
                var status = rows[i].querySelector('td:nth-child(9)').textContent;
                if (status.toLowerCase() === 'inactive') {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }
    });
});
