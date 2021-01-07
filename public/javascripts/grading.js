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

function verifyAndCalculate() {
    let obj = {};
    let correct = true;
    if (!verifyEmptyInputs()) correct = false;
    if (!verifyAndSaveGradeProject(obj)) correct = false;
    if (!verifyAndSaveGradeTest(obj)) correct = false;
    if (!verifyAndSavePercentageProject(obj)) correct = false;
    if (!verifyAndSavePercentageTest(obj)) correct = false;
    if (!verifySumPercentages()) correct = false;
    if (!correct) return;

    let student_id = document.getElementById("student_name").value;
    let unit_id = document.getElementById("unit_name").value;
    let project_grade = document.getElementById("project_grade").value;
    let percentage_project = document.getElementById("percentage_project").value;
    let test_grade = document.getElementById("test_grade").value;
    let percentage_test = document.getElementById("percentage_test").value;

    let final_grade = (project_grade * percentage_project) + (test_grade * percentage_test);

    let aux = "";
    aux += "Student " + students[student_id].name + "with number " + students[student_id].number  + " obtained " + final_grade.toFixed(1) + " on the " + units[unit_id].unit + " unit" + " (" + units[unit_id].etcs + " ETCS) of the " + units[unit_id].semester + "º Semester";
    document.getElementById("results").innerHTML = aux;

    obj.studentName = students[student_id].name;
    obj.studentNumber = students[student_id].number;
    obj.unitName = units[unit_id].unit;
    obj.unitSemester = units[unit_id].semester;
    obj.unitEtcs = units[unit_id].etcs;
    obj.finalGrade = final_grade.toFixed(1);

    let json = JSON.stringify(obj); //converter para JSON
    sessionStorage.setItem("item", json); //salvar o JSON
    window.location = "item.html"; //alterar para a pagina do item
}

function verifyEmptyInputs() {
    let project_grade = document.getElementById("project_grade").value;
    let percentage_project = document.getElementById("percentage_project").value;
    let test_grade = document.getElementById("test_grade").value;
    let percentage_test = document.getElementById("percentage_test").value;
    let error3 = document.getElementById("error3");
    if (project_grade == "" || percentage_project == "" || test_grade == "" || percentage_test == "") {
        error3.innerHTML = "Fill in the spaces above!";
        error3.style.display = "block";
        return false;
    }
    error3.style.display = "none";
    return true;
}

function verifySumPercentages() {
    let percentage_project = document.getElementById("percentage_project").value;
    let percentage_test = document.getElementById("percentage_test").value;
    let error3 = document.getElementById("error3");
    let soma = parseFloat(percentage_test) + parseFloat(percentage_project);

    if (soma != 1) {
        error3.innerHTML = "The sum of the percetages have to give 1!";
        error3.style.display = "block";
        return false;
    }
    error3.style.display = "none";
    return true;

}

function verifyAndSaveGradeProject(obj) {
    let project_grade = document.getElementById("project_grade");
    let error1 = document.getElementById("error1");
    if (!project_grade.checkValidity()) {
        error1.innerHTML = "Grades are between 0 and 20!";
        error1.style.display = "block";
        return false;
    }
    obj.gradep = project_grade.value;
    error1.style.display = "none";
    return true;
}

function verifyAndSaveGradeTest(obj) {
    let test_grade = document.getElementById("test_grade");
    let error2 = document.getElementById("error2");
    if (!test_grade.checkValidity()) {
        error2.innerHTML = "Grades are between 0 and 20!";
        error2.style.display = "block";
        return false;
    }
    obj.gradet = test_grade.value;
    error2.style.display = "none";
    return true;
}

function verifyAndSaveGradeTest(obj) {
    let test_grade = document.getElementById("test_grade");
    let error2 = document.getElementById("error2");
    if (!test_grade.checkValidity()) {
        error2.innerHTML = "Grades are between 0 and 20!";
        error2.style.display = "block";
        return false;
    }
    obj.gradet = test_grade.value;
    error2.style.display = "none";
    return true;
}

function verifyAndSavePercentageProject(obj) {
    let percentage_project = document.getElementById("percentage_project");
    let error1 = document.getElementById("error1");
    if (!percentage_project.checkValidity()) {
        error1.innerHTML = "Percentages are between 0 and 1!";
        error1.style.display = "block";
        return false;
    }
    obj.percentagep = percentage_project.value;
    error1.style.display = "none";
    return true;
}

function verifyAndSavePercentageTest(obj) {
    let percentage_test = document.getElementById("percentage_test");
    let error3 = document.getElementById("error3");
    if (!percentage_test.checkValidity()) {
        error3.innerHTML = "Percentages are between 0 and 1!";
        error3.style.display = "block";
        return false;
    }
    obj.percentaget = percentage_test.value;
    error3.style.display = "none";
    return true;
}