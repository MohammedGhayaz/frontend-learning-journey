import { useState,useEffect } from 'react';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [isToggleView, setToggleView] = useState(() => {
    const saved = localStorage.getItem('toggleView');
    return saved === 'true'
  });

  useEffect(() => {
    localStorage.setItem('toggleView', isToggleView);

    const container = document.querySelector('#root');
    container.style.flexDirection = isToggleView ? 'column' : 'column-reverse';
  }, [isToggleView])

  return (
    <>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      {chatMessages.length == 0 ?
        <div
          className="default-message">
          Welcome to Chatbot Project. Send a message using the textbox
        </div> :
        ''
      }
      <ChatMessages
        chatMessages={chatMessages}
      />
      <div
        className="toggle-view"
        onClick={() => {
          setToggleView(prev => !prev);
        }}>
        Move Textbox to bottom
      </div>

    </>
  )
}


export default App
