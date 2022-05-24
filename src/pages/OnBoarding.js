import { useState } from 'react'
import Nav from '../components/Nav'

const OnBoarding = () => {
  return (
    <>
      <Nav
          minimal={true}
          setShowModal ={()=> {}}
          showModal={false} 
      />
      <div className='onboarding'>
        <h2>Create Account</h2>
        <form>
            <section>
              <label htmlFor="first_name">First Name</label>
              <input 
                type="text"
                id="first_name"
                name = "first_name"
                placeholder="first name"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <label >Birthday</label>
              <input 
                type="number"
                id="dob_day"
                name = "dob_day"
                placeholder="DD"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <input 
                type="number"
                id="dob_month"
                name = "dob_month"
                placeholder="MM"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <input 
                type="number"
                id="dob_year"
                name = "dob_year"
                placeholder="YYYY"
                required={true}
                value={""}
                onChange={handleChange}
              />
              
              <label>Gender</label>
              <input 
                type="number"
                id="dob_day"
                name = "dob_day"
                placeholder="DD"
                required={true}
                value={""}
                onChange={handleChange}
              />
            </section>
        </form>
      </div>
    </>
  )
}

export default OnBoarding