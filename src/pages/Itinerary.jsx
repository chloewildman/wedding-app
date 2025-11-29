import ItineraryContainer from "../components/ItineraryContainer";

function Itinerary() {
    return (
        <section className="itineraryPage">
             <img src={`${import.meta.env.BASE_URL}images/storyPage/proposal.JPG`} alt="Michael proposes to Chloe at the Penn State gazebo." className="wideImg"></img>
             <div className="itinerary">
                <ItineraryContainer />
             </div>
        </section>
    )
}
export default Itinerary;