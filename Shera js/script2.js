document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.textContent = message;
        
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        input.value = '';
        
        // This is a simulated response
        setTimeout(() => {
            const responseElement = document.createElement('div');
            responseElement.classList.add('message', 'other');
            responseElement.textContent = "This is a simulated response.";
            
            chatBox.appendChild(responseElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}
