function getRndInteger(min, max) {// random number generaattori
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let multiValue = "1";

function answerCheck(i) {
    multiValue = i;
    if (multiValue == 3) {
        multiValue = "right";
    }
    else {
        multiValue = "wrong";
    }
    return multiValue;
}
let multiply = "";

function checkRadioBox(id, id2, id3, id4, id5) {

    document.getElementById(id).checked = false;
    document.getElementById(id2).checked = false;
    document.getElementById(id3).checked = false;
    document.getElementById(id4).checked = false;
    document.getElementById(id5).checked = false;

}

function styleDisplayThree(id, id2, id3, display1, display2, display3) {
    document.getElementById(id).style.display = display1;
    document.getElementById(id2).style.display = display2;
    document.getElementById(id3).style.display = display3;

}
function styleBackgroundColorThree(id, id2, id3, color1, color2, color3) {
    document.getElementById(id).style.backgroundColor = color1;
    document.getElementById(id2).style.backgroundColor = color2;
    document.getElementById(id3).style.backgroundColor = color3;

}

function multiplePosition(answer, answer2, answer3, asnwer4, answer5) {

    document.getElementById("multiAnswerA").innerHTML = answer;
    document.getElementById("multiAnswerB").innerHTML = answer2;
    document.getElementById("multiAnswerC").innerHTML = answer3;
    document.getElementById("multiAnswerD").innerHTML = asnwer4;
    document.getElementById("multiAnswerE").innerHTML = answer5;


}

function timeOut(id1, id2) {
    setTimeout(function () { document.getElementById(id1).style.display = "none"; document.getElementById(id2).style.display = "block"; }, 3000);
}

function multiplyButton() {

    document.getElementById("answer").innerHTML = "";

    checkRadioBox("multiInputA", "multiInputB", "multiInputC", "multiInputD", "multiInputE");

    styleDisplayThree("multiRadio", "multiStartBtn", "checkMultiply", "block", "none", "block");

    let randomNumber = getRndInteger(1, 50);
    let randomNumberSecond = getRndInteger(20, 69);

    multiply = randomNumber * randomNumberSecond;

    document.getElementById("multiNumbers").innerHTML = randomNumber + " x " + randomNumberSecond;

    document.getElementById("multiAnswerA").innerHTML = multiply - getRndInteger(1, 5);
    document.getElementById("multiAnswerB").innerHTML = multiply + getRndInteger(1, 5);
    document.getElementById("multiAnswerC").innerHTML = multiply;
    document.getElementById("multiAnswerD").innerHTML = multiply - getRndInteger(6, 10);
    document.getElementById("multiAnswerE").innerHTML = multiply + getRndInteger(6, 10);


}

function multiplyCheck() {
    document.getElementById("error").innerHTML = "";

    if (document.getElementById("multiInputA").checked == false && document.getElementById("multiInputB").checked == false && document.getElementById("multiInputC").checked == false && document.getElementById("multiInputD").checked == false && document.getElementById("multiInputE").checked == false) {

        document.getElementById("error").innerHTML = "Valitse vastaus klikkaamalla";
        return;
    }

    else if (multiValue == "right") {
        document.getElementById("answer").innerHTML = "Hienoa ! Sait oikean vastauksen " + multiply + "! Painamalla Aloita lasku saat uudet numerot.";
    }
    else {
        document.getElementById("answer").innerHTML = "Harmillisesti vastauksesi on väärin. Oikea vastaus olisi ollut tähän kysymykseen " + multiply + "." + " Painamalla Aloita lasku saat uudet numerot";
    }

    styleDisplayThree("multiRadio", "multiStartBtn", "checkMultiply", "none", "block", "none");

}

function divideButton() {

    styleDisplayThree("divideTaskA", "divideTaskB", "divideTaskC", "none", "none", "none");

    document.getElementById("divideAsnwerCheck").innerHTML = "";
    document.getElementById("divideAnswer").value = "";

    let randonNumber = getRndInteger(1, 3);

    if (randonNumber === 1) {
        document.getElementById("divideTaskA").style.display = "block";
    }
    else if (randonNumber === 2) {
        document.getElementById("divideTaskB").style.display = "block";
    }
    else {
        document.getElementById("divideTaskC").style.display = "block";
    }

    styleDisplayThree("divideStartButton", "checkDivide", "divideAnswer", "none", "block", "block");

}

function divideCheck() {
    let divideTaskA = Math.floor(430 / 60);
    let divideTaskB = Math.floor(1100 / 250);
    let divideTaskC = Math.floor(876 / 150);
    let divideInput = document.getElementById("divideAnswer").value;
    let divideInputIsNaN = isNaN(divideInput);

    let taskA = document.getElementById("divideTaskA").style.display;
    let taskB = document.getElementById("divideTaskB").style.display;

    document.getElementById("divideError").innerHTML = "";


    if (divideInputIsNaN == true || divideInput=="") {

        document.getElementById("divideError").innerHTML = "Vastauksen täytyy olla numero.";
        return;
    }

    if (taskA == "block") {
        if (divideInput == divideTaskA) {
            document.getElementById("divideAsnwerCheck").innerHTML = "Onneksi olkoon vastauksesi oli oikein " + divideTaskA + " kpl.Painamalla Aloita lasku painiketta saat uuden tehtävän.";

        }
        else {
            document.getElementById("divideAsnwerCheck").innerHTML = "Harmin paikka. Tällä kertaa ei mennyt oikein. Oikea vastaus olisi ollut " + divideTaskA + " kpl. Painamalla Aloita lasku painiketta saat uuden tehtävän.";
        }
    }
    else if (taskB == "block") {
        if (divideInput == divideTaskB) {

            document.getElementById("divideAsnwerCheck").innerHTML = "Onneksi olkoon vastauksesi oli oikein " + divideTaskB + " kpl.Painamalla Aloita lasku painiketta saat uuden tehtävän.";
        }
        else {

            document.getElementById("divideAsnwerCheck").innerHTML = "Harmin paikka. Tällä kertaa ei mennyt oikein. Oikea vastaus olisi ollut " + divideTaskB + " kpl.Painamalla Aloita lasku painiketta saat uuden tehtävän.";
        }
    }
    else {
        if (divideInput == divideTaskC) {

            document.getElementById("divideAsnwerCheck").innerHTML = "Onneksi olkoon vastauksesi oli oikein " + divideTaskC + " henkilöä. Painamalla Aloita lasku painiketta saat uuden tehtävän.";
        }
        else {
            document.getElementById("divideAsnwerCheck").innerHTML = "Harmin paikka. Tällä kertaa ei mennyt oikein. Oikea vastaus olisi ollut " + divideTaskC + "henkilöä.Painamalla Aloita lasku painiketta saat uuden tehtävän.";
        }
    }

    styleDisplayThree("checkDivide", "divideAnswer", "divideStartButton", "none", "none", "block");
}
function prosentButton() {

    document.getElementById("prosentTaskOne").style.display = "block";
    document.getElementById("prosentStartButton").style.display = "none";
    document.getElementById("prosentTaskThree").style.display="none";
}

function prosentTaskOneA() {

    styleBackgroundColorThree("prosentWrongA", "prosentRightB", "prosentWrongC", "red", "green", "red");
    document.getElementById("prosentAnswerTaskOne").innerHTML = "Vastauksesi on väärin.";
    timeOut("prosentTaskOne", "prosentTaskTwo");


}
function prosentTaskOneB() {// oikeas vastaus
    styleBackgroundColorThree("prosentWrongA", "prosentRightB", "prosentWrongC", "red", "green", "red");
    document.getElementById("prosentAnswerTaskOne").innerHTML = "Vastauksesi on oikein!";
    timeOut("prosentTaskOne", "prosentTaskTwo");

}
function prosentTaskOneC() {
    styleBackgroundColorThree("prosentWrongA", "prosentRightB", "prosentWrongC", "red", "green", "red");
    document.getElementById("prosentAnswerTaskOne").innerHTML = "Vastauksesi on väärin.";
    timeOut("prosentTaskOne", "prosentTaskTwo");
}

function prosentTaskTwoA() {
    styleBackgroundColorThree("prosentRightTwoA", "prosentWrongTwoB", "prosentWrongTwoC", "green", "red", "red");
    document.getElementById("prosentAnswerTaskTwo").innerHTML = "Vastauksesi on oikein!";
    timeOut("prosentTaskTwo", "prosentTaskThree");

}
function prosentTaskTwoB() {
    styleBackgroundColorThree("prosentRightTwoA", "prosentWrongTwoB", "prosentWrongTwoC", "green", "red", "red");
    document.getElementById("prosentAnswerTaskTwo").innerHTML = "Vastauksesi on Väärin.";
    timeOut("prosentTaskTwo", "prosentTaskThree");
}
function prosentTaskTwoC() {
    styleBackgroundColorThree("prosentRightTwoA", "prosentWrongTwoB", "prosentWrongTwoC", "green", "red", "red");
    document.getElementById("prosentAnswerTaskTwo").innerHTML = "Vastauksesi on väärin.";
    timeOut("prosentTaskTwo", "prosentTaskThree");
}

function prosentTaskThreeA() {
    styleBackgroundColorThree("prosentWrongThreeA", "prosentRightThreeB", "prosentWrongThreeC", "red", "green", "red");
    document.getElementById("prosentAnswerTaskThree").innerHTML = "Vastauksesi on väärin.";
    document.getElementById("prosentStartButton").style.display="block";
}

function prosentTaskThreeB() {
    styleBackgroundColorThree("prosentWrongThreeA", "prosentRightThreeB", "prosentWrongThreeC", "red", "green", "red");
    document.getElementById("prosentAnswerTaskThree").innerHTML = "Vastauksesi on oikein!";
    document.getElementById("prosentStartButton").style.display="block";
}

function prosentTaskThreeC() {
    styleBackgroundColorThree("prosentWrongThreeA", "prosentRightThreeB", "prosentWrongThreeC", "red", "green", "red");
    document.getElementById("prosentAnswerTaskThree").innerHTML = "Vastauksesi on väärin.";
    document.getElementById("prosentStartButton").style.display="block";
}


