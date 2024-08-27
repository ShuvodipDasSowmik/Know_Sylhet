// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
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
        navigate('/tragedies')
    }

    return (
      <div style={{backgroundColor: "#fffeef"}}>
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
  <Navigation/>
  
  <section className="Formcontainer">
    <div>
      <h1 style={{ textAlign: "center"}}>Share Info about the Disaster</h1>
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
          <textarea type="text" cols={55} rows={10} placeholder="Description of Event" name="evenDescription" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}/>
        </div>
        <input type="submit" value="Submit" className="button"/>
      </form>
    </div>
  </section>
  
  <Footer />
</div>

    );
}

export default TragedyPost;