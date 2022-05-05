//Miisa Sammalkangas

let quizData = [
    {
    question: "Testataan perinteisiä yhteenlaskutaitoja! Laske allaolevat yhteenlaskut ja valitse vaihtoehdoista oikeat tulokset! 1+9, 12+3 ja 34+6",
       a: "10, 15, 35",
       b: "9, 14, 40",
       c: "10, 15, 40",
    correctAnswer: "c",
},
    {
    question: "Lasketaan montako banaania on enemmän kuin omenoita. Villellä on 9 banaania ja 3 omenaa. Annilla on 5 banaania ja 6 omenaa. Montako banaania on enemmän kuin omenoita?!",
       a: "Banaaneita on vähemmän kuin omenoita",
       b: "5 banaania enemmän",
       c: "8 banaania enemmän",
    correctAnswer: "b",
},
    {
    question: "Kokeillaan seuraavaksi vähennyslaskuja! Laske seuraavat vähennyslaskut ja valitse vaihtoehdoista oikeat luvut. 7-3, 15-8, 9-4",
      a: "10, 23, 13",
      b:  "4, 7, 5",
      c:  "4, 5, 5",
    correctAnswer: "b",
},
    {
    question: "Miten onnistuisi vähennys- ja yhteenlasku samassa laskussa? Laske seuraavat laskut ja valitse vaihtoehdoista oikea vastaus. 5+3+7-10, 6-3+5-2, 9-6-3+5",
       a: "5, 6, 5",
       b: "6, 4, 10",
       c: "4, 5, 7",
    correctAnswer: "a",
},
    {
    question: "Kokeillaan vielä reilusti vaikeampia laskuja! Tehtävänä on selvittää, montako omenaa ja banaania Mikolla on vaihtokauppojen jälkeen. Mikolla on itsellään 4banaania ja 2 omenaa. Hän antaa Lauralle 2 banaania ja saa itselleen 1 omenan lisää. Antille Mikko antaa yhden omenan ja saa yhden banaanin itselleen. Veikolle Mikko antaa yhden omenan ja saa 4 banaania itselleen. Montako banaania ja omenaa Mikolla on nyt? ",
       a: "7 banaania, 1 omena",
       b: "1 banaani, 7 omenaa",
       c: "4 banaania, 3 omenaa",
    correctAnswer: "a",
}];


/* Haetaan html:stä tiedot kysmyslaatikoihin */

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

/* Laskee testin tuloksen */

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correctAnswer) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Sait ratkaistua ${score}/${quizData.length} pulmista oikein!</h2>
           <button onclick="location.reload()">Aloita alusta</button>
           `
       }
    }
})

/* Mallia tähän otettu:
https://www.sitepoint.com/simple-javascript-quiz/*/
