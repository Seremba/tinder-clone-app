import {useState} from 'react'
import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const authToken = false;
    const handleClick = () => {
        console.log("Clikced")
        setShowModal(true);
    }
  return (
      <div className='overlay'>
        <Nav minimal={false} authToken={authToken}/>
        <div className='home'>
            <h1>Swipe Right</h1>
            <button className='primary-button' onClick={handleClick}>{authToken ? "Signin": "Create Account"}</button>
        </div>

        { showModal && (
          <AuthModal setShowModal={setShowModal}/>
        )}
      </div>
  )
}

export default Home