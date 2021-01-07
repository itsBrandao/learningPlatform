var students = [
    { name: "John Smith", number: 201, id: 12 },
    { name: "Mary Jane", number: 512, id: 31 },
    { name: "Jane Dow", number: 45, id: 3 }
];


window.onload = function() {
    createStudent();
}
function createStudent() {
    let html = "";
    for(let y in students){
        html += "<section class='box-name' onclick='showStudent(" + y + ")'> <h1><b>" + students[y].name + "</b></h1> <h3>Number: " + students[y].number + "</h3> </section>";
    }
    document.getElementById("students").innerHTML=html;
}

function showStudent(position) {
    sessionStorage.setItem("studentID", position);
    sessionStorage.setItem("studentName", students[position].name);
    window.location = "studentGrades.html";
}