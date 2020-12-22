    var nome = "John Smith";
    nome += " grades";
    
    var units = [
        { unit: "Mathematics", grade: 8.3, semester: 3, ects: 6 },
        { unit: "Literature", grade: 11.2, semester: 2, ects: 6 },
        { unit: "Laws", grade: 18.5, semester: 1, ects: 3 },
        { unit: "Informatics", grade: 14.3, semester: 1, ects: 6 },
        { unit: "Cooking", grade: 7.4, semester: 2, ects: 3 }
    ];

    var sum = 0;
    var failed = 0;
    var finished = 0;
    var ectsSum = 0;

    window.onload = function () {

        document.getElementById("student").innerHTML = nome;

        let html = "";
        for(let unit of units){
            html += createUnitHtml(unit);
        }

        let avarage = sum/finished;

        document.getElementById("grades").innerHTML = html;
        let aux = ""; 
        aux += "<summary>" + "Average: " + avarage.toFixed(1) + "</summary>";
        aux += "<p>" + failed + " failed units" + "</p>";
        aux += "<p>" + finished + " passed units" + "</p>";

        document.getElementById("summary").innerHTML = aux;
    }

    function createUnitHtml(unit) {
        let aux = "";

        if(unit.grade < 9.5){
            aux += "<section class='unitfail'>";
            failed += 1;
        }
        else{
            aux += "<section class='boxunit'>";
            finished += 1;
            sum += unit.grade;
            ectsSum += unit.ects;
        }
        
        aux += "<div class='square'>" + unit.unit.substring(0, 2) + "</div>";
        aux += "<section>";
        aux += "<h2>" + unit.unit + "</h2>";
        aux += "<h3>" + "Grades: " +  unit.grade + "</h3>";
        aux += "<h3>" + "Semester: " + unit.semester + "</h3>";
        aux += "<h3>" + "ECTS: " + unit.ects + "</h3>";
        aux += "</section>";
        aux += "</section>";

        return aux;
    }
