import { Link } from "react-router-dom";
import "../css/reset.css"
import "../css/story.css"
import "../css/style.css"

function OurStory() {
    return (
        <div className="storyPage">
        <div className="storyHeading">
            <h2>Major moments</h2>
            <p>Read this page to learn more about the major milestones of our relationship. Some of our favorite moments are the little experiences we've had together. Have a look at some of our
                favorite memories by exporing the <Link to="/gallery" className="storyLink">Gallery</Link>.</p>
        </div>
        <div className="timelineContainer">
            <section className="timelineYear">
                <h2 className="year">2018</h2>
                <div className="events">
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/oldMain.jpg`} alt="A picture of Old Main, a historical building on Penn State campus."></img>
                            <h2>Chloe chooses Penn State</h2>
                            <small>January-July 2018</small>
                            <p>Chloe chooses to go to Penn State for college. She schedules her New Student Orientation,
                                where
                                she will pick her classes, for early in the summer. Two days before her orientation, she
                                is sick
                                for
                                the first time in two years. She's forced to reschedule for the weekend before classes
                                start.
                            </p>
                        </div>
                    </div>
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <h2>Michael and Chloe take Ballroom Dance class</h2>
                            <small>August 2018</small>
                            <p>Michael was in his senior year and still needed a health gen ed. Meanwhile,
                                Chloe is extremely limited due to the delayed orientation date. Both of them select
                                ballroom dance as a default.</p>
                            <p>Michael notices Chloe immediately. Chloe notices Michael too, and has a strange feeling
                                that
                                she
                                knew him somehow. After a few classes, they exchange numbers and decide they will be
                                dance
                                partners for class.</p>
                        </div>
                    </div>
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/firstDate.jpg`} alt="Chloe and Michael smile at the camera laying beside each other on their first date."></img>
                            <h2>First date</h2>
                            <small>September 7, 2018</small>
                            <p>The night of September 7, 2018, Michael and Chloe meet at the HUB lawn on campus. They
                                spread
                                out
                                a blanket, look at the stars, get to know each other, and share music. Toward the end of
                                the
                                night, they go to the gazebo on the HUB lawn, and practice their steps.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="timelineYear">
                <h2 className="year">2019</h2>
                <div className="events">
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/tailgate.jpg`} alt="Michael and Chloe smile in Penn State attire at a tailgate."></img>
                            <h2>The school year comes to an end</h2>
                            <small>May 2019</small>
                            <p>Chloe and Michael spend the school year together.</p>
                        </div>
                    </div>
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/MHgrad.jpg`} alt="Chloe hugs Michael in his cap and gown."></img>
                            <h2>Michael graduates</h2>
                            <small>May 4, 2019</small>
                            <p>Michael graduates from Penn State, beginning Michael and Chloe's long distance journey.
                                Michael
                                regularly travels 3-4 hours to visit Chloe, and vice versa.</p>
                        </div>
                    </div>
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/gazebo1.JPG`} alt="The silhouette of Michael and Chloe dancing in the Penn State gazebo."></img>
                            <h2>First anniversary</h2>
                            <small>July 2019</small>
                            <p>To celebrate their upcoming first anniversary, they take their first professional photos
                                together, including
                                photos in the gazebo they danced in during their first date.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="timelineYear">
                <h2 className="year">2020-2021</h2>
                <div className="events">
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <h2>COVID</h2>
                            <small>2020</small>
                            <p>COVID begins while Michael and Chloe are still long-distance. They Facetime regularly.
                            </p>
                        </div>
                    </div>
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/CWgrad.JPG`} alt="Chloe with her graduation gown."></img>
                            <h2>Chloe graduates</h2>
                            <small>December 2021</small>
                            <p>Chloe graduates from Penn State and begins looking for a post-bacc position. Michael and
                                Chloe
                                plan to move in together.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="timelineYear">
                <h2 className="year">2022</h2>
                <div className="events">
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/charleston.jpg`} alt="Chloe and Michael grin excitedly holding the key to their first apartment."></img>
                            <h2>Moving to Charleston, SC</h2>
                            <small>March 2022</small>
                            <p>Chloe gets a position at the Medical University of South Carolina and they move to
                                Charleston
                                together.</p>
                        </div>
                    </div>
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/adoptAppa.JPG`} alt="Michael and Chloe hold Appa for a smiling family photo."></img>
                            <h2>A new family member</h2>
                            <small>August 2022</small>
                            <p>Michael and Chloe adopt Appa!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="timelineYear">
                <h2 className="year">2025</h2>
                <div className="events">
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/sellersville.jpg`} alt="Much older now, Michael and Chloe pose again with Appa for a family photo."></img>
                            <h2>Moving to Sellersville, PA</h2>
                            <small>July 2025</small>
                            <p>Michael, Chloe, and Appa finally move back to Pennsylvania to be closer to family.</p>
                        </div>
                    </div>
                    <div className="timelineEvent">
                        <span className="arrow"></span>
                        <div className="eventText">
                            <img src={`${import.meta.env.BASE_URL}/images/storyPage/proposal.JPG`} alt="Michael proposes to Chloe in the Penn State gazebo."></img>
                            <h2>Engaged!</h2>
                            <small>August 16, 2025</small>
                            <p>To celebrate their 7 year anniversary, Michael and Chloe visit Penn State for the first
                                time
                                since Chloe graduated. They visit all their favorite places -- the classrooms where they
                                studied
                                together, the tea shop they visited, and of course, the HUB gazebo. They dance in the
                                gazebo
                                for
                                the first time since they were at school together. Michael proposes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default OurStory;
