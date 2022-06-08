import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import ChatInput from './ChatInput'
import axios from 'axios'

const ChatDisplay = ({user, clickedUser}) => {
  const [usersMessages, setUsersMessages] = useState(null)
  const [clickedUsersMessages, setClickedUsersMessages] = useState(null)
  const userId = user?.user_id
  const clickedUserId = clickedUser?.user_id 

  const getMessages = async (senderId, recipientId) => {
      try {
        const response = await axios.get('http://localhost:8000/messages', {
        params: {userId: senderId, correspondingUserId: recipientId}
      })

       return response.data
      } catch (error) {
        console.log(error)
      }
  }

 useEffect(() => {
  setUsersMessages(getMessages(userId, clickedUserId))
  setClickedUsersMessages(getMessages(clickedUserId, userId))
 }, [usersMessages, clickedUsersMessages])

 console.log(usersMessages)

  return (
    <>
      <Chat />
      <ChatInput />
    </>
  )
}

export default ChatDisplay