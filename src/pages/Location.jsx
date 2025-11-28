import { useEffect } from "react";
import { getLocalData, getDistanceData, successCallback, errorCallback } from "../locationScript";

function Location() {
    useEffect(() => {
        // Run local places fetch when component mounts
        getLocalData();
    }, []);

    const getLocRequest = () => {
        const locationData = document.getElementById("locationData");
        if (!locationData) return;

        if (navigator.geolocation) {
            locationData.textContent = "Getting your location...";
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            locationData.textContent = "Geolocation is not supported by this browser.";
        }
    };


    return (
        <div className="locationPage">
            <div className="eventLocation">
                <img src={`${import.meta.env.BASE_URL}/images/dunluceCastle.jpg`} alt="Image of Dunluce Castle in Ireland."></img>
                <div className="locationDesc">
                    <h2>Castle Lorem Ipsum, Pennsylvania</h2>
                    <hr></hr>
                    <p>We invite you to join us at this fake castle that is definitely in Pennsylvania to celebrate our
                        wedding!</p>
                    <p>Those who are invited to attend the main ceremony may also stay at the castle with us at no cost. We
                        look forward to making long-lasting, intimate memories with our family and friends.</p>
                </div>
            </div>
            <div className="userLocation">
                <p>Want to know how far you are from the venue?</p>
                <button id="getLoc" className="getLoc" type="getLoc" onClick={getLocRequest}>Check distance from venue</button>
                <p id="locationData"></p>
                <p id="distanceData"></p>
                <button id="googleRef" className="googleRef hidden">Get directions</button>
            </div>
            <div className="local">
                <h2>Want something to eat or drink? Here are some restaurants within just 1 mile!</h2>
                <div id="localData"></div>
            </div>
            <script src="../dist/locationScript.js"></script>
        </div>
    )
}

export default Location;