import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages);
  return (

    <div
      ref={chatMessagesRef}
      className="chat-messages">
      {chatMessages.map(chatMessage =>
      (
        <ChatMessage
          sender={chatMessage.sender}
          message={chatMessage.message}
          key={crypto.randomUUID()}
        />
      )
      )}
    </div>
  )
}

function useAutoScroll(dependencies) {
  const chatMessagesRef =useRef(null)

  useEffect(() => {
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }, [dependencies])

  return chatMessagesRef;
}

export default ChatMessages;