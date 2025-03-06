// test.js (corrected and verified)
async function sendMessage() {
    const userInput = document.querySelector('.search')
    const responseDiv = document.getElementById('response');
    const button = document.querySelector('.chatbot-send-btn');

    // Clear previous messages
    responseDiv.innerHTML = '';

    let messages = [];
    button.addEventListener('click', () => {
        const userMessage = userInput.value;
        messages.push({ user: userMessage });
        const chatbotResponse = getChatbotResponse(userMessage);
        messages.push({ chatbot: chatbotResponse });
        updateConversation();
        userInput.value = '';
    });
    function getChatbotResponse(message) {
        const responses = [
            'Hello! How can I assist you today?',
            'I\'m happy to help you with that.',
            'Can you please provide more information?',
            'I\'m not sure I understand. Can you rephrase?'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    function updateConversation() {
        responseDiv.innerHTML = '';
        const fragment = document.createDocumentFragment();
        messages.forEach((message, index) => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chatbot-message';
            if (message.user) {
                messageDiv.innerHTML = `<span></span> ${message.user}`;
            } else {
                messageDiv.innerHTML = `<span>Chatbot:</span> ${message.chatbot}`;
            }
            fragment.appendChild(messageDiv);
        });
        responseDiv.appendChild(fragment);
    }
}
