function getRndInteger(min, max) {// random number generaattori
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Laittaa osoitetuille elementeille värin.
 * @param {text} elementId  "getElementById" 
 * @param {text} elementIdTwo   "getElementById" 
 * @param {text} elementIdThree "getElementById"  
 * @param {color} colorOne  elementId - color 
 * @param {color} colorTwo  elementIdTwo - color
 * @param {color} colorThree    elementIdThree - color
 */
function styleBackgroundColorThree(elementId, elementIdTwo, elementIdThree, colorOne, colorTwo, colorThree) {
    document.getElementById(elementId).style.backgroundColor = colorOne;
    document.getElementById(elementIdTwo).style.backgroundColor = colorTwo;
    document.getElementById(elementIdThree).style.backgroundColor = colorThree;

}


/**
 * Laittaa osoitetulle "document.getElementByid" valuen
 * elementId - value1 ja elementIdTwo - value2.
 * @param {text} elementId  "document.getElementByid"
 * @param {text} elementIdTwo   "document.getElementByid"
 * @param {number} value1   value 
 * @param {number} value2   value 
 */
function spanAmount(elementId, elementIdTwo, value1, value2) {

    document.getElementById(elementId).innerHTML = value1;
    document.getElementById(elementIdTwo).innerHTML = value2;
}
/**
 * Ajoitettu section vaihto. Näkyvillä olevan piilottaminen(display:none) ja uuden esiintuominen (display:block).
 * @param {text} section    sectionID näkyvillä olevan.
 * @param {text} sectionTwo sectionID tulevan.
 * @param {number}  time    numeraalinen aika esim 3000=3s.
 */
function timeOut(section, sectionTwo, time) {
    setTimeout(function () { document.getElementById(section).style.display = "none"; document.getElementById(sectionTwo).style.display = "block"; }, time);
}
/**
 * tehdään buttonista disabloitu tai otetaan taas käyttöön
 * @param {text} elementIdA "getElementById"
 * @param {text} elementIdB "getElementById"
 * @param {text} elementIdC "getElementById"
 * @param {text} valueA  true / false
 * @param {text} ValueB true / false
 * @param {text} ValueC true / false
 */
function buttonDisableEnable(elementIdA, elementIdB, elementIdC, valueA, ValueB, ValueC) {

    document.getElementById(elementIdA).disabled = valueA;
    document.getElementById(elementIdB).disabled = ValueB;
    document.getElementById(elementIdC).disabled = ValueC;
}

/**
 * Laittaa asnwerA , B ja C arrayhin. Ottaa sieltä randomilla yhden ja laittaa annettuu "getElementById":n valueksi
 * samalla poistaa sieltä arvotun arrayn pois.
 * @param {number} answerA  vastausvaihtoehto A
 * @param {number} answerB  vastausvaihtoehto B
 * @param {number} answerC  vastausvaihtoehto C
 * @param {text} elementIdA "getElementById" haluttu id  
 * @param {text} elementIdB "getElementById" haluttu id
 * @param {text} elementIdC "getElementById" haluttu id
 */
function answerShuffle(answerA, answerB, answerC, elementIdA, elementIdB, elementIdC) {

    let asnwerArray = [answerA, answerB, answerC];

    for (let i = 0; i < asnwerArray.length; i++) {
        let randomNumber = getRndInteger(0, asnwerArray.length - 1);
        document.getElementById(elementIdA).value = asnwerArray[randomNumber];
        asnwerArray.splice(randomNumber, 1);

        for (let j = 0; j < 1; j++) {
            let randomNumberTwo = getRndInteger(0, asnwerArray.length - 1);
            document.getElementById(elementIdB).value = asnwerArray[randomNumberTwo];
            asnwerArray.splice(randomNumberTwo, 1);

        }
        for (let k = 0; k < 1; k++) {
            let randomNumberThree = getRndInteger(0, asnwerArray.length - 1);
            document.getElementById(elementIdC).value = asnwerArray[randomNumberThree];
            asnwerArray.splice(randomNumberThree, 1);

        }

    }

}
/**
 * Vaihtaa vastaus värit riippuen missä on oikea value arvo.
 * @param {number} rightAnswer  oikea vastaus (value)
 * @param {text} elementIdA    "getElementById" haluttu id
 * @param {text} elementIdB     "getElementById" haluttu id
 * @param {text} elementIdC     "getElementById"haluttu id
 */
function answerColors(rightAnswer, elementIdA, elementIdB, elementIdC) {

    if (document.getElementById(elementIdA).value == rightAnswer && document.getElementById(elementIdB).value != rightAnswer && document.getElementById(elementIdC).value != rightAnswer) {
        styleBackgroundColorThree(elementIdA, elementIdB, elementIdC, "green", "red", "red");

    }
    else if (document.getElementById(elementIdB).value == rightAnswer && document.getElementById(elementIdA).value != rightAnswer && document.getElementById(elementIdC).value != rightAnswer) {
        styleBackgroundColorThree(elementIdA, elementIdB, elementIdC, "red", "green", "red");
    }

    else {
        styleBackgroundColorThree(elementIdA, elementIdB, elementIdC, "red", "red", "green");
    }
}
/**
 * Antaa vastauksen oliko value arvo oikea.
 * @param {number} rightAnswer   oikea vastaus 
 * @param {text}   elementId     "getElementById" minkä haluaa tarkistaa onko oikea  
 * @param {text}    Mathtask       matikka alue mikä katsotaan onko oikein vai väärin.
*/
function answerText(rightAnswer, elementId, task) {
    let answer = "";
    if (document.getElementById(elementId).value == rightAnswer) {
        answer = "Vastauksesi on oikein ! ";
        rightAnswers.push(task);
    }
    else {
        answer = "Vastauksesi on väärin.";
        wrongAnswers.push(task);
    }
    return answer;

}

function taskCounter(value) {
    for (let i = 0; i < 1; i++) {

        value++;
    }
    return value;
}
// Antaa vastausten mukaan kuvan näkyvillle.
function rewardImg() {

    if (rightAnswers.length == 0) {

        document.getElementById("imgRewardHere").innerHTML = rewardImages[0];
        document.getElementById("rewardsText").textContent = "Tällä kertaa ei mennyt aivan nappiin. Hamsterimme löysivät tälläisen kuvan sinulle.";
        document.getElementById("infoText").textContent = "Alta voit lähteä tekemään tehtäviä uudestaan.";

    }
    else if (rightAnswers.length == 1) {

        document.getElementById("imgRewardHere").innerHTML = rewardImages[1];
        document.getElementById("rewardsText").textContent = "Hienoa! koulutetut hamsterimme tarkistivat tehtäväsi ja löysivät tämän kuvan vastaamaan suoristustasi.";
        document.getElementById("infoText").textContent = "Alta voit lähteä tekemään tehtäviä uudestaan.";
    }
    else if (rightAnswers.length == 2) {

        document.getElementById("imgRewardHere").innerHTML = rewardImages[2];
        document.getElementById("rewardsText").textContent = "Hienoa! koulutetut hamsterimme tarkistivat tehtäväsi ja löysivät tämän kuvan vastaamaan suoristustasi.";
        document.getElementById("infoText").textContent = "Alta voit lähteä tekemään tehtäviä uudestaan.";
    }
    else if (rightAnswers.length == 3) {

        document.getElementById("imgRewardHere").innerHTML = rewardImages[3];
        document.getElementById("rewardsText").textContent = "Hienoa! koulutetut hamsterimme löysivät sinulle hienon kuvan vastaamaan suoristustasi.";
        document.getElementById("infoText").textContent = "Alta voit lähteä tekemään tehtäviä uudestaan.";
    }
    else if (rightAnswers.length == 4) {

        document.getElementById("imgRewardHere").innerHTML = rewardImages[4];
        document.getElementById("rewardsText").textContent = "Hienoa! koulutetut hamsterimme löysivät sinulle hienon kuvan vastaamaan suoristustasi.";
        document.getElementById("infoText").textContent = "Alta voit lähteä tekemään tehtäviä uudestaan.";
    }
    else {

        document.getElementById("imgRewardHere").innerHTML = rewardImages[5];
        document.getElementById("rewardsText").textContent = "Hienoa! koulutetut hamsterimme löysivät sinulle hienon kuvan vastaamaan suoristustasi.";
        document.getElementById("infoText").textContent = "Kaikki tehtävät menivät oikein hienoa! Pääset tekemään tehtäviä uudestaan painamalla nappia!";
    }
}
//globaalit muuttujat

//Percent
let saleAmount = "";

//Divide
let hiredStudents = "";

//Multiplication
let multiplicationAnswer = "";

//Verbal task
let personsInAll = "";

//Circle Perimeter
let circlePerimeter = "";

//counter
let counter = Number("");

let rightAnswers = [];
let wrongAnswers = [];
let rewardImages = ['<img src="./image/goat-g6fdc2112e_640.png"class="imgreward goat" alt="goat">',
    '<img src="./image/fish-g38577bb5a_640.png"class="imgreward fish" alt="fish">',
    '<img src="./image/puppy-ga9487c155_640.png"class="imgreward puppy" alt="puppy">',
    '<img src="./image/cat-g9cc78c623_640.png"class="imgreward cat" alt="cat">',
    '<img src="./image/monster-gbc997e1d4_640.png"class="imgreward monster" alt="monster">',
    '<img src="./image/hamster-ga35ef1ede_640.png" class="imgreward hamster"alt="hamster">'];

let button = document.querySelector("#newStart");
let buttonStart = document.querySelector("#startButton");

button.addEventListener("click", taskStartButton);
buttonStart.addEventListener("click", taskStartButton);



function taskStartButton() {

    //percent laskukaavat
    let randomPriceNumber = getRndInteger(80, 200);
    let randomPercent = getRndInteger(20, 60);
    saleAmount = Math.floor(randomPriceNumber * (randomPercent / 100));
    let saleAmountA = saleAmount - getRndInteger(4, 6);
    let saleAmountC = saleAmount + getRndInteger(2, 5);

    //Divide laskukaavat
    let randomPriceDivideNumber = getRndInteger(800, 1200);
    let randomMoneyAmount = getRndInteger(120, 180);
    hiredStudents = Math.floor(randomPriceDivideNumber / randomMoneyAmount);
    let hiredStudentsB = hiredStudents - getRndInteger(2, 4);
    let hiredStudentsC = hiredStudents + getRndInteger(1, 3);

    //Multiplication laskukaavat
    let multiplicationRandomOne = getRndInteger(20, 80);
    let multiplicationRandomTwo = getRndInteger(20, 80);
    multiplicationAnswer = multiplicationRandomOne * multiplicationRandomTwo;
    let multiplicationAnswerA = multiplicationAnswer - getRndInteger(2, 5);
    let multiplicationAnswerC = multiplicationAnswer + getRndInteger(1, 4);

    // Verbal task
    let personInFamilyRng = getRndInteger(2, 5);
    let personsInFamilyTwoRng = getRndInteger(2, 5);
    personsInAll = (4 * personInFamilyRng) + (2 * personsInFamilyTwoRng);
    let personInAllA = personsInAll + getRndInteger(1, 4);
    let personInAllC = personsInAll - getRndInteger(2, 6);

    //ympyrän piiri

    let metersRng = getRndInteger(1, 5);
    let circleRadius = (800 / Math.PI) / 2;
    let circleRadiusRng = circleRadius + metersRng;
    circlePerimeter = Math.floor(2 * Math.PI * circleRadiusRng);
    let circlePerimeterA = Math.floor(circlePerimeter + getRndInteger(1, 3));
    let circlePerimeterC = Math.floor(circlePerimeter - getRndInteger(1, 3));

    //counter



    counter = document.getElementById("counter");
    counter.innerHTML = 1;

    rightAnswers = [];
    wrongAnswers = [];

    document.getElementById("percenTask").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("loppuArvio").style.display = "none";
    document.querySelector(".introText").style.display = "block";
    document.getElementById("pText").style.display = "none";
    document.getElementById("pCounterText").classList.add("countersize");

    document.getElementById("imgRewardHere").innerHTML = "";

    document.getElementById("percentAnswerText").innerHTML = "";
    document.getElementById("divideAnswerText").innerHTML = "";
    document.getElementById("multiplicationAnswerText").innerHTML = "";
    document.getElementById("verbalAnswerText").innerHTML = "";
    document.getElementById("circleAnswerText").innerHTML = "";

    styleBackgroundColorThree("percentA", "percentB", "percentC", "white", "white", "white");
    styleBackgroundColorThree("divideA", "divideB", "divideC", "white", "white", "white");
    styleBackgroundColorThree("multiplicationA", "multiplicationB", "multiplicationC", "white", "white", "white");
    styleBackgroundColorThree("verbalA", "verbalB", "verbalC", "white", "white", "white");
    styleBackgroundColorThree("circleA", "circleB", "circleC", "white", "white", "white");

    buttonDisableEnable("percentA", "percentB", "percentC", false, false, false);
    buttonDisableEnable("divideA", "divideB", "divideC", false, false, false);
    buttonDisableEnable("multiplicationA", "multiplicationB", "multiplicationC", false, false, false);
    buttonDisableEnable("verbalA", "verbalB", "verbalC", false, false, false);
    buttonDisableEnable("circleA", "circleB", "circleC", false, false, false);





    //percent

    answerShuffle(saleAmountA, saleAmount, saleAmountC, "percentA", "percentB", "percentC");
    spanAmount("price", "percent", randomPriceNumber, randomPercent)

    //divide
    answerShuffle(hiredStudents, hiredStudentsB, hiredStudentsC, "divideA", "divideB", "divideC");
    spanAmount("priceDivide", "moneyAmount", randomPriceDivideNumber, randomMoneyAmount);

    //Multiplication
    answerShuffle(multiplicationAnswerA, multiplicationAnswer, multiplicationAnswerC, "multiplicationA", "multiplicationB", "multiplicationC");
    spanAmount("MultiplicationNumber", "MultiplicationNumberTwo", multiplicationRandomOne, multiplicationRandomTwo);

    //Verbal
    answerShuffle(personInAllA, personsInAll, personInAllC, "verbalA", "verbalB", "verbalC");
    spanAmount("personsInFamily", "personsInFamilyTwo", personInFamilyRng, personsInFamilyTwoRng);

    //piiri
    answerShuffle(circlePerimeterA, circlePerimeter, circlePerimeterC, "circleA", "circleB", "circleC");
    document.getElementById("meters").innerHTML = metersRng;

}

let inputPercentA = document.getElementById("percentA");
inputPercentA.addEventListener("click", percent);

let inputPercentB = document.getElementById("percentB");
inputPercentB.addEventListener("click", percent);

let inputPercentC = document.getElementById("percentC");
inputPercentC.addEventListener("click", percent);

function percent(event) {
    answerColors(saleAmount, "percentA", "percentB", "percentC");
    document.getElementById("percentAnswerText").innerHTML = answerText(saleAmount, event.currentTarget.id, "mathPercent");
    buttonDisableEnable("percentA", "percentB", "percentC", true, true, true);
    counter.innerHTML = taskCounter(1);

    timeOut("percenTask", "divideTask", 3000);


}
let inputDivideA = document.getElementById("divideA");
inputDivideA.addEventListener("click", divide);

let inputDivideB = document.getElementById("divideB");
inputDivideB.addEventListener("click", divide);

let inputDivideC = document.getElementById("divideC");
inputDivideC.addEventListener("click", divide);

//divide buttons A , b ja c
function divide(event) {

    answerColors(hiredStudents, "divideA", "divideB", "divideC");
    document.getElementById("divideAnswerText").innerHTML = answerText(hiredStudents, event.currentTarget.id, "mathDivide");
    buttonDisableEnable("divideA", "divideB", "divideC", true, true, true);
    timeOut("divideTask", "multiplicationTask", 3000);
    counter.innerHTML = taskCounter(2);
}

let inputMultiplicationA = document.getElementById("multiplicationA");
inputMultiplicationA.addEventListener("click", multiplication);

let inputMultiplicationB = document.getElementById("multiplicationB");
inputMultiplicationB.addEventListener("click", multiplication);

let inputMultiplicationC = document.getElementById("multiplicationC");
inputMultiplicationC.addEventListener("click", multiplication);

//Multiplication buttons A ,B ja C
function multiplication(event) {
    answerColors(multiplicationAnswer, "multiplicationA", "multiplicationB", "multiplicationC");
    document.getElementById("multiplicationAnswerText").innerHTML = answerText(multiplicationAnswer, event.currentTarget.id, "mathMultiplication");
    buttonDisableEnable("multiplicationA", "multiplicationB", "multiplicationC", true, true, true);
    timeOut("multiplicationTask", "verbalTask", 3000);
    counter.innerHTML = taskCounter(3);
}

let inputVerbalA = document.getElementById("verbalA");
inputVerbalA.addEventListener("click", verbal);

let inputVerbalB = document.getElementById("verbalB");
inputVerbalB.addEventListener("click", verbal);

let inputVerbalC = document.getElementById("verbalC");
inputVerbalC.addEventListener("click", verbal);

//Verbal buttons A , B ja C
function verbal(event) {
    answerColors(personsInAll, "verbalA", "verbalB", "verbalC");
    document.getElementById("verbalAnswerText").innerHTML = answerText(personsInAll, event.currentTarget.id, "mathVerbal");
    buttonDisableEnable("verbalA", "verbalB", "verbalC", true, true, true);
    timeOut("verbalTask", "circleTask", 3000);
    counter.innerHTML = taskCounter(4);
}
let inputCircleA = document.getElementById("circleA");
inputCircleA.addEventListener("click", circle);

let inputCircleB = document.getElementById("circleB");
inputCircleB.addEventListener("click", circle);

let inputCircleC = document.getElementById("circleC");
inputCircleC.addEventListener("click", circle);

//Circle Perimiter
function circle(event) {
    answerColors(circlePerimeter, "circleA", "circleB", "circleC");
    document.getElementById("circleAnswerText").innerHTML = answerText(circlePerimeter, event.currentTarget.id, "mathCircle");
    buttonDisableEnable("circleA", "circleB", "circleC", true, true, true);
    document.getElementById("correctAnswers").innerHTML = rightAnswers.length;
    rewardImg();
    document.querySelector(".introText").style.display = "none";
    timeOut("circleTask", "loading", 3000);
    timeOut("loading", "loppuArvio", 13000);


}







