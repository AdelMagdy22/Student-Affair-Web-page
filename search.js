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



// get references to HTML elements
const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#Search");
const searchSelect = document.querySelector("select");
const table = document.querySelector("table");
const rows = table.querySelectorAll("tr");

// add submit event listener to the search form
searchForm.addEventListener("submit", function (event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // retrieve the search value and type
    const searchValue = searchInput.value;
    const searchType = searchSelect.value;

    // iterate over each row in the table
    for (let i = 1; i < rows.length; i++) {
        // retrieve the values for the current row
        const level = rows[i].cells[3].textContent.toLowerCase();
        const gpa = rows[i].cells[4].textContent.toLowerCase();
        const department = rows[i].cells[9].textContent.toUpperCase();
        const id = rows[i].querySelectorAll("td")[2].textContent;

        // check if the current row matches the search criteria
        if (searchType === "ID" && id.includes(searchValue)) {
            rows[i].style.display = "";
        } else if (searchType === "Level" && level.includes(searchValue)) {
            rows[i].style.display = "";
        } else if (searchType === "GPA" && gpa.includes(searchValue)) {
            rows[i].style.display = "";
        } else if (searchType === "Departement" && department.includes(searchValue)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});
});

