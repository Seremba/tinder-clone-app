import {useState} from 'react'


const AuthModal = ({setShowModal, isSignUp}) => {
  const [email, setEmail]       = useState(null);
  const [password, setPassword] = useState(null);
  const [comfirmPassword, setComfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  
    const handleClick = () => {
        setShowModal(false);
    }
    const handleSubmit =(e) => {
      e.preventDefault();
      try {
        if(isSignUp && (password !== comfirmPassword)){
          setError("passwords do not match");
        }
        console.log("make a post request to the DB")
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
              onChange ={(e) => setEmail(e.target.value)}
            />

            <input 
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange ={(e) => setPassword(e.target.value)}
            />

            {isSignUp && <input 
              type="password"
              id="password-check"
              name="password-check"
              placeholder="comfirmPassword"
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