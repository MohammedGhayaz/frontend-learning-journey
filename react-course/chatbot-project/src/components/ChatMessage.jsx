import './ChatMessage.css'
import userProfile from '../assets/user.png'
import robotProfile from '../assets/robot.png'

function ChatMessage({ sender, message }) {
  return (
    <div className={sender === 'robot' ? 'robot-message' : 'user-message'}>
      {sender === 'robot' &&
        (
          <img src={robotProfile} width="60" />
        )}
      <div className="chat-message"> {message} </div>
      {sender === 'user' &&
        (
          <img src={userProfile} width="60" />
        )}
    </div>
  )
}

export default ChatMessage;