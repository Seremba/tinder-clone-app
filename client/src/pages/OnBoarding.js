import { useState } from 'react'
import Nav from '../components/Nav'
import { useCookies} from 'react-cookie'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_identity: 'man',
    gender_interest: 'woman',
    url: '',
    about: '',
    matches: []
})

  let navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
     try {
       const response = await axios.put("http://localhost:8000/user", {formData})
       const success = response.status === 200;

       if(success) navigate('/dashboard')
     } catch (error) {
       
     }
  }

  const handleChange =(e) => {
    console.log("e", e)
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    const name = e.target.name
    console.log(value , name)

    setFormData((prevState) => ({
      ...prevState, 
      [name] : value
    }))
  }

  console.log(formData)
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
                value={formData.first_name}
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
                  value={formData.dob_day}
                  onChange={handleChange}
                />

                <input 
                  type="number"
                  id="dob_month"
                  name = "dob_month"
                  placeholder="MM"
                  required={true}
                  value={formData.dob_month}
                  onChange={handleChange}
                />

                <input 
                  type="number"
                  id="dob_year"
                  name = "dob_year"
                  placeholder="YYYY"
                  required={true}
                  value={formData.dob_year}
                  onChange={handleChange}
                />
              </div>

              <label>Gender</label>
              <div className="multiple-input-container">
                
              <input 
                  type="radio"
                  id="man-gender-identity"
                  name = "gender_identity"
                  value="man"
                  onChange={handleChange}
                  checked={formData.gender_identity === "man"}
                />
                <label htmlFor="man-gender-identity">Man</label>
                <input 
                  type="radio"
                  id="woman-gender-identity"
                  name = "gender_identity"
                  value="woman"
                  onChange={handleChange}
                  checked={formData.gender_identity === "woman"}
                />
                <label htmlFor="woman-gender-identity">Woman</label>
                <input 
                  type="radio"
                  id="more-gender-identity"
                  name = "gender_identity"
                  value="more"
                  onChange={handleChange}
                  checked={formData.gender_identity === "more"}
                />
                <label htmlFor="more-gender-identity">More</label>
              </div>
              {/* show gender  */}

                <label htmlFor="show-gender">show gender on my profile</label>
                    <input 
                        type="checkbox"
                        id="show-gender"
                        name = "show_gender"
                        onChange={handleChange}
                        checked={formData.show_gender}
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
                      checked={formData.gender_interest === "man"}
                    />
                    <label htmlFor="man-gender-interest">Man</label>
                    <input 
                      type="radio"
                      id="woman-gender-interest"
                      name = "gender_interest"
                      value="woman"
                      onChange={handleChange}
                      checked={formData.gender_interest === "woman"}
                    />
                    <label htmlFor="woman-gender-interest">Woman</label>
                    <input 
                      type="radio"
                      id="everyone-gender-interest"
                      name = "gender_interest"
                      value="everyone"
                      onChange={handleChange}
                      checked={formData.gender_interest === "everyone"}
                    />
                    <label htmlFor="everyone-gender-interest">Everyone</label>
                  </div>
                  

                  <label htmlFor="about">About Me</label>
                    <input 
                      type="text"
                      id="about"
                      name="about"
                      placeholder="I like long walks..."
                      value={formData.about}
                      onChange = {handleChange}
                      required={true}
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
                  {formData.url &&  <img src={formData.url} alt="profile picture review"/>}
                </div>
            </section>
        </form>
      </div>
    </>
  )
}

export default OnBoarding