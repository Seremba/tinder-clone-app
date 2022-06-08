import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'
import ChatDisplay from './ChatDisplay'

const ChatContainer = ({user}) => {
  const [clickedUser, setClickedUser] = useState(null);
  return (
    <div className='chat-container'>

        <ChatHeader user={user} />

        <div>
          <button className="options" onClick={()=> setClickedUser(null)}>Matches</button>
          <button className="options" disabled={!clickedUser}>Chat</button>
        </div>
          
        {!clickedUser && <MatchesDisplay matches={user.matches}  setClickedUser={setClickedUser}/>}
        
       {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  )
}

export default ChatContainer;