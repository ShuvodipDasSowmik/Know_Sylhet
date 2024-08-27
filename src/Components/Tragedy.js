// EXPLORE SYLHET
import '../PageStyle/ExploreStyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Footer from './Footer'

// const server = process.env.SERVER_ADDRESS

function Tragedies() {

    const hash = "#"
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios.get("https://ksserver-production.up.railway.app/tragedy")
            .then(queries => {
                setQueries(queries.data)
                // console.log(queries.data);
            })
            .catch(err => console.log(err))
    }, [])

    const blogCards = queries.map((item) => {
        console.log(item);

        return (
            <article className="card__article">
                <img src={item.imageLink} alt="image" className="card__img" />
                <div className="card__data">
                    <span className="card__description">{item.date}</span>
                    <h2 className="card__title">{item.disaster}</h2>
                    <a href={hash.concat(item._id)} className="card__button">
                        Read More
                    </a>
                </div>
            </article>
        )
    })

    const postParagraph = queries.map((item) => {
        return (
            <div className='mainDiv' id={item._id}>
                <h2>{item.disaster}</h2>
                <hr></hr>
                <h3>Date</h3>
                <p>{item.date}</p>
                <h3>Description</h3>
                <p>{item.eventDescription}</p>
                <h3>Pictures</h3>
                <hr></hr>
                <img src={item.imageLink} className='paragraphImage'></img><br></br>
                <hr></hr>
                <h3>Comments (Coming Soon...)</h3>
            </div>
        )
    })

    return (
        <div style={{ backgroundColor: "#fffeef" }}>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/*=============== CSS ===============*/}
            <link rel="stylesheet" href="ExploreStyle.css" />
            <title>Landscape responsive card - Bedimcode</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Navigation />

            <div className='Intro'>
                <h1 className='introHeading'>Tragedies in Sylhet</h1>
                <p className='introParagraph'>Sylhet, located in northeastern Bangladesh, is prone to various natural calamities, primarily due to its geographical position and climatic conditions. The region frequently experiences floods, especially during the monsoon season, which can devastate infrastructure, agriculture, and human settlements. Earthquakes are another potential threat due to Sylhet's proximity to tectonic fault lines. Additionally, the area is susceptible to landslides, particularly in hilly regions, caused by heavy rainfall and deforestation. These natural calamities pose significant challenges to the local population, necessitating robust disaster preparedness and response strategies to mitigate their impact.</p>
                <p className='introParagraph2'><h3>Tragedies Occurred in Sylhet</h3>
                    <hr></hr>
                    <ol className='introList'>
                        <ul className='introList'>
                            <li>1. Major Flood of 1998</li>
                            <li>2. Severe Flood of 2004</li>
                            <li>3. Flash Flood of 2007</li>
                            <li>4. Flood of 2022</li>
                        </ul>
                    </ol>
                </p>
                <p className='introParagraph'>If you don't see a detailed post about a tragedy that occurred in Sylhet, please consider to contribute relevant information</p>
            </div>
            <div className="containers">
                <div className="card__container">
                    {blogCards}
                    <article className="card__article">
                        <a href='/tragedypost'><img
                            src={require("../Assets/add.png")}
                            alt="image"
                            className="card__img"
                            id="addImage"
                        /></a>
                        <div className="card__data">
                            <span className="card__description">Add description</span>
                            {/* <h2 class="card__title">Path Of Peace</h2> */}
                            <h2 className="card__title">Add title</h2>
                            <a href="#2" className="card__button">
                                Read More
                            </a>
                        </div>
                    </article>
                </div>
            </div>
            <main>
                {postParagraph}
            </main>

            <Footer />
        </div>
    )
}

export default Tragedies;