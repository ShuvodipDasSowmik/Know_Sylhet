// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
// const server = process.env.SERVER_ADDRESS


function TravelPost() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [imageLink, setImageLink] = useState("")
  const [howToReach, setHowToReach] = useState("")
  const [whatToSee, setWhatToSee] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://ksserver-production.up.railway.app/travel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, desc, imageLink, howToReach, whatToSee })
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
              <h3>Title</h3>
              <input type="text" placeholder="Enter the title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input">
              <h3>Description</h3>
              <input type="text" placeholder="Enter the Description" name="cardDescription" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className="input">
              <h3>Image Link</h3>
              <input type="text" placeholder="Enter the Image Link" name="imageLink" value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
            </div>
            <div className="input">
              <h3>How to Reach</h3>
              <p>
                <textarea
                  id="address"
                  cols={50}
                  rows={10}
                  placeholder="How to Reach"
                  name="howToReach" value={howToReach} onChange={(e) => setHowToReach(e.target.value)}
                />
              </p>
            </div>
            <div className="input">
              <h3>What to See</h3>
              <input type="text" placeholder="What to See" name="whatToSee" value={whatToSee} onChange={(e) => setWhatToSee(e.target.value)} />
            </div>
            <input type="submit" value="Submit" className="button" />
          </form>
        </div>
      </section>

      <Footer />
    </div>

  );
}

export default TravelPost;

// <form onSubmit={handleSubmit}>
//     <label>
//         Title:
//         <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//     </label>
//     <br></br>
//     <label>
//         Description:
//         <input type="text" name="cardDescription" value={desc} onChange={(e) => setDesc(e.target.value)} />
//     </label>
//     <br></br>
//     <label>
//         Image Link:
//         <input type="text" name="imageLink" value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
//     </label>
//     <br></br>
//     <label>
//         How To Reach:
//         <input type="text" name="howToReach" value={howToReach} onChange={(e) => setHowToReach(e.target.value)} />
//     </label>
//     <br></br>
//     <label>
//         What To See:
//         <input type="text" name="whatToSee" value={whatToSee} onChange={(e) => setWhatToSee(e.target.value)} />
//     </label>
//     <br></br>
//     <input type="submit" value="Submit" />
// </form>