import { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from '../components/ChatContainer'
import { useCookies} from 'react-cookie'
import axios from 'axios'

const Dashboard = () => {
  const [user, setUser] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

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
 
  useEffect(() => {
    getUser()
  }, [])
 
  console.log("user", user)
  const characters = [
    {
      name: 'Richard Hendricks',
      url: "http://afribeautycollective.com/wp-content/uploads/2019/03/ABC-32.jpg"
    },
    {
      name: 'Erlich Bachman',
      url: "http://afribeautycollective.com/wp-content/uploads/2019/03/ABC-32.jpg"
    },
    {
      name: 'Monica Hall',
      url: "http://afribeautycollective.com/wp-content/uploads/2019/03/ABC-32.jpg"
    },
    {
      name: 'Jared Dunn',
      url: "http://afribeautycollective.com/wp-content/uploads/2019/03/ABC-32.jpg"
    },
    {
      name: 'Dinesh Chugtai',
      url: "http://afribeautycollective.com/wp-content/uploads/2019/03/ABC-32.jpg"
    }
  ]
  
  const [lastDirection, setLastDirection] = useState()

  

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }


  return (
    <div className='dashboard'>
      <ChatContainer user={user}/>
      <div className="swipe-container">
        <div className="card-container">
        { characters.map((character) =>
              <TinderCard   
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                  <div
                      style={{backgroundImage: 'url(' + character.url + ')'}}
                      className="card"
                  >
                         <h3>{character.name}</h3>
                  </div>
              </TinderCard>
                        ) }
              <div className="swipe-info">
                {lastDirection ? <p>You swipped {lastDirection}</p> : <p/>}  
              </div>          
        </div>
      </div>
    </div>
  )
}

export default Dashboard