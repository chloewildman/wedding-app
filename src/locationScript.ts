
// Venue coordinates
const venueLatitude = 40.798214;
const venueLongitude = -77.859909;

// API
async function fetchDistanceData(latitude: number, longitude: number, venueLatitude: number, venueLongitude: number) {
    const apiKey = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImM0Y2VkZWM5NmU4YzRhMjc4ODVkODI1NmYzM2JhZmNiIiwiaCI6Im11cm11cjY0In0=';
    const apiURL = 'https://api.openrouteservice.org/v2/directions/driving-car';

    const body = {
        coordinates: [
            [longitude, latitude],
            [venueLongitude, venueLatitude]
        ]
    };

    try {
        const res = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error fetching distance data:', err);
    }
}

async function getDistanceData(latitude: number, longitude: number, venueLatitude: number, venueLongitude: number) {
    const distanceData = document.getElementById('distanceData');
    if (!distanceData) return;

    const data = await fetchDistanceData(latitude, longitude, venueLatitude, venueLongitude);

    if (data && data.routes && data.routes.length > 0) {
        const summary = data.routes[0].summary;
        const distanceMiles = (summary.distance / 1609.34).toFixed(2);
        const durationSec = summary.duration;
        const hours = Math.floor(durationSec / 3600);
        const minutes = Math.round((durationSec % 3600) / 60);

        let durationText = '';
        if (hours > 0) {
            durationText += `${hours} hour${hours !== 1 ? 's' : ''} `;
        }
        durationText += `${minutes} minute${minutes !== 1 ? 's' : ''}`;

        distanceData.innerHTML = `Driving distance: ${distanceMiles} miles<br>Estimated time: ${durationText} <br> <i>*This estimate is provided by OpenSource, not Google, and therefore may vary from Google directions.</i>`;
    } else {
        distanceData.textContent = "Unable to retrieve distance data.";
    }
}

function successCallback(position: GeolocationPosition) {
    const locationData = document.getElementById('locationData');
    const googleRef = document.getElementById('googleRef');
    if (!locationData || !googleRef) return;

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const googleLink = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${venueLatitude},${venueLongitude}`;

    locationData.textContent = `Your location: Latitude: ${latitude}, Longitude: ${longitude}`;

    googleRef.onclick = () => {
        window.open(googleLink, '_blank');
    };

    getDistanceData(latitude, longitude, venueLatitude, venueLongitude);

    setTimeout(() => {
        googleRef.classList.remove('hidden');
    }, 500);
}


function errorCallback(error: GeolocationPositionError) {
    const locationData = document.getElementById('locationData');
    if (!locationData) return;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationData.textContent = "User denied geolocation permission.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationData.textContent = "Location information unavailable.";
            break;
        case error.TIMEOUT:
            locationData.textContent = "Geolocation request timed out.";
            break;
        default:
            locationData.textContent = "An unknown error occurred.";
            break;
    }
}


// API local data
interface PlaceProperties {
    name?: string;
    formatted?: string;
    lat?: number;
    lon?: number;
    categories?: string[];
    datasource?: {
        raw?: {
            cuisine?: string;
        };
    };
}

interface Feature {
    properties: PlaceProperties;
}

interface GeoapifyResponse {
    features: Feature[];
}

class Place {
    name: string;
    address: string;
    lat: number | null;
    lon: number | null;
    categories: string[];
    cuisine: string[];

    constructor(properties: PlaceProperties) {
        this.name = properties.name ?? 'Unnamed Place';
        this.address = properties.formatted ?? '';
        this.lat = properties.lat ?? null;
        this.lon = properties.lon ?? null;
        this.categories = properties.categories ?? [];
        const rawCuisine = properties.datasource?.raw?.cuisine;

        if (typeof rawCuisine === 'string') {
            this.cuisine = rawCuisine.split(';').map(c => c.trim())
                .map(c => c.trim().replace(/_/g, ' '));
        } else {
            this.cuisine = [];
        }
    }

    toCardElement(): HTMLDivElement {
        const card = document.createElement('div');
        card.className = 'localCard';
        const cuisineTags = this.cuisine
            .map(c => `<span class="cuisine-tag">${c}</span>`)
            .join('');
        card.innerHTML = `
      <h3 class="cardHeader">${this.name} ${this.cuisine.length > 0 ? cuisineTags : ''}</h3>
      <p>${this.address}</p>
    `;
        return card;
    }
}

async function fetchLocalData(): Promise<GeoapifyResponse | undefined> {
    const apiKey = '89df25017fd14bee89a6a739b4bcc030';
    const apiURL = 'https://api.geoapify.com/v2/places';

    const params = new URLSearchParams({
        categories: 'catering.restaurant',
        filter: `circle:${venueLongitude},${venueLatitude},1609.344`,
        limit: String(20),
        apiKey: apiKey
    });

    try {
        const res = await fetch(`${apiURL}?${params.toString()}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error fetching local data:', err);
    }
}

// Use Place objects
async function getLocalData() {
    const data: GeoapifyResponse | undefined = await fetchLocalData();
    const container = document.getElementById('localData');
    if (!container) return;
    container.innerHTML = '';

    if (data && data.features && data.features.length > 0) {
        const places: Place[] = data.features.map((f: Feature) => new Place(f.properties));

        places.forEach((place: Place) => {
            console.log(place);
            container.appendChild(place.toCardElement());
        });
    } else {
        container.textContent = 'No nearby places found.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getLocalData();
});

export { getLocalData, getDistanceData, successCallback, errorCallback };
