// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

// const server = process.env.SERVER_ADDRESS


function EduPost() {

  const navigate = useNavigate()

  const [institute, setInstitute] = useState("")
  const [eduDescription, setEduDescription] = useState("")
  const [imageLink, setImageLink] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://ksserver-production.up.railway.app/edu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ institute, eduDescription, imageLink, location })
    }).then((res) => res.json())
      .then((data) => console.log(data.message));
    navigate('/explore')
  }

  return (
    <div style={{ backgroundColor: "#fffeef" }}>
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
      <Navigation />

      <section className="Formcontainer">
        <div>
          <h1 style={{ textAlign: "center" }}>Share Your Tour Experience</h1>
          <br></br>
          <form onSubmit={handleSubmit} className="form">
            <div className="input">
              <h3>Institution</h3>
              <input type="text" placeholder="Name of Instituition" name="institute" value={institute} onChange={(e) => setInstitute(e.target.value)} />
            </div>
            <div className="input">
              <h3>Location</h3>
              <input type="text" placeholder="Location of your Institute" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="input">
              <h3>Description</h3>
              <textarea
                cols={50}
                rows={10}
                placeholder="Enter Description about your Institute" name="eduDescription" value={eduDescription} onChange={(e) => setEduDescription(e.target.value)} />
            </div>
            <div className="input">
              <h3>Image Link</h3>
              <input type="text" placeholder="Image Link of your Institute" name="imageLink" value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
            </div>
            <input type="submit" value="Submit" className="button" />
          </form>
        </div>
      </section>

      <Footer />
    </div>

  );
}

export default EduPost;