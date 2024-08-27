// EXPLORE SYLHET
import '../PageStyle/ExploreStyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Footer from './Footer';
// const server = process.env.SERVER_ADDRESS

function Education() {

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
                    <h2 className="card__title">{item.institute}</h2>
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
                <h2>{item.institute}</h2>
                <hr></hr>
                <h3>Location</h3>
                <p>{item.location}</p>
                <h3>Description</h3>
                <p>{item.eduDescription}</p>
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
            <Navigation/>
            
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
                <p className='introParagraph'>If you don't see a detailed post about your School, College, or University, consider writing a detailed blog about your institution</p>
            </div>
            <div className="containers">
                <div className="card__container">
                    {blogCards}
                    <article className="card__article">
                        <a href='/edupost'><img
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

export default Education;