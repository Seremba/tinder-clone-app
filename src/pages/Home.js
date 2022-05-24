import {useState} from 'react'
import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);

    const authToken = false;
    const handleClick = () => {
        console.log("Clikced")
        setShowModal(true);
        setIsSignUp(true);
    }
  return (
      <div className='overlay'>
        <Nav 
        minimal={false} 
        authToken={authToken} 
        setShowModal={setShowModal} 
        showModal={showModal}
        setIsSignUp={setIsSignUp}
        />
        <div className='home'>
            <h1 className='primary-title'>Swipe Right</h1>
            <button className='primary-button' onClick={handleClick}>{authToken ? "Signin": "Create Account"}</button>
        </div>

        { showModal && (
          <AuthModal 
            setShowModal={setShowModal} 
            isSignUp={isSignUp}
          />
        )}
      </div>
  )
}

export default Home