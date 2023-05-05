let Students;
//if there is a data in localStorage put it in students else create an empty array
if (localStorage.Students != null) {
    Students = JSON.parse(localStorage.Students);
}else{
    Students = []; 
}

// Wait for the document to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {

    // Get the DEpartement button element
    const depBtn = document.querySelector("#btnDep");

    // Select the drop-down element
    const ID = document.querySelector("#ID");
    const name = document.querySelector("#fname");
    const selectDepartemnt = document.querySelector("#select");

    depBtn.addEventListener('click', function(){
        const id = ID.value;
        const fName = name.value;
        const dep = selectDepartemnt.value;
        let indx = null;
        for (let i = 0; i < Students.length; i++) {
            if (id == Students[i].id && fName == Students[i].firstName) {
                indx = i;
            }
        }
        if(indx != null)
        {
            let Student ={
                id: Students[indx].id,
                firstName : Students[indx].firstName,
                lastName : Students[indx].lastName,
                phone : Students[indx].phone,
                email : Students[indx].email,
                level : Students[indx].level,
                gpa : Students[indx].gpa,
                dob : Students[indx].dob,
                gender : Students[indx].gender,
                department : dep,
                status : Students[indx].status,
            } 
            Students[indx] = Student;
                localStorage.setItem("Students",JSON.stringify(Students));
                alert("Department Updated Successfully");
                location.href = "view.html";
        }
        else{
            alert("Id not found");
        }
    });
});
