import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="homeMain">
            <img src={`${import.meta.env.BASE_URL}images/laughing.JPG`} alt="Michael and Chloe sitting on a ledge and laughing." className="homeImg"></img>
            <div className="informationContainer">
                <h2 className="engagementHeader">We are engaged!</h2>
                <p className="homeText">And we want to celebrate with YOU. Please join us for the completely real wedding on September 3, 2026 at
                    Castle Lorem Ipsum, Pennsylvania. Learn more about the venue by exploring the <Link to="/location" className="homeLinks">Location</Link> tab.
                </p>
                <p className="homeText">You can find a description of the anticipated schedule by visiting the <Link to="/itinerary" className="homeLinks">Itinerary</Link>. Primary guest arrival will begin September 3, 2026 at noon. These
                    guests
                    will be present for an intimate ceremony. Additional guests are invited to join us the next day for our
                    reception party. You will be receiving an invitation with information about your guest status. After you
                    have received your formal invitation, please don't forget to <Link to="/rsvp" className="homeLinks">RSVP</Link>.</p>
                <div className="engagementStoryContainer">
                    <img src={`${import.meta.env.BASE_URL}images/hands.jpeg`} alt="Michael and Chloe sitting on a ledge and laughing."></img>
                    <div className="engagementStory">
                        <h2 className="engagementHeader">How did it happen?</h2>
                        <p className="homeText">We met each other when we both attended the Pennsylvania State University for our
                            undergraduate degrees. For our 7-year anniversary, we finally visited our alma mater. After a
                            morning of
                            revisiting our classrooms and favorite locations, we went to the location of our first date, and
                            Michael
                            proposed. To read more about our
                            story so far, check out <Link to="/story" className="homeLinks">Our Story</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;