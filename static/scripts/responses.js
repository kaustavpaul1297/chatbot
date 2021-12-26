function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "hello" || input == "hi" || input == "Hi") {
    return "Namaste, Welcome to CGI 🙏";
  } else if (input == "bye" || input == "goodbye" || input == "Bye") {
    return "Bye, see you soon. 😄";
  } else {
    return "Sorry, Try asking something else!";
  }
}
