    var nome = "John Smith";
    nome += " grades";
    

    var firstUnit = "Mathematics";
    var firstGrade = 7.5;
    var secondUnit = "Literature";
    var secondGrade = 11.2;

    window.onload = function () {
    document.getElementById("student").innerHTML = nome;
    let aux = "";

    if(firstGrade < 9.5){
        aux += "<section class='unitfail'>";
    }
    else{
        aux += "<section class='boxunit'>";
    }
    
    aux += "<div class='square'>" + firstUnit.substring(0, 2) + "</div>";
    aux += "<section>";
    aux += "<h2>" + firstUnit + "</h2>";
    aux += "<h3>" + "Grades: " +  firstGrade + "</h3>";
    aux += "</section>";
    aux += "</section>";
    aux += "<section class='boxunit'>";
    aux += "<div class='square'>" + secondUnit.substring(0, 2) + "</div>";
    aux += "<section>";
    aux += "<h2>" + secondUnit + "</h2>";
    aux += "<h3>" + "Grades: " + secondGrade + "</h3>";
    aux += "</section>";
    aux += "</section>";
    document.getElementById("grades").innerHTML = aux;
    }


