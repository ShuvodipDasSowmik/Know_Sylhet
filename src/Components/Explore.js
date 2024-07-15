// EXPLORE SYLHET
import '../PageStyle/ExploreStyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

// const server = process.env.SERVER_ADDRESS

function Explore() {

    const hash = "#"
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios.get("https://ksserver-production.up.railway.app")
        .then(queries => {setQueries(queries.data)
            // console.log(queries.data);
    })
        .catch(err => console.log(err))
    }, [])

    const blogCards = queries.map((item) => {
        console.log(item);
    
        return (
            <article className="card__article">
                <img src={item.imageLink} alt="image" className="card__img"/>
                <div className="card__data">
                    <span className="card__description">{item.cardDescription}</span>
                    {/* <h2 class="card__title">The Great Path</h2> */}
                    <h2 className="card__title">{item.title}</h2>
                    <a href = {hash.concat(item._id)}  className="card__button">
                        Read More
                    </a>
                </div>
            </article>
        )
    })

    const postParagraph = queries.map((item) => {
        return(
            <div className='mainDiv' id={item._id}>
            <h2>{item.title}</h2>
            <hr></hr>
            <h3>How To Reach</h3>
            <p>{item.howToReach}</p>
            <h3>What To See</h3>
            <p>{item.whatToSee}</p>
            <h3>Pictures</h3>
            <hr></hr>
            <img src= {item.imageLink} className='paragraphImage'></img>
            </div>
        )
    })

    return (
        <>
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
            <header>
                <nav>
                    {/* <label for="" class="menubt">
             <i class="fas fa-bars"></i>
        </label> */}
                    <input type="checkbox" id="click" />
                    <label htmlFor="click" className="menu-btn">
                        <i className="fas fa-bars" />
                    </label>
                    <label className="logo">Know Sylhet</label>
                    <ul>
                        <li>
                            <a href="/user">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#"  className="active">Explore Sylhet</a>
                        </li>
                        <li>
                            <a href="/edu">Education</a>
                        </li>
                        <li>
                            <a href="/tragedies">Tragedies</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='Intro'>
                <h1 className='introHeading'>Travel Sylhet</h1>
                <p className='introParagraph'>Insert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some ParagraphInsert Some Paragraph</p>
            </div>
            <div className="container">
                <div className="card__container">
                    {blogCards}
                    <article className="card__article">
                        <a href='/travelpost'><img
                            src="https://cdn.iconscout.com/icon/free/png-512/free-add-insert-plus-new-tag-30489.png?f=webp&w=256"
                            alt="image"
                            className="card__img"
                            id = "addImage"
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
    )
}

export default Explore;