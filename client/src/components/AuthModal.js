import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const AuthModal = ({setShowModal, isSignUp}) => {
  const [email, setEmail]       = useState(null);
  const [password, setPassword] = useState(null);
  const [comfirmPassword, setComfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  
    const handleClick = () => {
        setShowModal(false);
    }
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log("submiting")
      try {
        if(isSignUp && (password !== comfirmPassword)){
          setError("passwords do not match");
          return
        }
        // console.log("make a post request to the DB")
          const response =  await axios.post('http://localhost:8000/signup', {email, password})

          // on successful login 
          const success = response.status === 201;
          if(success) navigate('/onboarding');

      } catch(error) {
        console.log(error.message);
      }
    }

  
  return (
    <div className='auth-modal'>
        <div className='close-icon' onClick={handleClick}>x</div>
        <h2>{isSignUp? "CREATE ACCOUNT": "SIGN UP"}</h2>
        <p>By clicking Login you agree to our terms of use and user agreement</p>
        <form onSubmit={handleSubmit}>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required={true}
              onChange ={(e) => setEmail(e.target.value)}
            />

            <input 
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required={true}
              onChange ={(e) => setPassword(e.target.value)}
            />

            {isSignUp && <input 
              type="password"
              id="password-check"
              name="password-check"
              placeholder="comfirmPassword"
              required={true}
              onChange ={(e) => setComfirmPassword(e.target.value)}
            />}
            <input className='secondary-button' type="submit"/>
            <p>{error}</p>
        </form>
        <p>GET THE APP</p>
    </div>
  )
}

export default AuthModal