import React from 'react'
import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'
import ChatDisplay from './ChatDisplay'

const ChatContainer = () => {
  return (
    <div className='chat-container'>

        <ChatHeader />

        <div>
          <button className="options">Matches</button>
          <button className="options">Chat</button>
        </div>
          
        <MatchesDisplay />
        
        <ChatDisplay />
    </div>
  )
}

export default ChatContainer;