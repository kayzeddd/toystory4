// write your JavaScript here

const userTextInput = document.querySelector(".userTextInput");
const rateBtn = document.querySelector(".rateBtn");
const userComments = document.querySelector(".comment-div");

rateBtn.addEventListener("click", addComment);

function addComment() {
  let userInput = userTextInput.textContent;
  if (userInput !== "") {
    let commentDiv = document.createElement("div");
    commentDiv.textContent = userInput;
    userComments.appendChild(commentDiv);
  }
}
