document.addEventListener("DOMContentLoaded", function() {
    const stepHeaders = document.querySelectorAll("main section h2");

    stepHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });

    const quizData = [
        {
            question: "What is the first step in solving the Rubik's Cube?",
            answers: ["Solve the white cross", "Solve the yellow cross", "Solve the middle layer"],
            correct: "Solve the white cross"
        },
        {
            question: "What is the second step in solving the Rubik's Cube?",
            answers: ["Solve the yellow corners", "Solve the white corners", "Solve the middle layer"],
            correct: "Solve the white corners"
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    quizData.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        
        q.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('quiz-answer');
            answerElement.innerHTML = `
                <input type="radio" name="question${index}" value="${answer}"> ${answer}
            `;
            questionElement.appendChild(answerElement);
        });

        quizContainer.appendChild(questionElement);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    quizContainer.appendChild(submitButton);

    submitButton.addEventListener('click', () => {
        let score = 0;
        quizData.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            if (selected && selected.value === q.correct) {
                score++;
            }
        });

        alert(`You scored ${score} out of ${quizData.length}`);
    });
});