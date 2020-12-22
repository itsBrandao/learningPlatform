var students = [
    { name: "Mary", number: 50037237 },
    { name: "John", number: 50037238 },
    { name: "Anthony", number: 50037239 }
];

var units = [
    { unit: "Mathematics", semester: 3, etcs: 6 },
    { unit: "Literature", semester: 2, etcs: 6 },
    { unit: "Laws", semester: 1, etcs: 3 },
    { unit: "Informatics", semester: 1, etcs: 6 },
    { unit: "Cooking", semester: 2, etcs: 3 }
];

function resetInputs(){
    document.getElementById("student_name").value = "";
    document.getElementById("unit_name").value = "";
    document.getElementById("project_grade").value = "";
    document.getElementById("percentage_project").value = "";
    document.getElementById("test_grade").value = "";
    document.getElementById("percentage_test").value = "";
    document.getElementById("result").innerHTML = "";
}

function calculate(){
    let student_id = document.getElementById("student_name").value;
    let unit_id = document.getElementById("unit_name").value;
    let project_grade = document.getElementById("project_grade").value;
    let percentage_project = document.getElementById("percentage_project").value;
    let test_grade = document.getElementById("test_grade").value;
    let percentage_test = document.getElementById("percentage_test").value;

    if (student_id != "" || unit_id != "" || project_grade != "" || percentage_project != "" || test_grade != "" || percentage_test != "") {

        let soma = parseFloat(percentage_test) + parseFloat(percentage_project);

        if (soma == 1) {

            let final_grade = (project_grade * percentage_project) + (test_grade * percentage_test);

            let aux = "";
            aux += "Student " + students[student_id].name + "with number " + students[student_id].number  + " obtained " + final_grade.toFixed(1) + " on the " + units[unit_id].unit + " unit" + " (" + units[unit_id].etcs + " ETCS) of the " + units[unit_id].semester + "º Semester";
            document.getElementById("results").innerHTML = aux;

        } else {
            window.alert("the sum of the percetages have to give 1!");
        }

    } else {
        window.alert("fill in the spaces above!");
    }
}

window.onload = function(){

    let aux = "";
    let auxx = "";
    for (let i in students){
        aux += "<option value ='" + i + "'>" + students[i].name + "</option>";
    }

    for (let i in units){
        auxx += "<option value ='" + i + "'>" + units[i].unit + "</option>";
    }

    document.getElementById("student_name").innerHTML = aux;
    document.getElementById("unit_name").innerHTML = auxx;
}