function getRndInteger(min, max) {// random number generaattori
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

let buttonStart=document.querySelector("#startButton");

buttonStart.addEventListener("click",start)


function start() {

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

    rightAnswers=[];
    wrongAnswers=[];

    document.getElementById("percenTask").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("loppuArvio").style.display="none";

    document.getElementById("imgRewardHere").innerHTML="";

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

    buttonDisableEnable("percentA","percentB","percentC",false,false,false);
    buttonDisableEnable("divideA","divideB","divideC",false,false,false);
    buttonDisableEnable("multiplicationA","multiplicationB","multiplicationC",false,false,false);
    buttonDisableEnable("verbalA","verbalB","verbalC",false,false,false);
    buttonDisableEnable("circleA","circleB","circleC",false,false,false);





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