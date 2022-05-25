import { useState } from 'react'
import Nav from '../components/Nav'

const OnBoarding = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited")
  }

  const handleChange =() => {
    console.log("ookay done")
  }
  return (
    <>
      <Nav
          minimal={true}
          setShowModal ={()=> {}}
          showModal={false} 
      />
      <div className='onboarding'>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
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
                <div className="multiple-input-container">
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
              </div>

              <label>Gender</label>
              <div className="multiple-input-containe">
                
              <input 
                  type="radio"
                  id="man-gender-identity"
                  name = "gender_identity"
                  value="man"
                  onChange={handleChange}
                  checked={false}
                />
                <label htmlFor="man-gender-identity">Man</label>
                <input 
                  type="radio"
                  id="woman-gender-identity"
                  name = "gender_identity"
                  value="woman"
                  onChange={handleChange}
                  checked={false}
                />
                <label htmlFor="woman-gender-identity">Woman</label>
                <input 
                  type="radio"
                  id="more-gender-identity"
                  name = "gender_identity"
                  value="more"
                  onChange={handleChange}
                  checked={false}
                />
                <label htmlFor="More-gender-identity">More</label>
              </div>
              <label htmlFor="show-gender">show gender on my profile</label>
              <input 
                  type="checkbox"
                  id="show-gender"
                  name = "show-gender"
                  value={""}
                  onChange={handleChange}
                  checked={false}
                />
              {/* gender interest  */}
                <label>Show Me</label>
                  <div className="multiple-input-container">
                    <input 
                      type="radio"
                      id="man-gender-interest"
                      name = "gender_interest"
                      value="man"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="man-gender-interest">Man</label>
                    <input 
                      type="radio"
                      id="woman-gender-interest"
                      name = "gender_interest"
                      value="woman"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="woman-gender-interest">Woman</label>
                    <input 
                      type="radio"
                      id="everyone-gender-interest "
                      name = "gender_interest"
                      value="everyone"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="more-gender-interest">Everyone</label>
                  </div>
                  {/* about section  */}

                  <label htmlFor="about">About Me</label>
                  <input 
                   id="about"
                   type="text"
                   name=" about"
                   placeholder='I like long walks...'
                   value=""
                   onChange = {handleChange}
                  />

                  <input type="submit" />
            </section>

            <section>
              <label htmlFor="about">Upload Photo</label>
                <input 
                  type="url"
                  name="url"
                  id="url"
                  onChange={handleChange}
                  required={true}
                 />
                <div className="photo-container">

                </div>
            </section>
        </form>
      </div>
    </>
  )
}

export default OnBoarding