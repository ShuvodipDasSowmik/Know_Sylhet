// EXPLORE SYLHET
import '../PageStyle/ExploreStyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

// const server = process.env.SERVER_ADDRESS

function Explore() {

    const hash = "#"
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios.get("https://ksserver-production.up.railway.app/edu")
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
                    <span className="card__description">{item.location}</span>
                    {/* <h2 class="card__title">The Great Path</h2> */}
                    <h2 className="card__title">{item.institution}</h2>
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
                <h2>{item.institution}</h2>
                <hr></hr>
                <h3>Location</h3>
                <p>{item.Location}</p>
                <h3>Description</h3>
                <p>{item.description}</p>
                <h3>Pictures</h3>
                <hr></hr>
                <img src={item.imageLink} className='paragraphImage'></img>
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
                            <a href="/explore">Explore Sylhet</a>
                        </li>
                        <li>
                            <a href="#" className="active">Education</a>
                        </li>
                        <li>
                            <a href="/tragedies">Tragedies</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='Intro'>
                <h1 className='introHeading'>Education in Sylhet</h1>
                <p className='introParagraph'>While Sylhet is renowned as a prime tourism spot, it is not as advanced in education. Educational institutes, apart from a handful like Shahjalal University of Science and Technology (SUST) for undergraduate and postgraduate studies, Murari Chand College for HSC, Sylhet Govt. Pilot High School, Govt. Agragami Girls' High School, Blue Bird High School, and Jalalabad Cantonment Public High School for pre-HSC, fail to deliver the high standard of education that students deserve.
                    <br></br>
                    The results of Sylhet board in Boards exams have always been behind other boards.
                    <br></br>
                    Although the educational institutions are not the only ones to blame, the mindset of guardians about education should also be considered. There is also a high tendency for Sylhety people to go abroad (mostly to London and Australia) for studies after their HSC.</p>
                <p className='introParagraph2'><h3>Educational institutes in Sylhet</h3>
                <hr></hr>
                    <ol className='introList'>
                        <li><h3>Schools :</h3>
                            <ul className='introList'>
                                <li>1. Sylhet Government Pilot High School</li>
                                <li>2. Govt. Agragami Girls' High School and College</li>
                                <li>3. Blue Bird High School and College</li>
                                <li>4. Police Lines' High School</li>
                                <li>5. Cambridge Grammar School & College</li>
                                <li>6. Oxford International School & College Sylhet</li>
                                <li>7. Anandaniketan</li>
                                <li>8. Banyan British School</li>
                                <li>9. Presidency School & College</li>
                                <li>10. Sylhet Grammar School</li>
                                <li>11. Sylhet International School & College</li>
                                <li>12. The Sylhet Khajanchibari International School & College</li>
                                <li>13. Sunny Hill International School</li>
                                <li>14. Kawsarabad International School</li>
                                <li>15. British Bangladesh International School & College</li>
                            </ul>
                        </li>
                        <li><h3>Colleges :</h3>
                            <ul className='introList'>
                                <li>1. Murari Chand College</li>
                                <li>2. Jalalabad Cantonment Public School and College</li>
                                <li>3. Scholarshome</li>
                                <li>4. Hazrat Shahjalal (RH) College</li>
                                <li>5. Sylhet Government Women's College</li>
                                <li>6. Sylhet Cantonment College</li>
                                <li>7. Sylhet Science and Technology College</li>
                                <li>8. Brit Institute London -Sylhet Campus</li>
                            </ul>
                        </li>
                        <li><h3>University</h3>
                            <ul className='introList'>
                                <li>1. Shahjalal University of Science and Technology (SUST)</li>
                                <li>2. Sylhet Agricultural University</li>
                                <li>3. Sylhet Engineering College</li>
                                <li>4. Leading University</li>
                                <li>5. Sreemangal Metropolitan University</li>
                                <li>6. North East University</li>
                                <li>7. RTM AL-KABIR TECHNICAL UNIVERSITY</li>
                                <li>8. Sylhet International University</li>
                                <li>9. Army Institute of Business Administration</li>
                            </ul>
                        </li>
                    </ol>
                </p>
                <p className='introParagraph'>If you don't see a detailed post about your School, College, or University, consider </p>
            </div>
            <div className="container">
                <div className="card__container">
                    {blogCards}
                    <article className="card__article">
                        <a href='/travelpost'><img
                            src="https://cdn.iconscout.com/icon/free/png-512/free-add-insert-plus-new-tag-30489.png?f=webp&w=256"
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