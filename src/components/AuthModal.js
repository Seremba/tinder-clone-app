import React from 'react'

const AuthModal = ({setShowModal}) => {

    const handleClick = () => {
        setShowModal(false);
    }

  return (
    <div>
        <div onClick={handleClick}>x</div>
    </div>
  )
}

export default AuthModal