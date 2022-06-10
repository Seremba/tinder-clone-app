import React from 'react'

const Chat = (descendingOrderMessages) => {
  return (
    <>
      <div className='chat-display'>
        {descendingOrderMessages.map((message, _index) => {
          <div key={_index}>
            <div className="chat-message-header">
              <div className="image-container">
                <img src={message.img} alt={`${message.first_name} profile`}/>
              </div>
              {message.name}
            </div>
            {message.message}
          </div>
        })}
      </div>
    </>
  )
}

export default Chat