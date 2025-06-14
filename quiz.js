// Define the checkAnswer function
function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if the user selected an answer
    if (userAnswer) {

        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").innerHTML = "Correct! Well done!";
        } else {
            document.getElementById("feedback").innerHTML = "That's incorrect. Try again.";
        }
    } else {
        document.getElementById("feedback").innerHTML = "Please select an answer!";
    }

    // Disable the submit button after the first click
    document.getElementById("submit-answer").disabled = true;
}

// Select the "Submit Answer" button and add the click event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
