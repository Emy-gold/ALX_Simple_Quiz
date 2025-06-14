// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4"; // The correct answer to the quiz question

    // Step 3: Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Select the checked radio button

    if (userAnswer) {  // Check if any radio button is selected
        // Step 4: Compare the User’s Answer with the Correct Answer
        if (userAnswer.value === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done."; // User's answer is correct
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again."; // User's answer is incorrect
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer!"; // No answer selected
    }
}

// Step 5: Add Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
