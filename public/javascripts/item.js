window.onload = function() {
    let json = sessionStorage.getItem("item");
    let item = JSON.parse(json);

    document.getElementById("studentUnit").innerHTML = "Grades of " + item.studentName + " at unit " + item.unitName;
    document.getElementById("gradeProject").innerHTML = "Grade of Project: " + item.gradep;
    document.getElementById("gradeTest").innerHTML = "Grade of Test: " + item.gradet;
    document.getElementById("finalGrade").innerHTML = "Final Grade: " + item.finalGrade + " (project " + item.percentagep + "% + test " + item.percentaget + "%)";
}