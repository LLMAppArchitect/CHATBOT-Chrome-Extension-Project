const messages = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function addMessage(text, sender) {
    const message = document.createElement("div");
    message.className = sender;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {

    const userInputText = userInput.value.trim();

    if (userInputText === 'csdn') {
        addMessage(userInputText, "user");
        addMessage("Open CSDN", "chatbot");
        window.open('https://blog.csdn.net/universsky2015');
    }

    if (userInputText === 'weibo') {
        addMessage(userInputText, "user");
        addMessage("Open weibo", "chatbot");
        window.open('https://weibo.com/');
    }

}

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});