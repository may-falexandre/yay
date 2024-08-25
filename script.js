const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

const questions = [
    {
        "question": "Qual é a capital do Brasil?",
        "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
        "answer": "Brasília",
        "image": "https://th.bing.com/th/id/OSK.HEROzU5AIye63W0WlhhDtktc1YjrR0JHoi_BuGASqJneMUE?rs=1&pid=ImgDetMain"
    },
    {
        "question": "Qual o tamanho da minha pica?",
        "options": ["6 cm", "15 cm", "16 cm", "20 cm"],
        "answer": "6 cm"
    },
    {
        "question": "Maya, você é muito baitola!",
        "options": ["sim!"],
        "answer": "sim!",
        "image": "https://th.bing.com/th/id/OSK.HEROzU5AIye63W0WlhhDtktc1YjrR0JHoi_BuGASqJneMUE?rs=1&pid=ImgDetMain"
    },
    {
        "question": "eu amo abacaxi",
        "options": ["real"],
        "answer": "real"
    },
    {
        "question": "Que bom que sabe",
        "options": ["vai", "se", "fuder", ":)"],
        "answer": ":)",
        "image": "https://th.bing.com/th/id/OSK.HEROzU5AIye63W0WlhhDtktc1YjrR0JHoi_BuGASqJneMUE?rs=1&pid=ImgDetMain"
    }
];

let currentQuestionIndex = 0;
let acertos = 0;
let erros = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const questionImage = document.getElementById('question-image');
    questionImage.style.display = 'block';

    if (currentQuestion.image) {
        questionImage.src = currentQuestion.image;
    } else {
        questionImage.style.display = 'none';
    }

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        li.appendChild(button);
        optionsElement.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answer === currentQuestion.options[selectedIndex]) {
        acertos++;
        alert(`Resposta Correta! Acertos: ${acertos}`);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            const questionContainer = document.querySelector('.question-container');
            questionContainer.style.display = 'none';

            const gameOverElement = document.getElementById('game-over');
            gameOverElement.style.display = 'block';
            const h2Element = document.querySelector("#game-over h2");
            h2Element.textContent = `Você concluiu o quiz. Com ${acertos} acertos e ${erros} erros!`;
            const playAgainButton = document.getElementById('play-again-button');

            playAgainButton.addEventListener('click', () => {
                window.location.reload();
            });

        }
    } else {
        erros++;
        alert(`Resposta Errada! Erros: ${erros}`);
        displayQuestion();
    }
}

function hideBackground() {
    const body = document.body;

    body.style.animationName = "imgGone"
    body.style.animationDuration = "0.2s"
}


const welcomeScreen = document.getElementById('welcome-screen');
const questionContainer = document.querySelector('.question-container');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    hideBackground();
    welcomeScreen.style.display = 'none';
    questionContainer.style.display = 'block';
    displayQuestion();
});

questionContainer.style.display = 'none';