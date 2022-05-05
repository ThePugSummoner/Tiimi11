const quizData = [
    {
        question: "Minä vuonna Suomi itsenäistyi?",
        a: "1917",
        b: "1995",
        c: "1817",
        d: "1642",
        correct: "a",
    },
    {
        question: "Mitä seuraavista pidettiin pyhänä eläimenä Egyptissä?",
        a: "Lehmää",
        b: "Kissaa",
        c: "Koiraa",
        d: "Kamelia",
        correct: "b",
    },
    {
        question: "Kuka oli Suomen ensimmäinen presidentti?",
        a: "Sauli Niinistö",
        b: "Kaarlo Juho Ståhlberg",
        c: "Tarja Halonen",
        d: "Mauno Koivisto",
        correct: "b",
    },
    {
        question: "Miksi kutsutaan Euroopassa keski-ajalla riehunutta kulkutautia?",
        a: "Keltakuume",
        b: "Mustasurma",
        c: "Tappotauti",
        d: "Kuolonkorjuu",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
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
    d_text.innerText = currentQuizData.d
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


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Sait kysymyksistä ${score}/${quizData.length} oikein!</h2>

           <button onclick="location.reload()">Aloita alusta</button>
           `
       }
    }
})