import { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from '../components/ChatContainer'
import { useCookies} from 'react-cookie'
import axios from 'axios'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [genderedUsers, setGenderedUsers] = useState(null)
  const [lastDirection, setLastDirection] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(["user"])

  const userId = cookies.UserId

  const getUser = async () => {

    try {

      const response = await axios.get('http://localhost:8000/user', {
        params: {userId}
      })

      setUser(response.data)

    } catch(err){

      console.log(err)
      
    }
  }

  const getGenderedUser = async () =>{
    
    try {
      const response =  await axios.get('http://localhost:8000/gendered-users', {
        params: {gender: user?.gender_interest}
      })

      setGenderedUsers(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(() => {
    getUser()
    getGenderedUser()
  }, [user, genderedUsers])


  
  
const updateMatches = async (matchedUserId) => {
  try {
    await axios.put('http://localhost:8000/addmatch', {
        userId, 
        matchedUserId
    })
    getUser()
  } catch (error) {
    console.log(error)
  }
}
  console.log(user)

  const swiped = (direction, swipedUserId) => {
    if( direction === 'right'){
      updateMatches(swipedUserId)
    }
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId)

  const filteredGenderedUsers = genderedUsers?.filter(genderedUser => !matchedUserIds.includes(genderedUser.user_id))

  return (
    <>
    {user && <div className='dashboard'>
      <ChatContainer user={user}/>
      <div className="swipe-container">
        <div className="card-container">
        { filteredGenderedUsers?.map((genderedUser) =>
              <TinderCard   
                className="swipe"
                key={genderedUser.first_name}
                onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
              >
                  <div
                      style={{backgroundImage: 'url(' + genderedUser.url + ')'}}
                      className="card"
                  >
                         <h3>{genderedUser.first_name}</h3>
                  </div>
              </TinderCard>
                        ) }
              <div className="swipe-info">
                {lastDirection ? <p>You swipped {lastDirection}</p> : <p/>}  
              </div>          
        </div>
      </div>
    </div>}
  </>
  )
}

export default Dashboard