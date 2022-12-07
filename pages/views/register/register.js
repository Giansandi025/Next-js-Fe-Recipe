import React from 'react'
import axios from "axios"
import Link from "next/link"

const register = () => {
  return (
    <>
    
    <section>
        <div className="containerAction">
          <div className="containerLogo">
            <img src="/" alt="Mama Recipe" className="logo" />
            <h5 className="textLogo">Mama Recipe.</h5>
          </div>
          <div className="container">
            <Link to="/">
              <h2>Let’s Get Started !</h2>
            </Link>
            <h4 className="style txtCenter">Create new account to access all features</h4>
            <form  action="register" className={style.formAuth}>
              <div className="Form">
                <label for="name" className={style.inputForm}>
                  Name
                </label>
                <input type="text" id="name" for="name" name="name" className={style.inputText} placeholder="Name" required />

                <label for="email" className={style.inputForm}>
                  Email Address
                </label>
                <input  type="text" id="email" for="email" name="email" className="style.inputText" placeholder="Enter email address" required />

                <label for="phone" className={style.inputForm}>
                  Phone Number
                </label>
                <input id="phone" for="phone" name="phone" className="style.inputText" placeholder="08xxxxxxxxxx" required />

                <label for="password" className={style.inputForm}>
                  Create New Password
                </label>
                <input type="password" for="password" id="password" name="password" className="inputText" placeholder="Create New Password" required />

                <label for="password" className={style.inputForm}>
                  Confirm New Password
                </label>
                <input  type="password" id="password" for="newpassword" name="password" className="inputText" placeholder="New Password" required />

                <div className="style.checkbox">
                  <input type="checkbox" id="agree" name="agree" className="Checkbox" required />
                  <label for="agree">I agree to terms & conditions</label>
                </div>

                <input type="submit" value="Register Account" className="submit" />
              </div>
            </form>

            <p>
              Already have account?{' '}
              <Link to="/login">
                <a className="style.register">Log in Here</a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default register