// import axios from "axios";
import { useState } from "react";
import '../PageStyle/TravelPostStyle.css'
import { useNavigate } from "react-router-dom";

// const server = process.env.SERVER_ADDRESS


function TragedyPost() {

    const navigate = useNavigate()

    const [disaster, setDisaster] = useState("")
    const [date, setDate] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [eventDescription, setEventDescription] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://ksserver-production.up.railway.app/tragedy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ disaster, date, imageLink, eventDescription })
        }).then((res) => res.json())
            .then((data) => console.log(data.message));
        navigate('/tragedy')
    }

    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>form</title>
  <link rel="stylesheet" href="TravelPostStyle.css" />
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
        <label className="logo">Sylhet</label>
        <ul>
          <li>
            <a href="/user">
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
  {/* <div class="loder1"></div> */}
  {/* <br><br>
 <br><br>
<div class="loder">
  <p style="color: cadetblue;">Sylhet</p>
</div> */}
  <section className="Formcontainer">
    <div>
      <h1 style={{ textAlign: "center", color: "#3a4634" }}>Share Your Tour Experience</h1>
      <br></br>
      <form  onSubmit={handleSubmit} className="form">
        <div className="input">
          <h3>Disaster</h3>
          <input type="text" placeholder="Name of Disaster" name="disaster" value={disaster} onChange={(e) => setDisaster(e.target.value)}/>
        </div>
        <div className="input">
          <h3>Date</h3>
          <input type="text" placeholder="Date of Event" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className="input">
          <h3>Image Link</h3>
          <input type="text" placeholder="Image Link of the disaster" name="imageLink" value={imageLink} onChange={(e) => setImageLink(e.target.value)}/>
        </div>
        <div className="input">
          <h3>Description</h3>
          <input type="text" placeholder="Description of Event" name="evenDescription" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}/>
        </div>
        <input type="submit" value="Submit" className="button"/>
      </form>
    </div>
  </section>
  <footer>
    <div className="footer">
      <div className="content">
        <h1 style={{ color: "#482728" }}>Contact us</h1>
        <p>Email: royccsgopal49@gmail.com</p>
        <p>Mobile: 01854411356</p>
        <p>Address: AhasanUllah Hall BUET</p>
      </div>
      <div className="content">
        <h1 style={{ color: "#2e6171" }}>Follow US</h1>
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

    );
}

export default TragedyPost;