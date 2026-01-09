function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Feedback element
    const feedback = document.getElementById("feedback");

    // If no option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    // User's answer
    const userAnswer = selectedOption.value;

    // Compare answers
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
