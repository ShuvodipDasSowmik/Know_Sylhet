// EXPLORE SYLHET
import '../PageStyle/ExploreStyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation'
import Footer from './Footer';

// const server = process.env.SERVER_ADDRESS

function Explore() {

    const hash = "#"
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios.get("https://ksserver-production.up.railway.app/travel")
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
                    <span className="card__description">{item.cardDescription}</span>
                    {/* <h2 class="card__title">The Great Path</h2> */}
                    <h2 className="card__title">{item.title}</h2>
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
                <h2>{item.title}</h2>
                <hr></hr>
                <h3>How To Reach</h3>
                <p>{item.howToReach}</p>
                <h3>What To See</h3>
                <p>{item.whatToSee}</p>
                <h3>Pictures</h3>
                <hr></hr>
                <img src={item.imageLink} className='paragraphImage'></img><br></br>
                <hr></hr>
                <h3>Comments (Coming Soon...)</h3>
            </div>
        )
    })

    return (
        <div style={{backgroundColor: "#fffeef"}}>
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
                <h1 className='introHeading'>Travel Sylhet</h1>
                <p className='introParagraph'>Sylhet, a picturesque region in northeastern Bangladesh, is renowned for its stunning natural beauty and vibrant tourism industry. The area is dotted with lush tea gardens, serene waterfalls, and the tranquil riverbanks of the Surma and Kushiara rivers. Visitors are often captivated by the panoramic views of the rolling hills and the diverse flora and fauna that thrive in this region. The rich cultural heritage of Sylhet, combined with its natural wonders, makes it a popular destination for both domestic and international travelers seeking to experience the enchanting landscapes and unique traditions of Bangladesh.</p>
                <p className='introParagraph2'><h3>Tourist Spots in Sylhet include:</h3>
                    <ol className='introList'>
                        <li>1. Jaflong,</li>
                        <li>2. Ratargul Swamp Forest,</li>
                        <li>3. Baish Tila,</li>
                        <li>4. Lawachara National Park,</li>
                        <li>5. Madhabkunda Waterfall,</li>
                        <li>6. Lalakhal,</li>
                        <li>7. Pangthumai Waterfall,</li>
                        <li>8. Bisnakandi,</li>
                        <li>9. Baikka Beel,</li>
                        <li>10. Hakaluki Haor</li>
                    </ol>
                    If you have already paid a visit in any of those places, consider writing a detailed blog about your experience and costs you had to bear.
                </p>
            </div>
            <div className="containers">
                <div className="card__container">
                    {blogCards}
                    <article className="card__article">
                        <a href='/travelpost' ><img
                            src={require("../Assets/add.png")}
                            alt="image"
                            className="card__img"
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

export default Explore;