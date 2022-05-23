import React from 'react'
import whiteLogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color-logo-tinder.png'

const Nav = ({minimal, authToken}) => {

  return (
    <nav >
      <div className="logo-container">
        <img 
          className='logo' 
          src={minimal? colorLogo : whiteLogo }
          alt=""
         />
      </div>
      {!authToken && !minimal && <button className='nav-button'>Log In</button>}
    </nav>
  )
}

export default Nav