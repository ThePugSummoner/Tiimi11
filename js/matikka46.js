//Funktiot
/**
 * Satunnaislukugeneraattori laitetaan pienin haluttu (min) ja suurin haluttu (max)
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
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
 * Array:lle missä id vaihdetaan backgrounColor white ja disabled false. Poistaa array itemit
 * @param {array} array 
 */
function inputStyleAndDisabled(array) {
    let i = 0;
    while (i < array.length) {
        document.getElementById(array[i]).disabled = false;
        document.getElementById(array[i]).style.backgroundColor = "white";
        array.shift();
    }

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

    for (let i = 0; i < 1; i++) {
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
        inputIds.push(elementIdA, elementIdB, elementIdC);

    }
    else if (document.getElementById(elementIdB).value == rightAnswer && document.getElementById(elementIdA).value != rightAnswer && document.getElementById(elementIdC).value != rightAnswer) {
        styleBackgroundColorThree(elementIdA, elementIdB, elementIdC, "red", "green", "red");
        inputIds.push(elementIdA, elementIdB, elementIdC);
    }

    else {
        styleBackgroundColorThree(elementIdA, elementIdB, elementIdC, "red", "red", "green");
        inputIds.push(elementIdA, elementIdB, elementIdC);
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
/**
 * laskee monesko tehtävä menossa
 * @param {number} value 
 * @returns 
 */
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
//arrayt / oliot
let mathValues = [
    {
        saleamount: "",
        hiredstudents: "",
        multiplication: "",
        persons: "",
        perimeter: ""
    }
];

let inputIds = [];
let rightAnswers = [];
let wrongAnswers = [];
let rewardImages = ['<img src="../images/goat-g6fdc2112e_640.png"class="imgreward goat" alt="goat">',
    '<img src="../images/fish-g38577bb5a_640.png"class="imgreward fish" alt="fish">',
    '<img src="../images/puppy-ga9487c155_640.png"class="imgreward puppy" alt="puppy">',
    '<img src="../images/cat-g9cc78c623_640.png"class="imgreward cat" alt="cat">',
    '<img src="../images/monster-gbc997e1d4_640.png"class="imgreward monster" alt="monster">',
    '<img src="../images/hamster-ga35ef1ede_640.png" class="imgreward hamster"alt="hamster">'];


/**
 * aloitus buttonit alussa ja lopussa laitettu Eventlistenereihin ja olemaan samassa funktiossa
 */
let button = document.querySelector("#newStart");
let buttonStart = document.querySelector("#startButton");

button.addEventListener("click", taskStartButton);
buttonStart.addEventListener("click", taskStartButton);

/**
 * Funktio taskStartButton arpoo jokaiseen tehtävä alueeseen numerot ja sieltä siirretään arrayhin.
 * Monesko tehtävä menossa laskuri alkaa
 * Arrayn nollaus 
 * display none/ block , disabled = false
 * nollaukset vastausteksteihin oliko oikein vai ei
 * vastausten arpominen ja uudet arvot
 */

function taskStartButton() {

    //percent laskukaavat
    let randomPriceNumber = getRndInteger(80, 200);
    let randomPercent = getRndInteger(20, 60);
    let saleAmount = randomPriceNumber * (randomPercent / 100);
    saleAmount = Math.round(saleAmount * 100) / 100;
    let saleAmountA = saleAmount - getRndInteger(4, 6);
    let saleAmountC = saleAmount + getRndInteger(2, 5);
    mathValues.saleamount = saleAmount;

    //Divide laskukaavat
    let randomPriceDivideNumber = getRndInteger(800, 1200);
    let randomMoneyAmount = getRndInteger(120, 180);
    let hiredStudents = Math.floor(randomPriceDivideNumber / randomMoneyAmount);
    let hiredStudentsB = hiredStudents - getRndInteger(2, 4);
    let hiredStudentsC = hiredStudents + getRndInteger(1, 3);
    mathValues.hiredstudents = hiredStudents;

    //Multiplication laskukaavat
    let multiplicationRandomOne = getRndInteger(20, 80);
    let multiplicationRandomTwo = getRndInteger(20, 80);
    let multiplicationAnswer = multiplicationRandomOne * multiplicationRandomTwo;
    let multiplicationAnswerA = multiplicationAnswer - getRndInteger(2, 5);
    let multiplicationAnswerC = multiplicationAnswer + getRndInteger(1, 4);
    mathValues.multiplication = multiplicationAnswer;

    // Verbal task
    let personInFamilyRng = getRndInteger(2, 5);
    let personsInFamilyTwoRng = getRndInteger(2, 5);
    let personsInAll = (4 * personInFamilyRng) + (2 * personsInFamilyTwoRng);
    let personInAllA = personsInAll + getRndInteger(1, 4);
    let personInAllC = personsInAll - getRndInteger(2, 6);
    mathValues.persons = personsInAll;

    //ympyrän piiri

    let metersRng = getRndInteger(1, 5);
    let circleRadius = (800 / Math.PI) / 2;
    let circleRadiusRng = circleRadius + metersRng;
    let circlePerimeter = Math.floor(2 * Math.PI * circleRadiusRng);
    let circlePerimeterA = Math.floor(circlePerimeter + getRndInteger(1, 3));
    let circlePerimeterC = Math.floor(circlePerimeter - getRndInteger(1, 3));
    mathValues.perimeter = circlePerimeter;

    //counter



    counter = document.getElementById("counter");
    counter.innerHTML = 1;

    //oikeat ja väärät vastaukset nollataan.
    rightAnswers = [];
    wrongAnswers = [];
    // tiettyjen elementtien display block / none
    document.getElementById("percenTask").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("loppuArvio").style.display = "none";
    document.getElementById("pText").style.display = "none";
    document.getElementById("pCounterText").classList.add("countersize");
    // kenttien nollaukset 
    document.getElementById("imgRewardHere").innerHTML = "";

    document.getElementById("percentAnswerText").innerHTML = "";
    document.getElementById("divideAnswerText").innerHTML = "";
    document.getElementById("multiplicationAnswerText").innerHTML = "";
    document.getElementById("verbalAnswerText").innerHTML = "";
    document.getElementById("circleAnswerText").innerHTML = "";
    // Bg inputeista valkeaksi ja laitetaan inputit taas toimimaan
    inputStyleAndDisabled(inputIds);

    //percent valuet arvotaan ja spanneihin arvot

    answerShuffle(saleAmountA, saleAmount, saleAmountC, "percentA", "percentB", "percentC");
    spanAmount("price", "percent", randomPriceNumber, randomPercent)

    //divide valuet arvotaan ja spanneihin arvot
    answerShuffle(hiredStudents, hiredStudentsB, hiredStudentsC, "divideA", "divideB", "divideC");
    spanAmount("priceDivide", "moneyAmount", randomPriceDivideNumber, randomMoneyAmount);

    //Multiplication valuet arvotaan ja spanneihin arvot
    answerShuffle(multiplicationAnswerA, multiplicationAnswer, multiplicationAnswerC, "multiplicationA", "multiplicationB", "multiplicationC");
    spanAmount("MultiplicationNumber", "MultiplicationNumberTwo", multiplicationRandomOne, multiplicationRandomTwo);

    //Verbal valuet arvotaan ja spanneihin arvot
    answerShuffle(personInAllA, personsInAll, personInAllC, "verbalA", "verbalB", "verbalC");
    spanAmount("personsInFamily", "personsInFamilyTwo", personInFamilyRng, personsInFamilyTwoRng);

    //piiri valuet arvotaan ja spanneihin arvot
    answerShuffle(circlePerimeterA, circlePerimeter, circlePerimeterC, "circleA", "circleB", "circleC");
    document.getElementById("meters").innerHTML = metersRng;



}
// percent osion inputeista queryselectorit ja reagoimaan click , tekemään funtion percent asiat
let inputPercentA = document.getElementById("percentA");
inputPercentA.addEventListener("click", percent);

let inputPercentB = document.getElementById("percentB");
inputPercentB.addEventListener("click", percent);

let inputPercentC = document.getElementById("percentC");
inputPercentC.addEventListener("click", percent);
// funktio painettaessa vaihtaa inputtien bg värit, tarkistaa oliko oikeapainallus oikein , vaihtaa buttonien disabled trueksi ( ei voida painaa enää), lisää tehtävälaskuria 3sec painalluksesta ja vaihtaa uuden div näkyville ja kyseisen poissa 3sec päästä painalluksesta.
function percent(event) {
    answerColors(mathValues.saleamount, "percentA", "percentB", "percentC");
    document.getElementById("percentAnswerText").innerHTML = answerText(mathValues.saleamount, event.currentTarget.id, "mathPercent");
    buttonDisableEnable("percentA", "percentB", "percentC", true, true, true);
    setTimeout(function () { counter.innerHTML = taskCounter(1); }, 3000);
    timeOut("percenTask", "divideTask", 3000);


}
// Divide osion inputeista queryselectorit ja reagoimaan click , tekemään funtion divide asiat
let inputDivideA = document.getElementById("divideA");
inputDivideA.addEventListener("click", divide);

let inputDivideB = document.getElementById("divideB");
inputDivideB.addEventListener("click", divide);

let inputDivideC = document.getElementById("divideC");
inputDivideC.addEventListener("click", divide);

// funktio painettaessa vaihtaa inputtien bg värit, tarkistaa oliko oikeapainallus oikein , vaihtaa buttonien disabled trueksi ( ei voida painaa enää), lisää tehtävälaskuria 3sec painalluksesta ja vaihtaa uuden div näkyville ja kyseisen poissa 3sec päästä painalluksesta.
function divide(event) {

    answerColors(mathValues.hiredstudents, "divideA", "divideB", "divideC");
    document.getElementById("divideAnswerText").innerHTML = answerText(mathValues.hiredstudents, event.currentTarget.id, "mathDivide");
    buttonDisableEnable("divideA", "divideB", "divideC", true, true, true);
    timeOut("divideTask", "multiplicationTask", 3000);
    setTimeout(function () { counter.innerHTML = taskCounter(2); }, 3000);
}
// Multiplication osion inputeista queryselectorit ja reagoimaan click , tekemään funtion multiplication asiat
let inputMultiplicationA = document.getElementById("multiplicationA");
inputMultiplicationA.addEventListener("click", multiplication);

let inputMultiplicationB = document.getElementById("multiplicationB");
inputMultiplicationB.addEventListener("click", multiplication);

let inputMultiplicationC = document.getElementById("multiplicationC");
inputMultiplicationC.addEventListener("click", multiplication);

// funktio painettaessa vaihtaa inputtien bg värit, tarkistaa oliko oikeapainallus oikein , vaihtaa buttonien disabled trueksi ( ei voida painaa enää), lisää tehtävälaskuria 3sec painalluksesta ja vaihtaa uuden div näkyville ja kyseisen poissa 3sec päästä painalluksesta.
function multiplication(event) {
    answerColors(mathValues.multiplication, "multiplicationA", "multiplicationB", "multiplicationC");
    document.getElementById("multiplicationAnswerText").innerHTML = answerText(mathValues.multiplication, event.currentTarget.id, "mathMultiplication");
    buttonDisableEnable("multiplicationA", "multiplicationB", "multiplicationC", true, true, true);
    timeOut("multiplicationTask", "verbalTask", 3000);
    setTimeout(function () { counter.innerHTML = taskCounter(3); }, 3000);
}
// Verbal osion inputeista queryselectorit ja reagoimaan click , tekemään funtion verbal asiat
let inputVerbalA = document.getElementById("verbalA");
inputVerbalA.addEventListener("click", verbal);

let inputVerbalB = document.getElementById("verbalB");
inputVerbalB.addEventListener("click", verbal);

let inputVerbalC = document.getElementById("verbalC");
inputVerbalC.addEventListener("click", verbal);

// funktio painettaessa vaihtaa inputtien bg värit, tarkistaa oliko oikeapainallus oikein , vaihtaa buttonien disabled trueksi ( ei voida painaa enää), lisää tehtävälaskuria 3sec painalluksesta ja vaihtaa uuden div näkyville ja kyseisen poissa 3sec päästä painalluksesta.
function verbal(event) {
    answerColors(mathValues.persons, "verbalA", "verbalB", "verbalC");
    document.getElementById("verbalAnswerText").innerHTML = answerText(mathValues.persons, event.currentTarget.id, "mathVerbal");
    buttonDisableEnable("verbalA", "verbalB", "verbalC", true, true, true);
    timeOut("verbalTask", "circleTask", 3000);
    setTimeout(function () { counter.innerHTML = taskCounter(4); }, 3000);
}
// Circle osion inputeista queryselectorit ja reagoimaan click , tekemään funtion Circle asiat
let inputCircleA = document.getElementById("circleA");
inputCircleA.addEventListener("click", circle);

let inputCircleB = document.getElementById("circleB");
inputCircleB.addEventListener("click", circle);

let inputCircleC = document.getElementById("circleC");
inputCircleC.addEventListener("click", circle);

/* funktio painettaessa vaihtaa inputtien bg värit, tarkistaa oliko oikeapainallus oikein , vaihtaa buttonien disabled trueksi ( ei voida painaa enää),
 lisää tehtävälaskuria 3sec painalluksesta ja vaihtaa uuden div näkyville ja kyseisen poissa 13sec päästä painalluksesta. Tulee loading animaatio.
 samalla tarkistaa pisteet, antaa palkinto kuvan ja tekstin.
 */
function circle(event) {
    answerColors(mathValues.perimeter, "circleA", "circleB", "circleC");
    document.getElementById("circleAnswerText").innerHTML = answerText(mathValues.perimeter, event.currentTarget.id, "mathCircle");
    buttonDisableEnable("circleA", "circleB", "circleC", true, true, true);
    document.getElementById("correctAnswers").innerHTML = rightAnswers.length;
    rewardImg();
    timeOut("circleTask", "loading", 3000);
    timeOut("loading", "loppuArvio", 13000);


}







