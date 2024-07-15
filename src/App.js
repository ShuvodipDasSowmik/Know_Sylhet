import './PageStyle/UserStyle.css'
import './PageStyle/LoginStyle.css';

import Explore from './Components/Explore'
import Education from './Components/Education'

import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import React from 'react'
import { GoogleLogin, GoogleLogout } from '@leecheuk/react-google-login'
import { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { gapi } from 'gapi-script'
import TravelPost from './Components/TravelPost';

// const server = process.env.SERVER_ADDRESS
const clientId = "283295762667-464audjfu21d9arjng7pc49tjlo6jp1l.apps.googleusercontent.com"


let loggedIn = false; //Variable to decide if user is Signed in or not

// GOOGLE LOGIN FUNCTION

function GLogin() {

  const navigate = useNavigate();

  const onSuccess = (res) => {

    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const imageUrl = res.profileObj.imageUrl;

    console.log(imageUrl)

    // const user = new userModel({
    //   name: name,
    //   email: email,
    //   imageURL: img
    // })

    // const userData = user.save();
    // res.status(201).send(userData);

    // const [message, setMessage] = useState("");

    fetch("https://ksserver-production.up.railway.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, imageUrl })
    }).then((res) => res.json())
      .then((data) => console.log(data.message));

      console.log("Login = " + loggedIn)
    console.log("LOGIN Success: Current User: ", res.profileObj);
    loggedIn = true;
    navigate('/user')
    console.log("Login = " + loggedIn)

  }

  const onFailure = (res) => {
    console.log("LOGIN Failed! Res : ", res);
  }

  return (
    <>
      <link rel="stylesheet" href="LoginStyle.css" />

    <div id='signInButton'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        render={(renderProps) => (
          <button
            type="button"
            id="buttons"
            style={{ width: "280px", height: "40px", boxShadow: "5px 5px 2px black" }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle className="mr-4" /> Sign in with your Google
            Account
          </button>
        )}
      />
    </div>
    </>
  )
}

// LOGIN PAGE

const Login = () => {

  // connectDB();

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start)

  });


  return <div id="Page">
    <div id="Intro">
      <div id="description">
        <h2>Know Sylhet</h2>
        <div id="Underline" />
        <p>
          Connect with people in Sylhet
          <br></br>
          Learn Sylhet's history
          <br></br>
          Plan your visit in Sylhet
        </p>
      </div>
      <div id="GLogin">
        <GLogin />
        <section id="LoginText">Please Login to Continue</section>
      </div>
    </div>
    <footer><a>About Us</a></footer>
  </div>
}

// export{Login}

// GOOGLE LOGOUT FUNCTION


function LogOut() {      //React Component (LogOut) must start with an Uppercase letter

  const navigate = useNavigate();

  const onSuccess = () => {
    console.log("Login = " + loggedIn)

    console.log("Log Out Succesfull")
    loggedIn = false;
    console.log("Login = " + loggedIn);
    navigate("/")
  }

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        isSignedIn={false}
      />
    </div>
  )
}

// USER PROFILE / HOMEPAGE

const User = () => {

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  });

  return <div>
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="UserStyle.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/*  */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <header>
        <div id="navbar">
          <nav>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
              <i className="fas fa-bars" />
            </label>
            <label className="logo">Know Sylhet</label>
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/explore">Explore Sylhet</a>
              </li>
              <li>
                <a href="/edu">Education</a>
              </li>
              <li>
                <a href="/tragedies">Tragedies</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <LogOut />
      </main>
      {/* <div class="loder1"></div> */}
      {/* <br><br>
     <br><br>
    <div class="loder">
<p style="color: cadetblue;">Sylhet</p>
    </div> */}
      <footer>
        <div className="footer">
          <div className="content">
            <h1 style={{ color: "#482728" }}>Contact us</h1>
            <p>Email: royccsgopal49@gmail.com</p>
            <p>Mobile: 01854411356</p>
            <p>Address: AhasanUllah Hall BUET</p>
          </div>
          <div className="content">
            <h1 style={{ color: "#2E6171" }}>Follow US</h1>
            <li id="logo">
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
            <li id="logo">
              <a href="#">
                <i className="fa-brands fa-whatsapp" />
              </a>
            </li>
            <li id="logo">
              <a href="#">
                <i className="fa-brands fa-linkedin" />
              </a>
            </li>
          </div>
        </div>
        <div className="bottom">© 2024 Your company.All Right Reserved.</div>
      </footer>
    </>
  </div>
}

export default User


// COMPONENT FOR PROTECTED ROUTING

const Protected = ({loggedIn, children }) => {
  // const location = useLocation()

  if (loggedIn === false)
    return <Navigate to="/" replace/>
  else
    return children
}


// ROUTER AND MAIN APP FUNCTION


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<Protected>
          <User />
        </Protected>} />
        <Route path = "/explore" element = {<Explore />}/> 
        <Route path = "/travelpost" element = {<TravelPost />}/> 
        <Route path = '/edu' element = {<Education/>} />
      </Routes>
    </BrowserRouter>
  );
}

export { App }