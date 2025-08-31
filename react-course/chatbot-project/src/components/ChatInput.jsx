import { Chatbot } from 'supersimpledev'
import { useState } from "react";
import './ChatInput.css'

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputValue, setInputValue] = useState('');


  function saveInputValue(e) {
    setInputValue(e.target.value);
  }

  function sendMessage() {
    if (!inputValue) {
      return (
        alert('Enter a message')
      )
    }
    setInputValue('');



    const chatbotMessage = Chatbot.getResponse(inputValue);
    setChatMessages([
      ...chatMessages,
      {
        sender: 'user',
        message: inputValue,
        key: crypto.randomUUID()
      },
      {
        sender: 'robot',
        message: chatbotMessage,
        key: crypto.randomUUID()
      }
    ]);

  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }


  return (
    <div className="input-container">
      <input
        className="text-input"
        value={inputValue}
        onChange={saveInputValue}
        onKeyDown={handleEnter}
        placeholder="Send a message to Chatbot"
        size="55"
      />
      <button
        onClick={sendMessage}
        className="input-button"
      > Send
      </button>
    </div>
  );
}

export default ChatInput;